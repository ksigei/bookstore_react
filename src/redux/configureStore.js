import { combineReducers, legacy_createStore as createStore } from 'redux';
import bookReducer from './Books/books';
import categoryReducer from './Categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

/* eslint-disable */
const store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
