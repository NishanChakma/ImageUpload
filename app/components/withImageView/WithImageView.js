import React, {useCallback, useState, useEffect, memo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import ImageProcessing from './ImageProcessing';
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

  //when app function is loading/processing data
  while (loading) {
    <Loader />;
  }

  //show previous and next button
  const PrevNext = memo(() => {
    return (
      <>
        {showPrev && (
          <View style={showPrev ? styles.leftBottomContainer : {flex: 1}}>
            <TouchableNativeFeedback onPress={paginationDecrease}>
              <Text style={showPrev ? styles.previous : styles.prevNext}>
                Previous
              </Text>
            </TouchableNativeFeedback>
          </View>
        )}
        {showNext && (
          <View style={showPrev ? styles.rightBottomContainer : {flex: 1}}>
            <TouchableNativeFeedback
              onPress={paginationIncrease}
              style={{backgroundColor: 'red'}}>
              <Text style={showPrev ? styles.next : styles.prevNext}>Next</Text>
            </TouchableNativeFeedback>
          </View>
        )}
      </>
    );
  });

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
        <PrevNext />
      </View>
    </View>
  );
};

export default withStore(WithImageView);
