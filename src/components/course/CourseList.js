import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses })  => 
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
    </thead>
    <tbody>
      { courses.map( (x,i) => <CourseListRow key={ i } course={ x } /> ) }
    </tbody>
  </table>

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;