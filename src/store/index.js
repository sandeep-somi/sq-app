import { configureStore } from '@reduxjs/toolkit';
import search from './search';
import categories from './categories';
import options from './options';

const store = configureStore({
  reducer: {
    search,
    categories,
    options
  },
});

export default store;
