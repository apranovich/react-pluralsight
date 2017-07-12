import ACTION_TYPES from '../actions/actionTypes';
import initialState from './initialState';

const actionEndsInSuccess = (type) => type.substring(type.length - 8) === '_SUCCESS';

export default function(state = initialState.numAjaxCallsInProgress, action) {
  if( action.type === ACTION_TYPES.BEGIN_AJAX_CALL ) {
    return state + 1;
  } else if(action.type === ACTION_TYPES.AJAX_CALL_ERROR 
    || actionEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}