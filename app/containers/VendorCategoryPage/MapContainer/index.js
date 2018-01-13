/*
 *
 * MapContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import VendorMarker from 'components/VendorMarker';

const MAP_OPTIONS = {
  scrollwheel: false,
}

export class MapContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    center: { lat: 34.018500, lng: -118.486756 },
    zoom: 9,
  };

  constructor(props) {
    super(props);
  }

  render() {
    // google maps apparently needs to have a set width and height or it collapses to 0,0
    let vendors = [];
    if (!!this.props.vendors) vendors = this.props.vendors
    const markers = vendors.map( (vendor, idx, vendors) => {
      return <VendorMarker key={idx} lat={vendor.location.lat} lng={vendor.location.lng} text={'A'} />
    })
    return (
      <div className="col-xs-2" style={{ marginTop: '1%' }}>
        <div style={{ width: '300px', height: '475px' }}>
          <GoogleMap
            center={this.props.center}
            zoom={this.props.zoom}
            options={MAP_OPTIONS}
            bootstrapURLKeys={{
              key: 'AIzaSyA8Y62ANm26ju744p13wt5ok510yduluz4',
            }}
          >
            {markers}
          </GoogleMap>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(MapContainer);
