import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

const setup = (saving) => {
  const props = {
    course: {},
    saving,
    errors: {},
    onSave: () => {}, 
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('Test CourseForm via Enzyme', () => {
  it('renders from and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when not saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });  
});