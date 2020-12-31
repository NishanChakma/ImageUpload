import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {PersistGate, persist} from './mst-store/persist';
import RootNavigator from './navigation/index';

const App = () => {
  return (
    <PersistGate persist={persist}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
          <StatusBar barStyle="light-content" backgroundColor={'#00151C'} />
          <RootNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </PersistGate>
  );
};
export default App;
