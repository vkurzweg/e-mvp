/**
*
* MobileTopNav
*
*/

import React from 'react';
import E from 'assets/images/E_50_white_mobile.png';
import Back from 'assets/images/back_white.png';
import Search from 'assets/images/search_white.png';
import { connect } from 'react-redux';
import SearchFormMobile from 'components/search/SearchFormMobile';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
import Gradient from './Gradient';


const style = {
  width: '100%',
  height: 65,
};

export class MobileTopNav extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    browserHistory.push('/')
  }

  render(){
    return (
      <div>
        <Paper style={style} zDepth={1}>
          <Gradient style={{ height: '65px', backgroundColor: 'black', width: '100%' }}>
              <img src={Back} alt="back arrow" onClick={ this.props.showChatFeed } style={{ height: '16px', marginTop: '2%', marginLeft: '2%' }} />
              <img src={E} alt="Eventmakr logo" onClick={this.goHome} style={{ marginLeft: '38%', marginTop: '2%' }} />
            </Gradient>
        </Paper>
      </div>
    );
  }
}

export default MobileTopNav;
