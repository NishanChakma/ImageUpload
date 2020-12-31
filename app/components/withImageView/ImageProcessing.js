import React, {memo, useCallback} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ImageProcessing = memo((item) => {
  const navigation = useNavigation();
  const onclickImg = useCallback(() => {
    navigation.navigate('ImageScreen', {
      path: item.path,
    });
  }, []);
  return (
    <View style={styles.firstImgBox}>
      <TouchableOpacity onPress={onclickImg}>
        <Image style={styles.img} source={{uri: item.path}} />
      </TouchableOpacity>
    </View>
  );
});
export default ImageProcessing;
