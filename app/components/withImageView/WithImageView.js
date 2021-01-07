import React, {useCallback, useState, useEffect, memo} from 'react';
import {View, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageProcessing from './ImageProcessing';
import Pagination from './pagination';
import {withStore} from '../../mst-utils/withStore';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import UploadImage from '../../hooks/uploadImage';
import Loader from '../loader/loader';
import styles from './styles';
import {getSnapshot} from 'mobx-state-tree';

const WithImageView = ({
  store: {
    imagestore: {loading, ImageDataSave, imageData}, //access mobx store
  },
}) => {
  const storageData = getSnapshot(imageData);
  const [index, setIndex] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const key = useCallback(() => uuidv4(), []);
  const noImageLogo = require('../../assets/noImageLogo.png');

  //pagination/image render/split/show or hide button
  const imageDataProcess = useCallback(() => {
    let i,
      j,
      data,
      endPoint = 4;
    index + 4 >= storageData.length ? setShowNext(false) : setShowNext(true);
    if (storageData.length < 5) {
      data = storageData;
      setShowPrev(false);
    } else {
      for (i = index, j = storageData.length; i < j; i += endPoint) {
        data = storageData.slice(i, i + endPoint);
        index === 0 ? setShowPrev(false) : setShowPrev(true);
        data.length < 4 ? setShowNext(false) : null;
        break;
      }
    }
    setImageArray(data);
  }, [storageData, index]);

  useEffect(() => {
    imageDataProcess();
  }, [storageData, index]);

  //image upload function
  const uploadImage = useCallback(() => {
    UploadImage(ImageDataSave);
  }, []);

  const renderItem = useCallback(({item}) => {
    return <ImageProcessing {...item} />;
  });

  //pagination next button function
  const paginationIncrease = useCallback(() => {
    setIndex(index + 4);
    imageDataProcess();
  }, [index]);

  //pagination prev button function
  const paginationDecrease = useCallback(() => {
    setIndex(index - 4);
    imageDataProcess();
  }, [index]);

  //when app functions is loading/processing data
  while (loading) {
    <Loader />;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.imgTopBox, styles.itemCenter]}>
        <TouchableOpacity onPress={uploadImage}>
          <Image style={styles.noImgLogo} source={noImageLogo} />
        </TouchableOpacity>
      </View>
      <View style={styles.imgBottomBox}>
        <FlatList
          data={imageArray}
          renderItem={renderItem}
          keyExtractor={key}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View style={styles.bottomContainer}>
        <Pagination
          showPrev={showPrev}
          showNext={showNext}
          paginationIncrease={paginationIncrease}
          paginationDecrease={paginationDecrease}
        />
      </View>
    </View>
  );
};

export default withStore(WithImageView);
