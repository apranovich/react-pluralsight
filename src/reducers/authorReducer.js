import ACTION_TYPES from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.authors, action) {
  switch(action.type) {
    case ACTION_TYPES.LOAD_AUTHORS_SUCCESS: {
      return action.authors;
    }

    default:
      return state;
  }
}