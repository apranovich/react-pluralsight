import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/courseActions';

describe('Store Integration Tests', () => {
  it('Store', () => {
    const store = createStore(rootReducer, initialState);
    const newCourse = { title: "Clean code" };

    const action = actions.saveCourseSuccess(newCourse);
    store.dispatch(action);

    const actualState = store.getState().courses;
    const expectedState = [{ title: "Clean code" }];

    expect(actualState).toEqual(expectedState);
  });
});