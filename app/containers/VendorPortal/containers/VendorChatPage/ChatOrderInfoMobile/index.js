/**
*
* ChatOrderInfo
*
*/

import React from 'react';
import ChatOrderCustomerMobile from '../../../components/ChatOrderCustomerMobile';
import ChatOrderProductsMobile from '../../../components/ChatOrderProductsMobile';
import Subheader from 'material-ui/Subheader';
import Arrow from 'assets/images/arrow_down_blk.png';

function ChatOrderInfo(props) {
  let display = 'none';
  (props.isOrderShowing) ? display = 'block' : display = 'none';
  return (
    <div style={{ borderBottom: '1px solid #E2E2E2' }}>
      <ChatOrderCustomerMobile
        order={props.order}/>
        <div onClick={props.toggleOrder}>
          <p style={{ textAlign: 'center', textTransform: 'uppercase' }}>Order <img src={Arrow} /></p>
        </div>
        <div style={{ display }}>
          <ChatOrderProductsMobile
            order={props.order}
          />
      </div>
    </div>
  );
}

export default ChatOrderInfo;
