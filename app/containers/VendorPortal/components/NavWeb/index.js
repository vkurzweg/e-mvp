/**
*
* NavWeb
*
*/

import React from 'react';

import NavItem from './NavItem';
import E from 'assets/images/E_50_white.png';
import NavLink from './NavLink';
import Gradient from './Gradient';

const style = {
  height: 80,
  width: '100%',
};

function NavWeb(props) {
  const links = props.links
  return (
    <Gradient style={{ height: '80px' }}>
      <div className="navbar navbar-fixed-top" style={{ color: '#FAFAFA' }}>
        <NavLink to="/v/landing">
          <img className="navbar-brand" src={E} alt="Eventmakr logo" style={{ float: 'left', marginLeft: '2.5em', height: '80px' }} />
        </NavLink>
        <div style={{ paddingLeft: '1em' }}>
          {links.map((link, i, links) => {
            return (
              <NavLink key={i} to={link.url}>
                <NavItem className="pull-right">
                  {link.name}
                </NavItem>
              </NavLink>
            )
          })}
        </div>
      </div>
    </Gradient>
  );
}

export default NavWeb;
