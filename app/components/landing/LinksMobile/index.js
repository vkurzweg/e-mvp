/**
*
* LinksMobile
*
*/

import React, { PropTypes } from 'react';
import NavLink from '../NavLandingWeb/NavLink';
import NavItem from '../NavLandingWeb/NavItem';
import AuthService from '../../../utils/AuthService';


class LinksMobile extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <NavLink target="_blank" href="http://www.eventmakrvendors.com">
          <NavItem style={{ display: 'block', textAlign: 'center' }} >
            Vendors
          </NavItem>
        </NavLink>
        <NavLink onClick={this.props.auth}>
          <NavItem style={{ display: 'block', textAlign: 'center', marginBottom: '2em' }} >
            Login
          </NavItem>
        </NavLink>
      </div>
    );
  }
}

LinksMobile.propTypes = {
  auth: PropTypes.func,
};

export default LinksMobile;
