/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import LoginFormWeb from '../../components/login/LoginFormWeb';
import LoginFormMobile from '../../components/login/LoginFormMobile';
import VendorProfileContainer from './VendorProfileContainer';
import VendorProfileContainerMobile from './VendorProfileContainerMobile';
import MediaQuery from 'react-responsive';
import { loginAttempt, facebookLoginAttempt, setEmailLogin, setPasswordLogin, vendorLogout } from './actions';
import { selectLoginPage, selectVendorUser } from './selectors';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import NavMobileVendor from '../../components/NavMobileVendor';
import { push, goBack } from 'react-router-redux';
import NavWeb from 'containers/VendorPortal/components/NavWeb';
import { toJS } from 'immutable';



export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    let displayProfile;
    (Object.keys(this.props.currentVendor.toJS()).length === 0) ? displayProfile = 'none' : displayProfile = 'block'
    let displayLogin;
    (Object.keys(this.props.currentVendor.toJS()).length === 0) ? displayLogin = 'block' : displayLogin = 'none';
    console.log('vendor', this.props.currentVendor.toJS())
    return (
      <div>
        <MediaQuery minDeviceWidth={768}>
          <NavWeb links={[
            {url:"/v/login", name:"Login"},
            {url:"/v/chat", name:"Chat"},
            {url:"/v/orders", name:"Orders"}]}/>
          <div style={{ display: displayLogin }}>
            <LoginFormWeb
              loginAttempt={ this.props.loginAttempt }
              facebookLoginAttempt={ this.props.facebookLoginAttempt }
              setEmail={ this.props.setEmail }
              currentVendor={this.props.currentVendor}
              setPassword={ this.props.setPassword } />
          </div>
          <div style={{ display: displayProfile }}>
            <VendorProfileContainer
              currentVendor={this.props.currentVendor}
              vendorLogout={this.props.vendorLogout}
            />
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={767}>
          <MobileTopNavNoSearch />
          <div style={{ display: displayLogin }}>
            <LoginFormMobile
              loginAttempt={ this.props.loginAttempt }
              facebookLoginAttempt={ this.props.facebookLoginAttempt }
              setEmail={ this.props.setEmail }
              currentVendor={this.props.currentVendor}
              setPassword={ this.props.setPassword } />
          </div>
          <div style={{ display: displayProfile }}>
            <VendorProfileContainerMobile
              currentVendor={this.props.currentVendor}
              vendorLogout={this.props.vendorLogout}
            />
          </div>
          <NavMobileVendor
            onClick={this.handleMobileNav}
          />
        </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const vendorAuthState = selectVendorUser(state);
  const currentVendor = vendorAuthState.get('currentVendor');
  return {
    currentVendor,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEmail: (email) => dispatch(setEmailLogin(email)),
    setPassword: (password) => dispatch(setPasswordLogin(password)),
    loginAttempt: () => dispatch(loginAttempt()),
    facebookLoginAttempt: () => dispatch(facebookLoginAttempt()),
    moveLocation: (url) => dispatch(push(url)),
    vendorLogout: () => dispatch(vendorLogout()),
  };
}

LoginPage.propTypes = {
  loginAttempt: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
