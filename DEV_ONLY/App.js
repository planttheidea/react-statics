// styles
import PropTypes from 'prop-types';
import React from 'react';
import {compose} from 'redux';
import {measure} from 'remeasure';

// src
import statics from '../src';

class App extends React.Component {
  render() {
    console.log(this.props);

    return <div>JSON.stringify(this.props)</div>;
  }
}

export default compose(
  statics({
    displayName: 'WrappedApp',
    propTypes: {foo: PropTypes.string.isRequired},
  }),
  measure.width
)(App);
