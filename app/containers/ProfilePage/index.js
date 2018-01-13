/*
 *
 * ProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LogoutButton from 'components/profile/LogoutButton';
import AuthService from '../../utils/AuthService';
import MediaQuery from 'react-responsive';
import NavWebContainer from '../NavWebContainer';
import { logout } from './actions';
import { selectProfilePage, selectUser } from './selectors';
import ProfileContainer from './ProfileContainer';
import ProfileContainerMobile from './ProfileContainerMobile';
import ProfileContainerTablet from './ProfileContainerTablet';
import { toJS } from 'immutable';
import { push, goBack } from 'react-router-redux';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import TabletTopNavNoSearch from 'components/common/TabletTopNavNoSearch';
import NavMobile from 'components/common/NavMobile';
import NavTablet from 'components/common/NavTablet';
import Helmet from 'react-helmet';


export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.handleMobileNav = this.handleMobileNav.bind(this)
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  componentWillMount() {
    const pathAfterLogin = window.location.pathname
    if (!this.props.isAuthenticated) {
      this.props.moveLocation(`/login?next=${pathAfterLogin}`)
    } else {
      console.log('authenticated')
    }
  }


  logoutUser() {
    // sign out of firebase
    this.props.logout()
  }


  render() {
    return (
      <div style={{ backgroundColor: '#E2E2E2', height: '100%' }}>
        <Helmet
          title="Eventmakr - Easy Online Event Planning and Ordering"
          meta={[
            { name: 'description', content: 'Order from caterers, florists, food trucks, and other local vendors on Eventmakr, a new marketplace for event planning.' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <NavWebContainer />
            <ProfileContainer
              logout={this.logoutUser}
              currentUser={this.props.currentUser}
            />
        </MediaQuery>

        <MediaQuery minWidth={481} maxWidth={767}>
          <TabletTopNavNoSearch />
          <ProfileContainerTablet
            logout={this.logoutUser}
            currentUser={this.props.currentUser}
          />
          <NavTablet
            onClick={this.handleMobileNav}
          />
        </MediaQuery>

        <MediaQuery maxWidth={480}>
          <MobileTopNavNoSearch />
          <ProfileContainerMobile
            logout={this.logoutUser}
            currentUser={this.props.currentUser}
          />
          <NavMobile
            onClick={this.handleMobileNav}
          />
        </MediaQuery>

      </div>
    );
  }
}

ProfilePage.propTypes = {
  auth: PropTypes.instanceOf(AuthService),
  router: PropTypes.object,
  route: PropTypes.object,
};

function mapStateToProps(state) {
  const userState = selectUser(state);
  let currentUser = userState.get('currentUser');
  const isAuthenticated = userState.get('isAuthenticated');
  return {
    currentUser,
    isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    moveLocation: (url) => dispatch(push(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
