/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { FormattedMessage } from 'react-intl';
// import localForage from 'localforage';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import Link from '../Link';
// import Translate from '../common/Translate';
import $ from 'jquery';


class TopNav extends Component{
  static contextTypes = {
    setLang: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rtlClass: true
    }
    this.rightToLeft = this.rightToLeft.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }



  // componentWillMount() {
  //   console.log(this.context);
  //   // this.context.setTitle(title);
  // }

  render() {
    return (
      <nav className={"navbar navbar-fixed-top topNavbar"} role="navigation">
        <div className={"navbar-header text-center navbarHeader"}>
          <button type="button" className="navbar-toggle" onClick={this.showMenu} target="myNavbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
          </button>
          <Link to="/" className={`navbar-brand navbarBrand`}> Eventmakr Vendors</Link>
      </div>

        <div id="myNavbar" className={"collapse navbar-collapse navbarCollapse"}>
          <form className={"navbar-form navbarForm navbar-left"} role="search">
            <span className={"glyphicon glyphicon-search glyphiconStyle"}  />
            <div className="form-group">
              <input type="text" className={"form-control formControl"} placeholder="" />
            </div>
          </form>

          <ul className={"nav navbar-nav ulNavbar"}>
            <NavDropdown
              id="dropDown1"
              eventKey={1}
              className="dropDownMenu"
              title={
                <span>
                  <i className={"glyphicon glyphicon-envelope glyphiconStyle"}  />
                  <span className={"badge badgeGreen"}>5</span>
                </span>
              }
              noCaret
              >
                <MenuItem eventKey={1.1}className={"messages-top text-center messageTop"} disabled>
                  <FormattedMessage
                      id="topnav1"
                      defaultMessage="You have 4 unread messages."
                    />
                </MenuItem>
                <MenuItem eventKey={1.2} className={"dropdown-messages dropDownMessage"} >
                  <div className={"message-sender messageSender"}>
                    <FormattedMessage
                      id="lucy"
                      defaultMessage="Lucy Chandler"
                    />
                  </div>
                  <div className={"message-header messageHeader"}>
                    <FormattedMessage
                      id="topnavheader1"
                      defaultMessage="Sent you a friend request."
                    />
                  </div>
              </MenuItem>
              <MenuItem eventKey={1.3} className={"dropdown-messages dropDownMessage"} >
                <div className={"message-sender messageSender"}>
                  <FormattedMessage
                    id="diptesh"
                    defaultMessage="Diptesh Mishra"
                    />
                </div>
                <div className={"message-header messageHeader"}>
                  <FormattedMessage
                    id="topnavheader2"
                    defaultMessage="Asked you to join StrapUI."
                    />
                </div>
              </MenuItem>
              <MenuItem eventKey={1.4} className={"dropdown-messages dropDownMessage"} >
                <div className={"message-sender messageSender"}>
                  <FormattedMessage
                    id="weng"
                    defaultMessage="Wang Xiao"
                    />
                </div>
                <div className={"message-header messageHeader"}>
                  <FormattedMessage
                    id="topnavheader3"
                    defaultMessage="Congratulations! your account is activated."
                    />
                </div>
              </MenuItem>
            </NavDropdown>

            <NavDropdown
              id="dropDown2"
              eventKey={2}
              className={"dropDownMenu"}
              title={
                <span>
                  <i className={"glyphicon glyphicon-bell glyphiconStyle"}  />
                  <span className={"badge badgeRed"}>5</span>
                </span>
              }
              noCaret
              >
                <MenuItem className={"notification-header text-center notificationHeader"} disabled>

                  <FormattedMessage
                    id="threenotifications"
                    defaultMessage="You have 3 new notifications."
                    />
                </MenuItem>
                <MenuItem eventKey={2.1} className={"dropdown-notifications dropDownNotification"}>
                  <div className={"notification notificationBody"}>
                    <i className={"fa fa-thumbs-up faStyle"} />

                    <FormattedMessage
                      id="runuma"
                      defaultMessage="Runuma Das liked your photo."
                      />
                  </div>
                </MenuItem>
                <MenuItem eventKey={2.2} className={"dropdown-notifications dropDownNotification"}>
                  <div className={"notification notificationBody"}>
                    <i className={"fa fa-thumbs-up faStyle"} />
                    <FormattedMessage
                      id="harshita"
                      defaultMessage="Harshita Borah liked your status."
                      />
                  </div>
                </MenuItem>
                <MenuItem eventKey={2.3} className={"dropdown-notifications dropDownNotification"}>
                  <div className={"notification notificationBody"}>
                    <i className={"fa fa-user-plus faStyle"} />

                    <FormattedMessage
                      id="archana"
                      defaultMessage="Archana wants to be friends."
                      />
                  </div>
                </MenuItem>
                <MenuItem eventKey={2.4} className={"dropdown-notifications dropDownNotification"}>
                  <div className={"notification notificationBody"}>
                    <i className={"fa fa-user-times faStyle"} />

                    <FormattedMessage
                      id="animesh"
                      defaultMessage="Animesh Saha unfriended you."
                      />
                  </div>
                </MenuItem>

            </NavDropdown>
          </ul>
          <ul className={"nav navbar-nav pull-right navbar-right pullRight ulNavbar"}>
            <NavDropdown
              id="dropDown3"
              eventKey={3}
              title={<span>{
                <FormattedMessage
                  id="lang"
                  defaultMessage="Language"
                  />
              }</span>}
              noCaret onSelect={this.changeLanguage}
            >
              <MenuItem eventKey='en' name='en' value="en">English</MenuItem>
              <MenuItem eventKey='de' name='de' value="de">Dutch</MenuItem>
              <MenuItem eventKey='ur' name='ur' value="ur">اردو</MenuItem>
              <MenuItem eventKey='hi' name='hn' value="hi">हिन्दी</MenuItem>
            </NavDropdown>

            <NavDropdown id="dropDown4" className={"navbarProfile"} eventKey={4} title={<span>
              <img src={require("../../common/images/flat-avatar.png")} className={"topnavImg"} alt="profile picture" />
              <span className="hidden-sm">Ani Pascal</span>
              </span>} noCaret
            >
                <MenuItem onClick={(e) => { e.preventDefault(); }}>
                  <FormattedMessage
                    id="profilee"
                    defaultMessage="Profile"
                  />
                </MenuItem>
                <MenuItem onClick={(e) => { e.preventDefault();}}>
                  <FormattedMessage
                    id="logout"
                    defaultMessage="Logout"
                    />
                </MenuItem>
            </NavDropdown>
          </ul>
        </div>
        <ul className={"nav navbar-nav pull-right ulNavbar hidd"}>
          <NavDropdown id="navDropDown11" eventKey={4} title={<span>
              <img src={require("../../common/images/flat-avatar.png")} className={`topnav-img topnavImg`} alt="" />
              </span>} noCaret className={`dropdown admin-dropdown dropdown`}
            >
              <MenuItem onClick={(e) => { e.preventDefault(); }}>
                <FormattedMessage
                  id="profilee"
                  defaultMessage="Profile"
                />
              </MenuItem>
              <MenuItem onClick={(e) => { e.preventDefault(); }}>
                <FormattedMessage
                  id="logout"
                  defaultMessage="Logout"
                  />
              </MenuItem>
          </NavDropdown>
        </ul>
      </nav>
    );
  }

  rightToLeft() {
    this.setState({'rtlClass': !this.state.rtlClass});
    if (this.state.rtlClass) {
      $('body').addClass('rtl');
    } else {
      $('body').removeClass('rtl');
    }
  }

  changeLanguage(e) {
    // add code related to language change through app store
    window.localStorage.setItem("language123", e);
    this.context.setLang(e);
    // localForage.setItem('lang', e)
    //   .then((success) => {
    //     console.log('local storage is set', success);
        // this.context.setLang(e);
    //   })
    //   .catch((err) => {
    //     console.log('error while storing lang', err);
    //   })
  }

  showMenu()
  {
    $('.dashboard-page').toggleClass('push-right');
  }
}


export default TopNav;
