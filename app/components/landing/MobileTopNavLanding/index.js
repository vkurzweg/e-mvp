/**
*
* MobileTopNav
*
*/

import React from 'react';
import E from 'assets/images/E_50.png';
import { connect } from 'react-redux';
import SearchFormMobile from 'components/search/SearchFormMobile';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
import Arrow from 'assets/images/arrow_down_jordy.png';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Hamburger from 'assets/images/hamburger.png';
import Gradient from './Gradient';

export class MobileTopNav extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleVendorClick = this.handleVendorClick.bind(this);
  }

  handleLoginClick() {
    browserHistory.push('/login');
  }

  handleVendorClick() {
    browserHistory.push('/v/landing');
  }

  render(){
    return (
      <Gradient>
        <Toolbar style={{ backgroundColor: 'black' }}>
          <ToolbarGroup firstChild={true} style={{ display: 'block', marginLeft: '43%' }}>
          <img src={E} alt="Eventmakr logo" style={{ paddingTop: '3%' }} />
            <IconMenu
              iconButtonElement={
                <IconButton style={{ marginLeft: '220%', marginBottom: '12%'}} touch={true}>
                  <img src={Hamburger} alt="menu icon" />
                </IconButton>
              }
            >
              <MenuItem primaryText="Login/Signup" onClick={this.handleLoginClick} />
              <MenuItem primaryText="Are you a vendor?" onClick={this.handleVendorClick} />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      </Gradient>
    );
  }
}

export default MobileTopNav;

// <Paper style={style} zDepth={1}>
//   <div style={{ height: '100%', backgroundColor: 'black' }}>

