/**
*
* OrderSlipItem
*
*/

import React from 'react';
import Minus from 'assets/images/minus_red.png';
import P from './P';
import MinusStyle from './MinusStyle';
import { toJS } from 'immutable';
import TextField from 'material-ui/TextField';


function OrderSlipItem(props) {
  let productName = 'LOADING'
  let productQuant = 'LOADING'
  let productPrice = 'LOADING'
  if (!!props.orderSlipItem) productName = props.orderSlipItem.get('product').get('name')
  if (!!props.orderSlipItem) productQuant = props.orderSlipItem.get('quantity')
  if (!!props.orderSlipItem) productPrice = props.orderSlipItem.get('total')
  return (
    <div>
      <table style={{ textAlign: 'center', margin: '0 auto', marginLeft: '1em', padding: '1em' }}>
        <tbody>
          <tr style={{ marginBottom: '1em' }}>
            <td style={{ width: '50%', fontSize: '10px' }}>Product</td>
            <td style={{ width: '10%', fontSize: '10px' }}>Quantity</td>
            <td style={{ width: '20%', fontSize: '10px' }}>Price</td>
            <td style={{ width: '10%' }}/>
          </tr>
          <tr style={{ padding: '1em' }}>
            <td style={{ width: '50%', fontWeight: 'bold' }}>{productName}</td>
            <td style={{ width: '10%' }}>{productQuant}</td>
            <td style={{ width: '20%' }}>{productPrice}</td>
            <td style={{ width: '10%' }}>
              <MinusStyle onClick={props.removeOrderSlipItem} id={props.index} src={Minus} alt="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderSlipItem;
