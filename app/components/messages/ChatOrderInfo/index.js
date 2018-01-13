/**
*
* ChatOrderInfo
*
*/

import React from 'react';
import ChatOrderVendor from '../ChatOrderVendor';
import ChatOrderProducts from '../ChatOrderProducts';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Infinite from 'react-infinite';


function ChatOrderInfo(props) {
  let display = 'none';
  (props.isOrderShowing) ? display = 'block' : display = 'none';
  return (
    <div className="col-sm-3" style={{ color: '#323232', backgroundColor: '#E2E2E2', marginLeft: '50%' }}>
      <Paper zDepth={2} style={{ padding: '10%', paddingTop: '0', height: '100%' }}>
        <Infinite containerHeight={600} elementHeight={40}>
        <Subheader style={{ color: '#323232', textAlign: 'center', textTransform: 'uppercase' }}>Chatting With</Subheader>
        <ChatOrderVendor
          order={props.order}/>
        <p style={{ textAlign: 'center', textTransform: 'uppercase' }}>Your order:</p>
        <div>
          <ChatOrderProducts
            order={props.order}
          />
        </div>
        </Infinite>
      </Paper>
    </div>
  );
}

export default ChatOrderInfo;
