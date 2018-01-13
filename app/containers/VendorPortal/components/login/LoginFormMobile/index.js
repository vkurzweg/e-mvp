/**
*
* LoginForm
*
*/

import React from 'react';
import FlexContainer from './FlexContainer';
import LoginButton from '../LoginButton';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import FacebookWrapper from './FacebookWrapper';
import TextField from 'material-ui/TextField';
import Formsy from 'formsy-react';
import axios from 'axios';
import { checkLoginState } from 'utils/firebase-helpers';
import api from 'utils/axios-helpers';
import { fb } from 'utils/firebase-config';
import Button from './Button';
import { toJS } from 'immutable';


class LoginFormWeb extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
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
    Object.keys(this.props.currentVendor.toJS()).length === 0 ? display = 'block' : display = 'none';
    let displayMessage;
    Object.keys(this.props.currentVendor.toJS()).length === 0 ? displayMessage = 'none' : displayMessage = 'block';
    // handle login error
    let displayError;
    this.props.isLoginFailed ? displayError = 'block' : displayError = 'none';
    // disable btn while logging in
    let disableBtn;
    this.props.isLoggingIn ? disableBtn = 'none' : disableBtn = 'block';
    return (
      <div>
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} >
          <FlexContainer>
            <div style={{ display }}>
              <TextField
                hintText="Email"
                onChange={ this.handleEmailChange }
                style={{ width: '12.75em'}}
              /><br />
              <TextField
                hintText="Password"
                type="password"
                onChange={ this.handlePasswordChange }
                style={{ width: '12.75em'}}
              /><br />
              <div style={{ display: disableBtn }}>
                <Button className="btn btn-success" onClick={this.props.loginAttempt}>LOGIN</Button>
              </div>
              <a href="/v/reset" style={{ fontFamily: 'sans-serif', fontSize: '10px', color: '#989898' }}>Forgot password?</a>
              <FacebookWrapper>
                <FacebookLogin
                  appId="362056437513067"
                  fields="name,email,picture"
                  callback={this.responseFacebook}
                />
              </FacebookWrapper>
              </div>
            </FlexContainer>
          </Formsy.Form>
        <div style={{ display: displayMessage }}>
          <p style={{ textAlign: 'center', marginTop: '10%' }}>Hello {this.props.currentVendor.toJS().name}! You are logged in.</p>
        </div>
      </div>
    );
  }
}

LoginFormWeb.propTypes = {
  loginAttempt: React.PropTypes.func.isRequired,
};

export default LoginFormWeb;
