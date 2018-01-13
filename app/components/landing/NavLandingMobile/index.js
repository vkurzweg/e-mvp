import React, { PropTypes } from 'react';
import E from 'assets/images/E_200mobile.png';
import NavItem from './NavItem';
import NavLink from './NavLink';


class NavLandingWeb extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <div className="navbar navbar-transparent" style={{ marginBottom: '0' }}>
          <div style={{ paddingLeft: '1em' }}>
            <NavLink target="_blank" href="http://www.eventmakrvendors.com">
              <NavItem className="pull-right" style={{ padding: '2em' }}>
                Vendors
              </NavItem>
            </NavLink>
            <NavLink onClick={this.props.auth}>
              <NavItem className="pull-right" style={{ padding: '2em' }}>
                Login
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
