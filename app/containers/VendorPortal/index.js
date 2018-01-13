/*
 *
 * VendorPortal
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import selectVendorPortal from './selectors';
import NavWeb from 'containers/VendorPortal/components/NavWeb';
import MediaQuery from 'react-responsive';
import NavMobileVendor from './components/NavMobileVendor';
import { push, goBack } from 'react-router-redux';


export class VendorPortal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>
        <Helmet
          title="VendorPortal"
          meta={[
            { name: 'description', content: 'Description of VendorPortal' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <NavWeb links={[
            {url:"/v/login", name:"Account"},
            {url:"/v/chat", name:"Chat"},
            {url:"/v/orders", name:"Orders"}]}/>
          {this.props.children}
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          {this.props.children}
          <NavMobileVendor
            onClick={this.handleMobileNav}
          />
        </MediaQuery>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    moveLocation: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(VendorPortal);
