/**
*
* PortalLanding
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { loginAttempt, facebookLoginAttempt, setEmailLogin, setPasswordLogin } from './actions';
import { selectPortalLanding, selectVendorUser } from './selectors';
import MediaQuery from 'react-responsive';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import LoginFormWeb from '../../components/login/LoginFormWeb';
import LoginFormMobile from '../../components/login/LoginFormMobile';


export class PortalLanding extends React.Component {

  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <div style={{ display: 'block', fontSize: '22px', width: '100%', margin: '0 auto', marginTop: '5%', textAlign: 'center' }}>
            <p>Welcome to the&nbsp;
              <span style={{ color: '#75B2DF', fontSize: '24px', fontWeight: 'bold' }}>Eventmakr</span>&nbsp;vendor portal.</p>
              <div style={{ marginTop: '-13%'}}>
                <LoginFormWeb
                  loginAttempt={ this.props.loginAttempt }
                  facebookLoginAttempt={ this.props.facebookLoginAttempt }
                  setEmail={ this.props.setEmail }
                  setPassword={ this.props.setPassword }
                  currentVendor={this.props.currentVendor}
                  isLoginFailed={this.props.isLoginFailed}
                  isLoggingIn={this.props.isLoggingIn}
                />
              </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <MobileTopNavNoSearch />
          <div style={{ display: 'block', fontSize: '18px', margin: '0 auto', marginTop: '15%', textAlign: 'center' }}>
            <p>Welcome to the&nbsp;
              <span style={{ color: '#75B2DF', fontSize: '22px', fontWeight: 'bold' }}>Eventmakr</span>&nbsp; <br />vendor portal.</p>
              <LoginFormMobile
                loginAttempt={ this.props.loginAttempt }
                facebookLoginAttempt={ this.props.facebookLoginAttempt }
                setEmail={ this.props.setEmail }
                setPassword={ this.props.setPassword }
                currentVendor={this.props.currentVendor}
                isLoginFailed={this.props.isLoginFailed}
                isLoggingIn={this.props.isLoggingIn}
              />
          </div>

        </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const vendorAuthState = selectVendorUser(state);
  const currentVendor = vendorAuthState.get('currentVendor');
  const isLoginFailed = vendorAuthState.get('isLoginFailed');
  const isLoggingIn = vendorAuthState.get('isLoggingIn');
  return {
    currentVendor,
    isLoginFailed,
    isLoggingIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEmail: (email) => dispatch(setEmailLogin(email)),
    setPassword: (password) => dispatch(setPasswordLogin(password)),
    loginAttempt: () => dispatch(loginAttempt()),
    facebookLoginAttempt: () => dispatch(facebookLoginAttempt()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PortalLanding);
