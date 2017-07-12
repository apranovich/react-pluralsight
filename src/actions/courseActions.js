import ACTION_TYPES from './actionTypes';
import CoursesApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';


export function loadCoursesSuccess(courses) {
  return { type: ACTION_TYPES.LOAD_COURSES_SUCCESS, courses };
}

export function saveCourseSuccess(course) {
  return { type: ACTION_TYPES.SAVE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: ACTION_TYPES.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return CoursesApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => { throw(error); });
  }
}

export function saveCourse(course) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return CoursesApi.saveCourse(course)
      .then(savedCourse => !course.id 
        ? dispatch(saveCourseSuccess(savedCourse))
        : dispatch(updateCourseSuccess(savedCourse))
      )
      .catch(error => { 
        dispatch(ajaxCallError());
        throw(error);
      });
  }
}
