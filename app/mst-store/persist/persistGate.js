/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {Provider} from 'mobx-react';

export const PersistGate = ({loading = null, persist, children}) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const watchComplete = async () => {
      const s = await persist;
      setStore(s);
    };

    watchComplete();
  }, []);

  if (!store) {
    return loading;
  }

  return <Provider store={store}>{children}</Provider>;
};
