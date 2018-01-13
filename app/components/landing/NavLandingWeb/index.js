/**
*
* NavLandingWeb
*
*/

import React, { PropTypes } from 'react';
import E from 'assets/images/E_50.png';
import NavItem from './NavItem';
import NavLink from './NavLink';
import AuthService from '../../../utils/AuthService';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { browserHistory } from 'react-router';


class NavLandingWeb extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.goToVendorPortal = this.goToVendorPortal.bind(this);
  }

  handleSignupClick() {
    browserHistory.push('/signup');
  }

  goToVendorPortal() {
    browserHistory.push('/v/landing');
  }

  render() {
    return (
      <div >
        <div className="navbar transparent navbar-fixed-top" style={{ backgroundColor: 'rgba(0,0,0,0.8)', width: '100%' }}>
          <a href="/">
            <img className="navbar-brand" src={E} alt="Eventmakr logo" style={{ float: 'left', marginLeft: '2.5em', height: '80px' }} />
          </a>
          <div style={{ paddingLeft: '1em' }}>
            <NavLink target="_blank" onClick={this.goToVendorPortal}>
              <NavItem className="pull-right" style={{ padding: '2em' }}>
                Are you a Vendor?
              </NavItem>
            </NavLink>
            <NavLink onClick={this.props.login}>
              <NavItem className="pull-right" style={{ padding: '2em' }}>
                Login/Signup
              </NavItem>
            </NavLink>
            <NavLink to='/vendors'>
              <NavItem className="pull-right" style={{ padding: '2em' }}>
                Browse Vendors
              </NavItem>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

NavLandingWeb.propTypes = {
  auth: PropTypes.func,
};

export default NavLandingWeb;
