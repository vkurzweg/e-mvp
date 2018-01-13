/*
 *
 * ProfileContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import UserInfo from 'components/profile/UserInfo';
import Paper from 'material-ui/Paper';


const styles = {
  block: {
    maxWidth: 100,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: '#7986CB',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
};


export class ProfileContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ backgroundColor: '#E2E2E2', height: '100%', paddingBottom: '30%', paddingTop: '20%' }}>
        <Paper zDepth={2} style={{ display: 'block', margin: '0 auto', marginTop: '5%', padding: '5%', backgroundColor: '#FAFAFA', width: '80%', marginBottom: '10%' }}>
          <UserInfo
            currentUser={this.props.currentUser}
          />
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-primary" style={{ display: 'block', backgroundColor: '#BCBCBC', width: '15em', height: '45px', border: 'none', margin: '1em auto' }} onClick={this.props.logout}>Logout</button>
          </div>
        </Paper>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProfileContainer);

// <button className="btn btn-danger" style={{ display: 'block', width: '15em', height: '45px', border: 'none', margin: '1em auto' }} onClick={this.logout}>Delete Account</button>
// <div style={{ width: '200px', margin: '0 auto', marginTop: '2em' }}>
//   <Toggle
//     label="Email notifications"
//     defaultToggled={true}
//     style={styles.toggle}
//     backgroundColor="#7986CB"
//   />
// </div>
