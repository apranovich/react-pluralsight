import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={ this.props.loading } />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({ 
  loading: state.numAjaxCallsInProgress > 0 
});

export default connect(mapStateToProps)(App);