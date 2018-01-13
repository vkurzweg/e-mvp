/*
 *
 * VendorProfileContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import VendorInfo from '../../../components/VendorInfo';
import Paper from 'material-ui/Paper';


export class VendorProfileContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#E2E2E2', height: '100%' }}>
        <Paper zDepth={2} style={{ display: 'block', margin: '0 auto', marginTop: '5%', padding: '5%', backgroundColor: '#FAFAFA', width: '40%', marginBottom: '10%' }}>
          <VendorInfo
            currentVendor={this.props.currentVendor}
          />
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-primary" style={{ display: 'block', backgroundColor: '#BCBCBC', width: '15em', height: '45px', border: 'none', margin: '1em auto' }} onClick={this.props.vendorLogout}>Logout</button>
          </div>
        </Paper>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(VendorProfileContainer);
