import ACTION_TYPES from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.courses, action) {
  switch(action.type) {
    case ACTION_TYPES.LOAD_COURSES_SUCCESS: {
      return action.courses;
    }
    case ACTION_TYPES.SAVE_COURSE_SUCCESS: {
      return [ ...state, Object.assign({}, action.course) ];
    }
    case ACTION_TYPES.UPDATE_COURSE_SUCCESS: {
      const updatedCourseIndex = state.findIndex(x => x.id === action.course.id);
      return [
        ...state.slice(0, updatedCourseIndex),
        Object.assign( {}, action.course ),
        ...state.slice(updatedCourseIndex + 1)
      ];
    }
    default:
      return state;
  }
}