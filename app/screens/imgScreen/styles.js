import {StyleSheet, Dimensions} from 'react-native';

let dimensions = Dimensions.get('window');
let deviceHeight = dimensions.height;
let deviceWidth = dimensions.width;

const styles = StyleSheet.create({
  top: {
    top: '50%',
    left: '50%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000069',
  },
  imgBeckGround: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  img: {
    height: deviceHeight,
    width: deviceWidth,
  },
  closeButton: {
    textAlign: 'right',
    fontSize: 30,
    color: '#DD0101',
    margin: 10,
  },
});
export default styles;
