/**
*
* LoginForm
*
*/

import React from 'react';
import FlexContainer from './FlexContainer';
import LoginButton from 'components/login/LoginButton';
import FacebookLogin from 'react-facebook-login';
import FacebookWrapper from './FacebookWrapper';
import TextField from 'material-ui/TextField';
import Formsy from 'formsy-react';
import axios from 'axios';
import { checkLoginState } from 'utils/firebase-helpers';
import api from 'utils/axios-helpers';
import { browserHistory } from 'react-router';
import { fb } from 'utils/firebase-config';
import { getParameterByName } from 'utils/url-helpers';
import Button from './Button';

class LoginFormWeb extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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

  handleSignup() {
    console.log(location.href)
    const nextUrl = getParameterByName('next', location.href)
    if (nextUrl) {
      browserHistory.push(`/signup?next=${nextUrl}`);
    } else {
      browserHistory.push('/signup');
    }
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  handleEmailChange(evt, email) {
    this.props.setEmail(email);
  }

  handlePasswordChange(evt, password) {
    this.props.setPassword(password);
  }

  render() {
    // only display form if no current user
    let display;
    Object.keys(this.props.currentUser).length === 0 ? display = 'block' : display = 'none';
    let displayMessage;
    Object.keys(this.props.currentUser).length === 0 ? displayMessage = 'none' : displayMessage = 'block';
    // handle login error
    let displayError;
    this.props.isLoginFailed ? displayError = 'block' : displayError = 'none';
    // disable btn while logging in
    let disableBtn;
    this.props.isLoggingIn ? disableBtn = 'none' : disableBtn = 'block';
    return (
      <div style={{ display: 'block', margin: '0 auto', width: '60%' }}>
        <div style={{ display }}>
          <p style={{ textAlign: 'center', marginTop: '5%', paddingBottom: '5%'}}>Thanks for visiting Eventmakr. <br /> Please log in to continue.</p>
          <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} >
            <FlexContainer>
              <TextField
                hintText="Email"
                value={this.props.email}
                onChange={ this.handleEmailChange }
                style={{ marginTop: '-10%', width: '14.75em'}}
              /><br />
              <TextField
                hintText="Password"
                type="password"
                value={this.props.password}
                onChange={ this.handlePasswordChange }
                style={{ width: '14.75em' }}
              /><br />
              <p style={{ textAlign: 'center', color: '#FF7A7A', display: displayError }}>Login failed. Please try again.<br />
                <span style={{ color: 'black' }}>Don't have an account? Create one <a href="/signup">here</a>.</span></p>
              <div style={{ display: disableBtn }}>
                <Button className="btn btn-success" onClick={this.props.loginAttempt}>LOGIN</Button>
              </div>
              <div style={{ marginTop: '1%', marginBottom: '1%' }}><a href="/reset" style={{ fontFamily: 'sans-serif', fontSize: '10px', color: '#989898' }}>Forgot password?</a></div>
              <p style={{ textAlign: 'center', marginTop: '2%' }}>OR</p>
              <FacebookWrapper>
                <FacebookLogin
                  appId="362056437513067"
                  fields="name,email,picture"
                  callback={this.responseFacebook}
                />
              </FacebookWrapper>
            </FlexContainer>
          </Formsy.Form>
          <div onClick={this.handleSignup} style={{ cursor: 'pointer' }}>
            <p style={{ textAlign: 'center', fontSize: '16px' }}>First time here? <span style={{ color: '#5975BB', fontWeight: 'bold', textDecoration: 'underline' }}>Sign up.</span></p>
          </div>
        </div>
        <div style={{ display: displayMessage }}>
          <p style={{ textAlign: 'center', marginTop: '10%' }}>Hello {this.props.currentUser.name}! You are already logged in.</p>
        </div>
      </div>
    );
  }
}

LoginFormWeb.propTypes = {
  loginAttempt: React.PropTypes.func.isRequired,
};

export default LoginFormWeb;
