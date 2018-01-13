/*
 *
 * VendorMapContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectVendorMapContainer from './selectors';
import GoogleMap from 'google-map-react';
import VendorMarker from 'components/VendorMarker';


export class VendorMapContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    center: { lat: 34.018500, lng: -118.486756 },
    zoom: 9,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("map props", this.props)
  }

  render() {
    let lat = 34.018500;
    let lng = -118.486756;
    if (!this.props.isFetchingVendor && this.props.vendor && !!this.props.vendor.location) lat = this.props.vendor.location.lat;
    if (!this.props.isFetchingVendor && this.props.vendor && !!this.props.vendor.location) lng = this.props.vendor.location.lng;
    const marker = <VendorMarker lat={lat} lng={lng} text={'A'} />
    return (
      <div className="col-xs-3">
        <div style={{ marginLeft: '40%', width: '250px', height: '300px' }}>
          <GoogleMap
            center={this.props.center}
            zoom={this.props.zoom}
            bootstrapURLKeys={{
              key: 'AIzaSyA8Y62ANm26ju744p13wt5ok510yduluz4',
            }}
          >
          {marker}
          </GoogleMap>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = selectVendorMapContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(VendorMapContainer);
