/**
*
* FeaturedVendors
*
*/

import React from 'react';
import MalibuParty from 'assets/images/malibuparty.jpg';
import FieldKitchen from 'assets/images/field_kitchen.jpg';
import Blossoms from 'assets/images/blossoms.jpg';
import Truck from 'assets/images/truck.jpg';
import { toJS } from 'immutable';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: '0',
    paddingRight: '0',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

function FeaturedVendors(props) {
  let vendors = [];
  if (!!props.featuredVendors) vendors = props.featuredVendors.toJS();
  console.log(props);
  return (
    <div>
      <p style={{ textAlign: 'center', textTransform: 'uppercase', textDecoration: 'underline', fontSize: '18px', marginBottom: '2%' }}>Featured Vendors</p>
      <div className="container-fluid" style={styles.root}>
        <div className="row" style={{ display: 'inline-flex', width: '100%', marginLeft: '4%', marginBottom: '5%', cursor: 'pointer' }}>
          <GridList style={styles.gridList} cols={2.2}>
          {vendors.map((vendor, idx) => {
            return (
                  <GridTile
                    key={idx}
                    title={vendor.categories[0]}
                    subtitle={vendor.name}
                    titleStyle={styles.titleStyle}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    onClick={props.onFeaturedClick.bind(this, vendor._id, vendor.categories[0])}
                  >
                    <img src={vendor.photos[0]} />
                  </GridTile>
            )
          })}
          </GridList>
        </div>
      </div>
    </div>
  );
}

export default FeaturedVendors;
