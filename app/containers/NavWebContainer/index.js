/*
 *
 * NavWebContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { setVendorCategory, logout } from './actions';
import { selectEvent, selectUser } from './selectors';
import NavWeb from 'components/common/NavWeb';
import { browserHistory } from 'react-router';


export class NavWebContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleNavClick = this.handleNavClick.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  handleNavClick(e) {
    e.preventDefault();
    const linkUrl = e.target.getAttribute('data-url');
    const category = e.target.getAttribute('data-name');
    this.props.setVendorCategory(category);
    browserHistory.push(linkUrl);
  }

  logoutUser() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <NavWeb
          currentEvent={this.props.currentEvent}
          handleNavClick={this.handleNavClick}
          logout={this.logoutUser}
          currentUser={this.props.currentUser}
          isAuthenticated={this.props.isAuthenticated}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const eventState = selectEvent(state);
  const currentEvent = eventState.get('event');
  const userState = selectUser(state);
  const currentUser = userState.get('currentUser');
  const isAuthenticated = userState.get('isAuthenticated');
  return {
    currentEvent,
    currentUser,
    isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVendorCategory: (category) => dispatch(setVendorCategory(category)),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavWebContainer);
