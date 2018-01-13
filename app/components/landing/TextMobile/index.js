/**
*
* TextMobile
*
*/

import React from 'react';
import E from 'assets/images/E_200mobile.png';



function TextMobile() {
  return (
    <div>
      <img src={E} alt="Eventmakr logo" style={{ display: 'block', margin: '0 auto', width: '10em' }} />
      <div style={{ display: 'block', fontSize: '24px', width: '90%', margin: '0 auto', marginTop: '1.5em', marginLeft: '1.5em', textAlign: 'center' }}>
        <p>Welcome to <span style={{ color: '#3F51B5', fontSize: '28px', fontWeight: 'bold' }}>Eventmakr</span></p>
      </div>
    </div>
  );
}

export default TextMobile;
