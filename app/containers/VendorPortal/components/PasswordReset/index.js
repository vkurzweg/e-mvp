/**
*
* PasswordReset
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';



function PasswordReset(props) {
  return (
    <div style={{ marginTop: '5%' }}>
      <Paper zDepth={2} style={{ marginTop: '20%', padding: '5%', width: '50%', display: 'block', margin: '0 auto' }}>
        <p style={{ display: 'block', textAlign: 'center' }}>Please enter your email address to reset your password</p>
        <div style={{ display: 'block', padding: '5%', marginLeft: '20%' }}>
          <TextField
            hintText="Email"
            onChange={props.onEmailChange}
            textFieldStyle={{ display: 'block', width: '100%', minWidth: '150px'}}/>
        </div>
          <RaisedButton onClick={props.onPasswordReset} label="Send Email" primary={true} style={{ display: 'block', width: '50%', margin: '0 auto'}} />
          <RaisedButton onClick={browserHistory.goBack} label="Cancel" style={{ display: 'block', width: '50%', margin: '0 auto', marginTop: '5%'}} />
      </Paper>
    </div>
  );
}

export default PasswordReset;
