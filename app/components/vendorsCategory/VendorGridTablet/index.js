/**
*
* Vendor
*
*/

import React, { PropTypes } from 'react';
import { GridTile } from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Button from './Button';


function Vendor(props) { // eslint-disable-line react/prefer-stateless-function
  let image = props.src;
  if (!image) image = 'http://placehold.it/350x250';
  return (
    <button disabled={props.isFetchingVendors} onClick={props.onVendorClick.bind(this, props.data, props.name, props.id)} >
      <Card key={props.idx} style={{ cursor: 'pointer', height: '250px', width: '100%', backgroundColor: '#FAFAFA' }}>
        <CardMedia>
          <img src={image} data={props.data} style={{ width: '100%', height: '100px'}} />
        </CardMedia>
        <CardTitle title={props.name} subtitle={props.location.city} titleStyle={{ fontSize: '14px', marginTop: '-5%', lineHeight: '22px' }} />
        <CardText expandable="true" style={{ marginTop: '-9%', fontSize: '12px' }}>
          Popular: {props.products[0].name}
        </CardText>
      </Card>
      <Button className="btn btn-success">See Products</Button>
    </button>
  );
}

Vendor.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  name: PropTypes.string,
  onVendorClick: PropTypes.func,
  data: PropTypes.string,
  products: PropTypes.array,
  productName: PropTypes.string,
  budget: PropTypes.number,
};

export default Vendor;
