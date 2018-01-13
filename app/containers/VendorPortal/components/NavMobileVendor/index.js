/**
*
* NavMobile
*
*/

import React from 'react';
import NavBar from './NavBar';
import { navMobileLinks } from 'data/nav_mobile_links_vendor';
import MobileNavItem from './MobileNavItem';

function NavMobile(props) {
  return (
    <div>
      <NavBar>
        { navMobileLinks.map( (link, idx) => {
          return <MobileNavItem key={idx} onClick={props.onClick.bind(null, link.url)}><img src={link.src} alt={link.alt} /><p style={{ color: 'white' }}>{link.name}</p></MobileNavItem>
        })}
      </NavBar>
    </div>
  );
}

export default NavMobile;
