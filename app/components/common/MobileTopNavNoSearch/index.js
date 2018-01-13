/**
*
* MobileTopNav
*
*/

import React from 'react';
import E from 'assets/images/E_50_white_mobile.png';
import Back from 'assets/images/back_white.png';
import { connect } from 'react-redux';
import SearchFormMobile from 'components/search/SearchFormMobile';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
import { push, goBack } from 'react-router-redux';
import Gradient from '../MobileTopNavChat/Gradient';


const style = {
  width: '100%',
  height: 65,
};

export class MobileTopNav extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goHome() {
    browserHistory.push('/')
  }

  goBack(e) {
    e.preventDefault();
    this.props.goBack();
  }

  render(){
    return (
      <div>
        <Paper style={style} zDepth={1}>
          <Gradient style={{ height: '65px', backgroundColor: 'black', width: '100%' }}>
              <img src={Back} alt="back arrow" onClick={ this.goBack } style={{ height: '16px', marginTop: '2%', marginLeft: '2%' }} />
              <img src={E} alt="Eventmakr logo" onClick={this.goHome} style={{ marginLeft: '38%', marginTop: '2%' }} />
            </Gradient>
        </Paper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goBack: () => dispatch(goBack()),
  };
}

export default connect(null, mapDispatchToProps)(MobileTopNav);

