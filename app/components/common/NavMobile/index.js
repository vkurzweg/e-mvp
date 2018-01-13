/**
*
* NavMobile
*
*/

import React from 'react';
import NavBar from './NavBar';
import { navMobileLinks } from 'data/nav_mobile_links';
import MobileNavItem from './MobileNavItem';

function NavMobile(props) {
  return (
    <div>
      <NavBar>
        { navMobileLinks.map( (link, idx) => {
          return <MobileNavItem key={idx} onClick={props.onClick.bind(null, link.url)}><img src={link.src_active} alt={link.alt} /><p style={{ color: 'white' }}>{link.name}</p></MobileNavItem>
        })}
      </NavBar>
    </div>
  );
}

export default NavMobile;

// let src;
// const currentLocation = window.location.pathname;
// if (currentLocation.substr(currentLocation.lastIndexOf('/')) == link.url) {
//   src = link.src_active
// } else {
//   src = link.src
// }
