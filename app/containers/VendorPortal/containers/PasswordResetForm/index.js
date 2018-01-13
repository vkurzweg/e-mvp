/*
 *
 * PasswordResetForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectPasswordResetForm from './selectors';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';


export class PasswordResetForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleChangePasswordRequest = this.handleChangePasswordRequest.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
  }

  handleChangePasswordRequest() {
    this.props.changePasswordRequest()
  }

  handlePassword(e, password) {
    this.props.setPassword(password);
  }

  handlePasswordConfirm(e, passwordConfirm) {
    this.props.setPasswordConfirm(passwordConfirm);
  }
  render() {
    return (
      <div style={{ marginTop: '5%' }}>
        <Paper zDepth={2} style={{ marginTop: '20%', padding: '5%', width: '50%', display: 'block', margin: '0 auto' }}>
          <p style={{ display: 'block', textAlign: 'center' }}>Please enter your new password</p>
          <div style={{ display: 'block', padding: '5%', marginLeft: '20%' }}>
            <TextField
              hintText="New Password"
              onChange={this.handlePassword}
              type='password'
              textFieldStyle={{ display: 'block', width: '100%', minWidth: '150px'}}/>
            <TextField
              hintText="Confirm New Password"
              onChange={this.handlePasswordConfirm}
              type='password'
              textFieldStyle={{ display: 'block', width: '100%', minWidth: '150px'}}/>
          </div>
            <RaisedButton onClick={this.handleChangePasswordRequest} label="Set Password" primary={true} style={{ display: 'block', width: '50%', margin: '0 auto'}} />
        </Paper>
      </div>
    );
  }
}

// const mapStateToProps = selectPasswordResetForm();

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actionCreators, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(PasswordResetForm);
