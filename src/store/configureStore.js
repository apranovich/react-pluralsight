import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function(initialState) {

  let middlewares = [ thunk ];

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push( reduxImmutableStateInvariant() );
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( ...middlewares )
  );
}