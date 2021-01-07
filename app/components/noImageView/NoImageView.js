import React, {useCallback} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import UploadImage from '../../hooks/uploadImage';
import {withStore} from '../../mst-utils/withStore';
import styles from './styles';

const NoImageView = ({
  store: {
    imagestore: {ImageDataSave},
  },
}) => {
  const noImageLogo = require('../../assets/noImageLogo.png');
  const onPressHandle = useCallback(() => {
    UploadImage(ImageDataSave);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.noImgTopBox}>
        <TouchableNativeFeedback onPress={onPressHandle}>
          <ImageBackground source={noImageLogo} style={styles.noImgLogo}>
            <Text style={styles.uploadText}>Upload</Text>
          </ImageBackground>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.noImgBottomBox}>
        <TouchableNativeFeedback onPress={onPressHandle}>
          <Text style={styles.noImgText}>Choose File</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default withStore(NoImageView);
