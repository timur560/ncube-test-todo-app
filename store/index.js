import { configureStore } from '@reduxjs/toolkit'
import { PersistentStorage } from './PersistentStorage';
import { todosReducer } from './todoStore';

// const initialState = {
//   todos: {
//     isLoading: false,
//     error: false,
//     data: [],
//   },
// };

const config = {
  reducer: {
    todos: todosReducer,
  },
};

const preloadedState = PersistentStorage.preload();

if (preloadedState) {
  config.preloadedState = preloadedState;
}

export const store = configureStore(config);

store.subscribe(() => PersistentStorage.listener(store.getState()));
