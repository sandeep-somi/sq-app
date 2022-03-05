import { configureStore } from '@reduxjs/toolkit';
import search from './search';
import categories from './categories';
import options from './options';
import paymentMethods from './paymentMethods';

const store = configureStore({
  reducer: {
    search,
    categories,
    options,
    paymentMethods
  },
});

export default store;
