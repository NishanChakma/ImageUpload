import React, {memo, useCallback} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ImageProcessing = memo(({item, DeleteImage}) => {
  const navigation = useNavigation();
  const onclickImg = useCallback(() => {
    navigation.navigate('ImageScreen', {
      path: item.path,
    });
  }, []);

  const longPressButton = useCallback(() => {
    DeleteImage(item.index);
  }, []);

  return (
    <View style={styles.firstImgBox}>
      <TouchableOpacity onPress={onclickImg} onLongPress={longPressButton}>
        <Image style={styles.img} source={{uri: item.path}} />
      </TouchableOpacity>
    </View>
  );
});
export default ImageProcessing;
