import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const Pagination = memo(
  ({showPrev, showNext, paginationIncrease, paginationDecrease}) => {
    console.log(showNext, showPrev);
    return (
      <>
        {showPrev && (
          <View style={styles.subContainer}>
            <TouchableOpacity
              onPress={paginationDecrease}
              style={styles.touchWidth}>
              <Text style={styles.previous}>Previous</Text>
            </TouchableOpacity>
          </View>
        )}
        {showNext && (
          <View style={styles.subContainer}>
            <TouchableOpacity
              onPress={paginationIncrease}
              style={styles.touchWidth}>
              <Text style={styles.next}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  },
);
export default Pagination;
