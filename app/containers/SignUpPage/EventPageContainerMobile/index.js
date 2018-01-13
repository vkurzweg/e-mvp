/*
 *
 * EventPageContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import EventInfoContainer from './EventInfoContainer';
import FlexContainer from './FlexContainer';
import Button from './Button';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { toJS } from 'immutable';


export class EventPageContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FlexContainer>
          <EventInfoContainer
            setOccasion={this.props.setOccasion}
            occasion={this.props.occasion}
            setDate={this.props.setDate}
            startDate={this.props.startDate}
            setZip={this.props.setZip}
            zipCode={this.props.zipCode}
            setHostName={this.props.setHostName}
            hostName={this.props.hostName}
            setAddress={this.props.setAddress}
            address={this.props.address}
            setCity={this.props.setCity}
            city={this.props.city}
            setEventState={this.props.setEventState}
            eventLocState={this.props.eventLocState}
            isCreateFailed={this.props.isCreateFailed}
          />
          <hr style={{ marginTop: '1em', marginBottom: '-1em' }} />
        </FlexContainer>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(EventPageContainer);
