/**
*
* LoginForm
*
*/

import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import FlexContainer from './FlexContainer';
import LoginButton from 'components/login/LoginButton';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import FacebookWrapper from './FacebookWrapper';
import TextField from 'material-ui/TextField';
import { checkLoginState } from 'utils/firebase-helpers';
import api from 'utils/axios-helpers';
import { fb } from 'utils/firebase-config';


const StyledInput = styled(Input)`
  border: 1px solid #D8D8D8;
  background: white;
  height: 3em;
  width: 16.1em;
  padding-left: 10px;
  margin: .5em;

  &:hover {
    border; 1px solid #73B1E1;
  }
`;


class LoginFormWeb extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    console.log(response);
    checkLoginState(response, () => {
      console.log('cb runs')
      const userFields = {
        username: response.email,
        email: response.email,
        name: response.name,
        photo: response.picture.data.url,
      };
      const firebaseId = fb.auth().currentUser.uid;
      console.log('firebaseId', firebaseId)
      userFields.firebaseId = firebaseId;
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

  render() {
    return (
      <div style={{ margin: '0 auto' }}>
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} >
          <FlexContainer>
            <TextField
              hintText="Email"
            /><br />
            <TextField
              hintText="Password"
            /><br />
            <LoginButton>Login</LoginButton>
            <a href="/password_reset" style={{ fontFamily: 'sans-serif', fontSize: '10px', color: '#989898' }}>Forgot password?</a>
            <FacebookWrapper>
              <FacebookLogin
                appId="362056437513067"
                fields="name,email,picture"
                callback={this.responseFacebook}
              />
            </FacebookWrapper>
          </FlexContainer>
        </Formsy.Form>
      </div>
    );
  }
}

export default LoginFormWeb;
