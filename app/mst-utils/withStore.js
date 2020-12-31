import {observer, inject} from 'mobx-react';
import {compose} from './compose';

export const withStore = compose(inject('store'), observer);
