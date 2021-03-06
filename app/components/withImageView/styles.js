import {StyleSheet, Dimensions} from 'react-native';

let dimensions = Dimensions.get('window');
let deviceHeight = Math.round((dimensions.width * 9) / 16);
let deviceWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  previous: {
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  next: {
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchWidth: {padding: 12},
  prevNext: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 15,
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
  noImgText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  imgTopBox: {
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imgBottomBox: {
    height: deviceHeight / 2,
    marginTop: 20,
  },
  uploadText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#fff',
  },
  firstImgBox: {
    padding: 10,
  },
  img: {
    height: deviceHeight / 3,
    width: deviceWidth / 5,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  leftBottomContainer: {
    width: '50%',
    alignContent: 'flex-end',
  },
  rightBottomContainer: {
    width: '50%',
    alignContent: 'flex-start',
  },
});

export default styles;
