import React from 'react';
import {ActivityIndicator, View} from 'react-native';
export default function Loader() {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size="small" color="#5A8EA8" />
    </View>
  );
}
