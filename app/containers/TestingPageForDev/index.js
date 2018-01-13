/*
 *
 * TestingPageForDev
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createOrderSuccess } from './actions';
// import selectTestingPageForDev from './selectors';

export class TestingPageForDev extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.test()
  }
  render() {
    return (
      <div>
        <Helmet
          title="TestingPageForDev"
          meta={[
            { name: 'description', content: 'Description of TestingPageForDev' },
          ]}
        />
        <p>TESTING</p>
        <button className='btn btn-danger' onClick={this.handleClick}>TESTING BUTTON</button>
      </div>
    );
  }
}

// const mapStateToProps = selectTestingPageForDev();

function mapDispatchToProps(dispatch) {
  return {
    test: () => dispatch(createOrderSuccess())
  };
}

export default connect(null, mapDispatchToProps)(TestingPageForDev);
