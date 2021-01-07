import React, {useCallback, useState, useEffect, memo} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
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
    imagestore: {loading, ImageDataSave, imageData},
  },
}) => {
  let storageData = getSnapshot(imageData);
  const [index, setIndex] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [showPrev, setShowPrev] = useState(false);
  const key = useCallback(() => uuidv4(), []);
  const noImageLogo = require('../../assets/noImageLogo.png');

  const imageDataProcess = useCallback(() => {
    let i,
      j,
      data,
      endPoint = 4;
    if (storageData.length < 5) {
      data = storageData;
      setShowPrev(false);
    } else {
      setShowPrev(true);
      for (i = index, j = storageData.length; i < j; i += endPoint) {
        data = storageData.slice(i, i + endPoint);
        break;
      }
    }
    setImageArray(data);
  }, [storageData, index]);

  useEffect(() => {
    imageDataProcess();
  }, [storageData, index]);

  const uploadImage = useCallback(() => {
    UploadImage(ImageDataSave);
  }, []);

  const renderItem = useCallback(({item}) => {
    return <ImageProcessing {...item} />;
  });

  const paginationIncrease = useCallback(() => {
    setIndex(index + 4);
    imageDataProcess();
  }, [index]);

  const paginationDecrease = useCallback(() => {
    if (index < 4) {
      alert('You are on the first page');
      return;
    } else {
      setIndex(index - 4);
      imageDataProcess();
    }
  }, [index]);

  while (loading) {
    <Loader />;
  }

  const PrevNext = memo(() => {
    return (
      <View style={styles.bottomContainer}>
        {showPrev && (
          <TouchableOpacity
            style={showPrev ? styles.leftBottomContainer : {flex: 1}}
            onPress={paginationDecrease}>
            <Text style={showPrev ? styles.previous : {textAlign: 'center'}}>
              Previous
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={showPrev ? styles.rightBottomContainer : {flex: 1}}
          onPress={paginationIncrease}>
          <Text style={showPrev ? styles.next : {textAlign: 'center'}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
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
      <PrevNext />
    </View>
  );
};

export default withStore(WithImageView);
