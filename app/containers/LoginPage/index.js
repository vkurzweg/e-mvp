
/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import LoginFormWeb from 'components/login/LoginFormWeb';
import LoginFormMobile from 'components/login/LoginFormMobile';
import MediaQuery from 'react-responsive';
import { loginAttempt, facebookLoginAttempt, setEmailLogin, setPasswordLogin } from './actions';
import { selectLoginPage, selectUser } from './selectors';
import NavWebContainer from '../NavWebContainer';
import NavMobile from 'components/common/NavMobile';
import NavTablet from 'components/common/NavTablet';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import TabletTopNavNoSearch from 'components/common/TabletTopNavNoSearch';
import { push } from 'react-router-redux';
import { toJS } from 'immutable';


export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleMobileNav = this.handleMobileNav.bind(this)
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <NavWebContainer />
          <LoginFormWeb
            currentUser={this.props.currentUser}
            loginAttempt={ this.props.loginAttempt }
            facebookLoginAttempt={ this.props.facebookLoginAttempt }
            setEmail={ this.props.setEmail }
            setPassword={ this.props.setPassword }
            isLoginFailed={this.props.isLoginFailed}
            isLoggingIn={this.props.isLoggingIn}
          />
        </MediaQuery>

        <MediaQuery minWidth={481} maxWidth={767}>
          <div style={{ width: '100%', height: '100%', paddingBottom: '50%' }}>
            <TabletTopNavNoSearch />
            <LoginFormMobile
              currentUser={this.props.currentUser}
              loginAttempt={ this.props.loginAttempt }
              facebookLoginAttempt={ this.props.facebookLoginAttempt }
              setEmail={ this.props.setEmail }
              setPassword={ this.props.setPassword }
              isLoginFailed={this.props.isLoginFailed}
              isLoggingIn={this.props.isLoggingIn} />
          </div>
            <NavTablet
              onClick={this.handleMobileNav}
              isLoginFailed={this.props.isLoginFailed} />
        </MediaQuery>

        <MediaQuery maxWidth={480}>
          <div style={{ width: '100%', height: '100%', paddingBottom: '50%' }}>
          <MobileTopNavNoSearch />
          <LoginFormMobile
            currentUser={this.props.currentUser}
            loginAttempt={ this.props.loginAttempt }
            facebookLoginAttempt={ this.props.facebookLoginAttempt }
            setEmail={ this.props.setEmail }
            setPassword={ this.props.setPassword }
            isLoginFailed={this.props.isLoginFailed}
            isLoggingIn={this.props.isLoggingIn}
          />
          </div>
          <NavMobile
            onClick={this.handleMobileNav}
            isLoginFailed={this.props.isLoginFailed}
          />
        </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const loginPageState = selectLoginPage(state);
  console.log('loginPageState', loginPageState);
  const userState = selectUser(state);
  const currentUser = userState.get('currentUser').toJS();
  const isLoginFailed = userState.get('isLoginFailed');
  const isLoggingIn = userState.get('isLoggingIn');
  return {
    email: loginPageState.get('email'),
    password: loginPageState.get('password'),
    currentUser,
    isLoginFailed,
    isLoggingIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEmail: (email) => dispatch(setEmailLogin(email)),
    setPassword: (password) => dispatch(setPasswordLogin(password)),
    loginAttempt: () => dispatch(loginAttempt()),
    facebookLoginAttempt: (response) => dispatch(facebookLoginAttempt(response)),
    moveLocation: (url) => dispatch(push(url)),
  };
}

LoginPage.propTypes = {
  loginAttempt: React.PropTypes.func.isRequired,
  facebookLoginAttempt: React.PropTypes.func,
  setEmail: React.PropTypes.func,
  setPassword: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
