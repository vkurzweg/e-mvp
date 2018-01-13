/**
*
* TextWeb
*
*/

import React from 'react';
import Button from './Button';

function TextWeb(props) {
  let display;
  props.isShowing ? display = 'block' : display = 'none'
  return (
    <div style={{ display, marginTop: '7%' }}>
      <div style={{ fontSize: '28px', paddingTop: '1%', paddingBottom: '1%', textAlign: 'center', color: '#FAFAFA', width: '40%', display: 'block', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '5px' }}>
        <p>Welcome to Eventmakr, <br /> a new marketplace for event planning</p>
        <a href="/#about"><Button className="btn btn-default">See how it works</Button></a>
        <p onClick={props.hideCTA} style={{ marginTop: '3%', fontSize: '14px', textDecoration: 'underline', cursor: 'pointer' }}>Dismiss</p>
      </div>
    </div>
  );
}

export default TextWeb;
