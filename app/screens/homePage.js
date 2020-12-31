import React from 'react';
import {withStore} from '../mst-utils/withStore';
import NoImageView from '../components/noImageView/NoImageView';
import WithImageView from '../components/withImageView/WithImageView';

const HomePage = ({
  store: {
    imagestore: {loading, imageData},
  },
}) => {
  while (loading) {
    <Loader />;
  }
  return imageData.length > 0 ? <WithImageView /> : <NoImageView />;
};

export default withStore(HomePage);
