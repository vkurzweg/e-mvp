/**
*
* NavWeb
*
*/

import React from 'react';

import NavItem from './NavItem';
import E from 'assets/images/E_50_white.png';
import NavLink from './NavLink';
import Badge from 'material-ui/Badge';
import Arrow from 'assets/images/dropdown_white.png';
import CatNavItem from 'components/vendorsCategory/CatNavItem';
import occasionCategories from 'data/categoriesFull';
import { browserHistory } from 'react-router';
import Gradient from './Gradient';

const style = {
  height: 80,
  width: '100%',
};

function NavWeb(props) {
  // orders badge
  let ordersNum = 0;
  if (!!props.currentEvent && !!props.currentEvent.orders) ordersNum = props.currentEvent.orders.length
  let display;
  (ordersNum > 0) ? display = 'flex' : display = 'none';
  let categories = occasionCategories.default;
  let displayUser;
  props.isAuthenticated ? displayUser = 'block' : displayUser = 'none';
  let displayNoUser;
  props.isAuthenticated ? displayNoUser = 'none' : displayNoUser = 'block';
  // current page indicator
  return (
    <Gradient style={{ height: '80px' }}>
      <div style={{  color: '#FAFAFA', height: '100%', width: '100%' }}>
        <NavLink to="/">
          <img className="navbar-brand" src={E} alt="Eventmakr logo" style={{ float: 'left', marginLeft: '2.5em', height: '80px' }} />
        </NavLink>
        <div className="pull-right" style={{ paddingLeft: '1em', display: 'inline-flex', paddingTop: '1%' }}>
          <div className="dropdown pull-right">
            <NavLink className="droplink" to="/vendors">
              <NavItem className="pull-right" style={{ display: 'inline-flex' }} >Vendors<img src={Arrow} style={{ paddingBottom: '7%' }} /></NavItem>
            </NavLink>
            <div className="arrow-up"></div>
            <div className="dropdown-content">
              { categories.map((category, idx, categories) => {
                  return <CatNavItem
                    key={idx+1}
                    categoryName={category.categoryName}
                    dataUrl={category.url}
                    handleClick={props.handleNavClick}
                  />
                })}
            </div>
          </div>
          <NavLink to="/orders">
            <Badge
              className="pull-right"
              badgeContent={ordersNum}
              primary={true}
              badgeStyle={{ top: 0, right: 15, display, backgroundColor: '#FAFAFA', color: '#78B5E2', fontWeight: 'bold' }}
            >
              <NavItem className="pull-right" style={{ marginTop: '-25%' }}>Orders</NavItem>
            </Badge>
          </NavLink>
          <NavLink to="/messages">
            <NavItem className="pull-right" >Messages</NavItem>
          </NavLink>
          <div className="pull-right" style={{  }}>
            <div className="dropdown pull-right">
              <NavLink className="droplink" to="/profile" >
                <NavItem className="pull-right" style={{ display: 'inline-flex' }}>Account</NavItem>
              </NavLink>
              <div className="arrow-up" style={{ marginTop: '54%', marginLeft: '20%' }}></div>
              <div className="dropdown-content" style={{ marginTop: '67%', width: '150%', marginLeft: '-56%', paddingTop: '10%', paddingBottom: '10%' }}>
                <div style={{ display: displayUser }}>
                  <NavItem style={{ color: '#323232', padding: '2%', zIndex: '10' }} onClick={props.logout}><NavLink style={{ textDecoration: 'none', color: '#323232' }}>Logout</NavLink></NavItem>
                  <NavLink to="/profile"><NavItem style={{ color: '#323232', padding: '2%', zIndex: '10' }}>Profile</NavItem></NavLink>
                </div>
                <div style={{ display: displayNoUser }}>
                  <NavItem style={{ color: '#323232', marginLeft: '30%', padding: '2%', zIndex: '10' }}><NavLink to="/signup" style={{ color: '#323232', padding: '2%', zIndex: '10', textAlign: 'center', display: 'block', textAlign: 'left' }}>Create Account</NavLink></NavItem>
                  <NavItem style={{ color: '#323232', marginLeft: '30%', padding: '2%', zIndex: '10' }}><NavLink to="/login" style={{ color: '#323232', padding: '2%', zIndex: '10' }}>Login</NavLink></NavItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Gradient>
  );
}

export default NavWeb;
