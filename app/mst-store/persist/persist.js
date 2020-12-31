import {Store} from '../store';
import {persistStore} from './persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_KEY = 'straivetask';

const initialState = {};
const storeEnv = {};

export const persist = persistStore(STORE_KEY, Store, {
  initialState,
  storeEnv,
  storage: AsyncStorage,
  whiteList: [''],
  blackList: [''],
});
