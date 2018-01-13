/*
 *
 * VendorContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectVendorContainer from './selectors';
import VendorGrid from 'components/vendorsCategory/VendorGrid';
import { GridList } from 'material-ui/GridList';
import Prefixer from 'inline-style-prefixer'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: '4%',
    marginTop: '1%'
  },
  gridList: {
    width: '78%',
    minWidth: '430',
    height: '90%',
    overflowY: 'auto',
    overflowX: 'auto',
  },
};

const prefixer = new Prefixer()
const prefixedStyle = prefixer.prefix(styles)

export class VendorContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleVendorClick = this.handleVendorClick.bind(this);
  }

  handleVendorClick(vId, name, id) {
    const vendor = name;
    const key = id;
    let currentLocation = window.location.pathname;
    if (currentLocation[currentLocation.length - 1] !== '/') currentLocation += '/';
    const vendorUrl = currentLocation + vId;
    this.props.setVendor(vendor);
    this.props.setVendorKey(key);
    this.props.getVendors(vendorUrl);
  }

  render() {
    const vendors = this.props.vendors;
    let display;
    (vendors.length === 0) ? display = 'block' : display = 'none'
    return (
      <div className="col-xs-7" style={styles.root}>
        <div style={{ display, textAlign: 'center' }}>
          <p>No vendors found in this category.</p>
        </div>
          <GridList
            cellHeight={350}
            style={styles.gridList}
          >
          { vendors.map((vendor, idx, vendors) => {
              return <VendorGrid
                key={idx}
                id={idx}
                location={ vendor.location }
                src={vendor.photos[0]}
                name={vendor.name}
                data={vendor._id}
                products={vendor.products}
                budget={vendor.budget}
                onVendorClick={this.handleVendorClick}
                setVendorKey={this.props.setVendorKey}
                isFetchingVendors={this.props.isFetchingVendors}
              />
            })}
          </GridList>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   console.log('vendorcontainer state:', state);
//   return {
//     occasion: state.get('VendorCategoryPage').get('category').get('value'),
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default VendorContainer;
