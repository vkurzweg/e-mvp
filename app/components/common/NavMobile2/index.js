/**
*
* NavMobile2
*
*/

import React from 'react';
import Cart from 'assets/images/cart_24_white.png';
import Chat from 'assets/images/message-24_white.png';
import Party from 'assets/images/popper_white.png';
import Profile from 'assets/images/contacts-24_white.png';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



class NavMobile2 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Find Vendors"
              icon={Party}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Messages"
              icon={Chat}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Orders"
              icon={Cart}
              onTouchTap={() => this.select(2)}
            />
            <BottomNavigationItem
              label="Profile"
              icon={Profile}
              onTouchTap={() => this.select(3)}
            />
          </BottomNavigation>
        </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default NavMobile2;
