/**
*
* SignUpFormWeb
*
*/
import React from 'react';
import FlexContainer from './FlexContainer';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FacebookLogin from 'react-facebook-login';
import FacebookWrapper from './FacebookWrapper';
import axios from 'axios';
import { checkLoginState } from 'utils/firebase-helpers';
import api from 'utils/axios-helpers';
import styled from 'styled-components';
import TermsModal from '../TermsModal';
import { fb } from 'utils/firebase-config';
import Button from './Button';
import { toJS } from 'immutable';


const StyledFacebookLogin = styled(FacebookLogin)`
  font-size: 10px !important;
`;

class SignUpFormWeb extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };
    this.responseFacebook = this.responseFacebook.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  responseFacebook(response) {
    const userFields = {
      username: response.email,
      email: response.email,
      name: response.name,
      photo: response.picture.data.url,
    };
    const token = response.accessToken;
    api.get(`auth/facebook-token?access_token=${token}`)
      .then((resp) => {
        api.put('v1/user', userFields)
          .then((resp) => {
            this.props.facebookLoginAttempt(response);
            return resp;
          }).catch( err => {
            console.log(err);
          })
      }).catch((err) => {
        console.log(err);
      })
  }

  showModal() {
    this.props.openModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    const user = this.props.currentUser.toJS();
    // only display signup if no current user
    let display;
    (this.props.currentUser.size === 0) ? display = 'block' : display = 'none';
    let displayMessage;
    (this.props.currentUser.size === 0) ? displayMessage = 'none' : displayMessage = 'block';
    // signup error message
    let displayError;
    this.props.isLoginFailed ? displayError = 'block' : displayError = 'none';
    // disable btn while logging in
    let disableBtn;
    this.props.isSigningUp ? disableBtn = 'none' : disableBtn = 'block';
    return (
      <div>
        <div style={{ textAlign: 'center', margin: '0 auto' }}>
          <div style={{ display }}>
            <TextField
              hintText="Email"
              value={this.props.email}
              onChange={ this.props.handleEmailChange }
              style={{ width: '200px'}}
            />
            <br />
            <TextField
              hintText="Password"
              type="password"
              value={this.props.password}
              onChange={ this.props.handlePasswordChange }
              style={{ width: '200px'}}
            />
            <br />
            <TextField
              hintText="Password Confirmation"
              type="password"
              value={this.props.passwordConfirm}
              onChange={ this.props.handlePasswordConfirmChange }
              style={{ width: '200px'}}
            />
            <br />
            <p style={{ textAlign: 'center', color: '#FF7A7A', display: displayError }}>Signup failed. Please try again.<br />
              <span style={{ color: 'black' }}>Already have an account? Log in <a href="/login">here</a>.</span></p>
            <div style={{ display: disableBtn }}>
              <Button onClick={this.props.signup} className="btn btn-success">Sign Up</Button>
              <p style={{ textAlign: 'center' }}>or:</p>
              <FacebookWrapper>
                <StyledFacebookLogin
                  appId="362056437513067"
                  fields="name,email,picture"
                  callback={this.responseFacebook}
                  redirectUri={window.location.href}
                />
              </FacebookWrapper>
            </div>
          </div>
          <div style={{ display: displayMessage }}>
            <p style={{ textAlign: 'center', marginTop: '10%' }}>Hello {user.username}! You are logged in.</p>
          </div>
          <hr />
            <p onClick={this.showModal} style={{ fontSize: '14px', marginBottom: '2em', cursor: 'pointer' }}>Eventmakr <span style={{ textDecoration: 'underline', color: '#5A77B9' }}>Terms & Conditions</span></p>
            <div style={{ width: '80%', display: 'block', margin: '0 auto' }}>
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton
                  value="light"
                  label="I accept the terms & conditions"
                  onClick={this.props.onTermsAccept}
                  style={{ marginBottom: '2em' }}
                />
              </RadioButtonGroup>
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton
                  value="light"
                  label="I am over 13 years of age"
                  onClick={this.props.onAgeVerify}
                  style={{ marginBottom: '2em' }}
                />
              </RadioButtonGroup>
            </div>
        </div>
        <hr style={{ marginTop: '1em', marginBottom: '1em' }} />
        <TermsModal
          isOpen={this.props.isOpen}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

// SignUpFormWeb.propTypes = {
//   loginAttempt: React.PropTypes.func.isRequired,
// };

export default SignUpFormWeb;

// <TextField
//   hintText="Email"
//   onChange={ this.props.handleEmailChange }
// />
// <br />
// <TextField
//   hintText="Password"
//   type="password"
//   onChange={ this.props.handlePasswordChange }
// />
// <br />
// <TextField
//   hintText="Password Confirmation"
//   type="password"
//   onChange={ this.props.handlePasswordConfirmChange }
// />
// <br />

// <p style={{ textAlign: 'center' }}>or:</p>
