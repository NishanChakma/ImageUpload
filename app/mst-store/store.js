import {types, getEnv} from 'mobx-state-tree';
import {ImageStore} from './models/index';

export const Store = types
  .model({
    imagestore: types.optional(ImageStore, {}),
  })
  .views((self) => ({}))
  .actions((self) => ({
    afterCreate() {},
  }));
export default Store;
