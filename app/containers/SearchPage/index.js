/*
 *
 * SearchPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectSearchPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { push } from 'react-router-redux';
import { setLocation } from './actions';
import moment from 'moment';

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet
          title="SearchPage"
          meta={[
            { name: 'description', content: 'Description of SearchPage' },
          ]}
        />
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleLinkClick: () => dispatch(push('/vendors')),
    setLocation: (location) => dispatch(setLocation(location)),
  };
}


export default connect(null, mapDispatchToProps)(SearchPage);
