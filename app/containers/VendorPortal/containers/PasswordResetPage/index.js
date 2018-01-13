/*
 *
 * PasswordResetContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectPasswordResetPage from './selectors';
import PasswordReset from '../../components/PasswordReset';
import { resetRequest, setEmail } from './actions';

export class PasswordResetContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handlePasswordReset = this.handlePasswordReset.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handlePasswordReset() {
    this.props.resetRequest();
  }

  handleEmailChange(evt, email) {
    this.props.setEmail(email);
  }

  render() {
    return (
      <div>
        <PasswordReset
          onPasswordReset={this.handlePasswordReset}
          onEmailChange={this.handleEmailChange}
        />
      </div>
    );
  }
}

// const mapStateToProps = selectPasswordResetContainer();

function mapDispatchToProps(dispatch) {
  return {
    resetRequest: () => dispatch(resetRequest()),
    setEmail: (email) => dispatch(setEmail(email)),
  };
}

export default connect(null, mapDispatchToProps)(PasswordResetContainer);
