import ImagePicker from 'react-native-image-crop-picker';

const UploadImage = async (ImageDataSave) => {
  return await ImagePicker.openCamera({
    width: 400,
    height: 400,
  })
    .then((image) => {
      ImageDataSave(image);
    })
    .catch((e) => {
      console.log('error: ', e);
    });
};

export default UploadImage;
