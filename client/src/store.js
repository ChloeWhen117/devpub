import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState,
  compose( 
    applyMiddleWare(...middleware), 
    window.__REDUX___DEVTOOLS__EXTENSION__ && window.__REDUX___DEVTOOLS__EXTENSION__()
  )
);

export default store;