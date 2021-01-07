import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const Pagination = memo(
  ({showPrev, showNext, paginationIncrease, paginationDecrease}) => {
    return (
      <>
        {showPrev && (
          <View
            style={showPrev ? styles.subContainer : styles.leftBottomContainer}>
            <TouchableOpacity
              onPress={paginationDecrease}
              style={styles.touchWidth}>
              <Text style={showPrev ? styles.previous : styles.prevNext}>
                Previous
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {showNext && (
          <View
            style={
              showNext ? styles.subContainer : styles.rightBottomContainer
            }>
            <TouchableOpacity
              onPress={paginationIncrease}
              style={styles.touchWidth}>
              <Text style={showPrev ? styles.next : styles.prevNext}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  },
);
export default Pagination;
