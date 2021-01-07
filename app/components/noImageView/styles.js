import {StyleSheet, Dimensions} from 'react-native';

let dimensions = Dimensions.get('window');
let deviceHeight = Math.round((dimensions.width * 9) / 16);
let deviceWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noImgTopBox: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImgBottomBox: {
    height: '10%',
    backgroundColor: '#15638A',
    justifyContent: 'center',
  },
  noImgLogo: {
    height: deviceHeight / 1.5,
    width: deviceWidth / 2,
    justifyContent: 'flex-end',
  },
  uploadText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#fff',
  },
  noImgText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default styles;
