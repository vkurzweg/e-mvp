/**
*
* Product
*
*/

import React from 'react';
import P from './P';
import Check from 'assets/images/checkbox_checked.png';


function Order(props) {
  let products = props.order.products
  return (
    <div style={{ marginLeft: '15%', marginBottom: '3%' }}>
      {products.map((product, idx, products) => {
        <OrderItem
      })}
    </div>
  );
}

export default Order;

// {(orders[idx].products).map((product, idx, products) => {
//       return (
//         <div key={idx+1}>
//           <img
//             src={product[idx].photos[0]}
//             key={idx}
//             alt="product"
//             style={{ width: '200px', verticalAlign: 'top' }}
//           />
//           <div style={{ display: 'inline-block', marginLeft: '7em', verticalAlign: 'top', textAlign: 'left' }} key={idx+2}>
//             <h4 style={{ fontWeight: 'bold' }} key={idx+3}>{product[idx].name}</h4>
//             <button className="btn btn-warning" style={{ backgroundColor: '#FF7A7A', fontSize: '12px', border: 'none' }} key={idx+4}>Modify/Cancel</button>
//           </div>
//           <div style={{ display: 'inline-block', marginLeft: '5em' }} key={idx+5}>
//             <p key={idx+6}>{product[idx].price}</p>
//           </div>
//           <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '5em' }} key={idx+7}>
//             <img src={Check} alt="checkbox" key={idx+8} />
//             <p style={{ fontSize: '10px', color: '#2FBA90' }} key={idx+9}>Confirmed!</p>
//           </div>
//         </div>
//       )
//     })}
//         )
//       })}
