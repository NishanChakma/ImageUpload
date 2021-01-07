import {types, flow, getSnapshot} from 'mobx-state-tree';

const ImageData = types.model('ImageData', {
  index: types.optional(types.number, 0),
  height: types.optional(types.number, 0),
  width: types.optional(types.number, 0),
  mime: types.optional(types.string, ''),
  path: types.optional(types.string, ''),
  modificationDate: types.optional(types.string, ''),
});
export const ImageStore = types
  .model('ImageStore', {
    loading: true,
    imageData: types.optional(types.array(ImageData), []),
  })
  .actions((self) => ({
    ImageDataSave: flow(function* ImageDataSave(param) {
      try {
        self.loading = true;
        self.imageData = [...self.imageData, {...param}]; //array addition
      } catch (e) {
        self.loading = false;
        throw Error(e.message);
      } finally {
        self.loading = false;
      }
    }),

    DeleteImage: flow(function* DeleteImage(param) {
      try {
        self.loading = true;
        let a = self.imageData;
        a = a.reduce((p, c) => (c.index !== param && p.push(c), p), []); //array delete
        self.imageData = a;
      } catch (e) {
        self.loading = false;
        throw Error(e.message);
      } finally {
        self.loading = false;
      }
    }),

    afterCreate() {
      self.loading = false;
    },
  }));
