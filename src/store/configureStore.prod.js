import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  let enhancer = null;
  enhancer = compose(
    applyMiddleware(thunk)
  );
  return createStore(rootReducer, initialState, enhancer);
}
