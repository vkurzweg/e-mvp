/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { loadEvent, loadUser } from './actions';
import { browserHistory } from 'react-router';
import { selectApp } from './selectors';
import Loading from 'react-loading';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentDidMount() {
    console.log('app component loaded!')
    this.props.rehydrateUser()
  }

  render() {
    let component = <Loading type='spin' color='#e3e3e3'/>
    if (this.props.isAppLoaded) component = React.Children.toArray(this.props.children)
    return (
      <div>
        {component}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const appState = selectApp(state);
  return {
    isAppLoaded: appState.get('isAppLoaded'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    rehydrateEvent: () => dispatch(loadEvent()),
    rehydrateUser: (cb) => dispatch(loadUser(cb)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
