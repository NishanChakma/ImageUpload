import React, {useCallback} from 'react';
import {
  View,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ImageScreen = ({route: {params}}) => {
  const navigation = useNavigation();
  const onCLose = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <Modal
      style={[styles.top, {transform: 'translate(-50%, -50%) !important'}]}
      animationType="fade"
      transparent={true}
      visible={true}>
      <View style={styles.container}>
        <View style={styles.imgBeckGround}>
          <ImageBackground source={{uri: params.path}} style={styles.img}>
            <TouchableOpacity onPress={onCLose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
};

export default ImageScreen;
