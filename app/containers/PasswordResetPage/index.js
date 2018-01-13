/*
 *
 * PasswordResetPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectPasswordResetPage from './selectors';
import { resetRequest } from './actions';
import MediaQuery from 'react-responsive';
import PasswordReset from 'components/login/PasswordReset';
import PasswordResetMobile from 'components/login/PasswordResetMobile';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import NavMobile from 'components/common/NavMobile';
import { push, goBack } from 'react-router-redux';


export class PasswordResetPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {  // Reference the initial state of the component.
    super(props);       // Inherents the parents objects properties.
    this.handlePasswordReset = this.handlePasswordReset.bind(this)
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  handlePasswordReset() {
    console.log("HANDLEEE RESETTT!!");
    this.props.resetRequest();
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <PasswordReset
            onPasswordReset={this.handlePasswordReset}
          />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <MobileTopNavNoSearch />
          <PasswordResetMobile
            onPasswordReset={this.handlePasswordReset}
          />
          <NavMobile
            onClick={this.handleMobileNav}
          />
        </MediaQuery>
      </div>
    );
  }
}

// const mapStateToProps = selectPasswordResetPage();

function mapDispatchToProps(dispatch) {
  return {
    resetRequest: () => dispatch(resetRequest()),
    moveLocation: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(PasswordResetPage);
