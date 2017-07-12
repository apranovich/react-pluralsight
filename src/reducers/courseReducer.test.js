import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer Tests', () => {

  const initialState = [
    { id: 'A', title: 'A' },
    { id: 'B', title: 'B' },
    { id: 'C', title: 'C' }
  ];

  it('saveCourseSuccess action passed', () => {
    const newCourse = { id: 'D', title: 'D' };
    const newState = courseReducer(initialState, actions.saveCourseSuccess(newCourse));
    expect(newState.length).toEqual(4);
    expect(newState[3]).toEqual(newCourse);
  });

  it('updateCourseSuccess action passed', () => {
    const updatedCourse = { id: 'B', title: 'BBB' };
    const newState = courseReducer(initialState, actions.updateCourseSuccess(updatedCourse));
    expect(newState.length).toEqual(3);
    expect(newState[1]).toEqual(updatedCourse);
  });
})