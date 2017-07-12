import ACTION_TYPES from './actionTypes';

export function beginAjaxCall() {
  return { type: ACTION_TYPES.BEGIN_AJAX_CALL };
}

export function ajaxCallError() {
  return { type: ACTION_TYPES.AJAX_CALL_ERROR };
}