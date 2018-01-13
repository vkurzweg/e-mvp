/**
*
* ChatOrderInfo
*
*/

import React from 'react';
import Subheader from 'material-ui/Subheader';
import ChatOrderCustomer from '../../../components/ChatOrderCustomer';
import ChatOrderProducts from '../../../components/ChatOrderProducts';
import Paper from 'material-ui/Paper';
import Infinite from 'react-infinite';


function ChatOrderInfo(props) {
  let display = 'none';
  (props.isOrderShowing) ? display = 'block' : display = 'none';
  return (
    <div className="col-sm-3" style={{ color: '#323232', backgroundColor: '#E2E2E2', marginLeft: '75%', position: 'absolute' }}>
      <Paper zDepth={2} style={{ padding: '10%', paddingTop: '0', height: '100%', backgroundColor: '#FAFAFA' }}>
        <Infinite containerHeight={600} elementHeight={40}>
        <Subheader style={{ textAlign: 'center', textTransform: 'uppercase' }}>Current Chat</Subheader>
        <ChatOrderCustomer
          order={props.order} />
        <p style={{ textAlign: 'center', textTransform: 'uppercase' }}>Order:</p>
        <ChatOrderProducts
          order={props.order} />
        </Infinite>
      </Paper>
    </div>
  );
}

export default ChatOrderInfo;
