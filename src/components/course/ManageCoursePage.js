import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import { authorsFormattedForDropdown } from '../../selectors/selectors';

export class ManageCoursePage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: Object.assign( {}, this.props.course ),
      errors: {},
      saving: false
    };
    this.updateFormState = this.updateFormState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentDidMount(){
    this.props.loadAuthors();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id) {
      this.setState({course: nextProps.course});
    }
  }

  updateFormState(event) {
    const field = event.target.name;
    let course = { ...this.state.course };
    course[field] = event.target.value;
    this.setState({ course });
  }

  validateForm() {
    let isValid = true;
    let errors = {};

    if(this.state.course.title.length < 5) {
      isValid = false;
      errors.title = "Title must be at least 5 characters";
    }

    this.setState({ errors });
    return isValid;
  }
  
  saveCourse(event) {
    event.preventDefault();
    if( !this.validateForm() ) {
      return;
    }

    this.setState({saving: true});
    
    this.props.saveCourse(this.state.course)
      .then(() => this.redirectBackToCourses())
      .catch(error => {
        this.setState({saving: false}); 
        toastr.error(error);
      });
  }

  redirectBackToCourses(){
    this.setState({saving: false}); 
    this.context.router.push('/courses');
    toastr.success('Course saved');
  }

  render() {
    return (
      <div>
        <CourseForm 
          allAuthors={ this.props.authors }
          course={ this.state.course }
          onChange={ this.updateFormState }
          onSave={ this.saveCourse }
          errors={ this.state.errors }
          saving={ this.state.saving }
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  saveCourse: PropTypes.func.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

const getCourseById = (courses, id) => {
  return courses.find(x => x.id === id);
}

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.params.id;
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
  if(courseId && state.courses.length) {
    course = getCourseById(state.courses, courseId);
  }
  
  const authors= authorsFormattedForDropdown(state.authors);
  
  return { 
    course, authors 
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ ...courseActions, ...authorActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);