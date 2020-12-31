import {onSnapshot, addMiddleware} from 'mobx-state-tree';
import {omit, isString, pick, merge, isEmpty, isEqual} from 'lodash';
import {actionLogger} from 'mst-middlewares';

export const persistStore = async (name, model, options = {}) => {
  const {
    storage,
    initialState = {},
    jsonify = true,
    storeEnv = {},
    whitelist = [],
    blacklist = [],
  } = options;

  if (!storage) {
    throw new Error(
      'Please configure a different storage engine via the storage: option.',
    );
  }

  const storageData = await storage.getItem(name);
  const storageSnapshot = !isString(storageData)
    ? storageData
    : JSON.parse(storageData);
  const mergedSnapshot = merge({}, initialState, storageSnapshot);
  const store = model.create(mergedSnapshot, storeEnv);

  if (process.env.NODE_ENV === 'development') {
    addMiddleware(store, actionLogger);
  }

  let prevSnapshot = null;

  onSnapshot(store, (_snapshot) => {
    const snapshot = omit(
      isEmpty(whitelist) ? _snapshot : pick(_snapshot, whitelist),
      blacklist,
    );
    if (!isEqual(prevSnapshot, snapshot)) {
      const item = !jsonify ? snapshot : JSON.stringify(snapshot);
      storage.setItem(name, item);
      prevSnapshot = snapshot;
    }
  });

  return store;
};
