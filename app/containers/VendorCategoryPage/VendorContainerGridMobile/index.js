/*
 *
 * VendorContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectVendorContainer from './selectors';
import VendorGridMobile from 'components/vendorsCategory/VendorGridMobile';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    paddingBottom: '5%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: '2%',
    margin: '0 auto',
  },
  gridList: {
    width: '80%',
    minWidth: '290',
    height: '540',
    overflowY: 'auto',
    overflowX: 'auto',
  },
};


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
    console.log('vendors in vend cont grid', vendors)
    return (
      <div className="col-md-7" style={styles.root}>
          <GridList
            cellHeight={280}
            style={styles.gridList}
          >
          { vendors.map((vendor, idx, vendors) => {
              return <VendorGridMobile
                key={idx}
                id={idx}
                src={vendor.photos[0]}
                name={vendor.name}
                data={vendor._id}
                products={vendor.products}
                location={ vendor.location }
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
