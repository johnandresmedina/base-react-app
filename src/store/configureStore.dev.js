import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../rootReducer';
import DevTools from '../DevTools/Devtools';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk, createLogger()), DevTools.instrument()),
  );

  return store;
};

export default configureStore;
