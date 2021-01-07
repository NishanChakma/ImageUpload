import ImagePicker from 'react-native-image-crop-picker';

const UploadImage = async (ImageDataSave, lastIndex) => {
  return await ImagePicker.openCamera({
    width: 400,
    height: 400,
  })
    .then((image) => {
      let data = Object.assign({}, image, {index: lastIndex + 1});
      ImageDataSave(data);
    })
    .catch((e) => {
      console.log('error: ', e);
    });
};

export default UploadImage;
