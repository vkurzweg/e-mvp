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
import { push, goBack } from 'react-router-redux';
import Gradient from './Gradient';

const OCCASIONS = require('../../../data/occasions');

const style = {
  width: '100%',
  height: 65,
};

export class MobileTopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  componentDidMount() {
    console.log(this.state, this.toggleSearch)
  }

  toggleSearch() {
    this.setState((prevState) => {
      return { showSearch: !prevState.showSearch };
    });
  }

  goHome() {
    browserHistory.push('/')
  }

  render(){
    let display = 'none';
    (this.state.showSearch) ? display = 'block' : display = 'none';
    return (
      <div>
        <Paper style={style} zDepth={1}>
          <Gradient style={{ height: '65px' }}>
              <img src={Back} alt="back arrow" onClick={ browserHistory.goBack } style={{ height: '16px', marginTop: '2%', marginLeft: '2%' }} />
              <img src={E} alt="Eventmakr logo" onClick={this.goHome} style={{ marginLeft: '43%', marginTop: '1%' }} />
            </Gradient>
        </Paper>
      </div>
    );
  }
}

export default MobileTopNav;
