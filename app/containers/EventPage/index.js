/*
 *
 * EventPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import EventInfoContainer from './EventInfoContainer';
import EventInfoContainerMobile from './EventInfoContainerMobile';
import FlexContainer from './FlexContainer';
import FlexContainerMobile from './FlexContainerMobile';
import Button from './Button';
import ButtonMobile from './ButtonMobile';
import { browserHistory } from 'react-router';
import { setOccasion,
  setDate,
  setZip,
  createEvent,
  setHostName,
  setAddress,
  setCity,
  setEventState,
} from './actions';
import { selectEventPage, selectSearch, selectEvent, selectUser } from './selectors';
import moment from 'moment';
import { toJS } from 'immutable';
import Paper from 'material-ui/Paper';
import NavWebContainer from '../NavWebContainer';
import MediaQuery from 'react-responsive';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import NavMobile from 'components/common/NavMobile';
import { push } from 'react-router-redux';



export class EventPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  handleCancelClick(e) {
    e.preventDefault();
    browserHistory.goBack();
  }

  handleCreateClick(e) {
    this.props.createEvent();
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>

        <MediaQuery minWidth={768}>
          <NavWebContainer />
          <div style={{ paddingTop: '2%', backgroundColor: '#E2E2E2' }}>
            <Paper zDepth={2} style={{ backgroundColor: '#FAFAFA', padding: '5%', width: '70%', display: 'block', margin: '0 auto' }}>
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
                <Button
                  className="btn btn-success"
                  onClick={this.handleCreateClick}
                  data={JSON.stringify(this.props.event)}
                >
                  Save
                </Button>
                <div onClick={this.handleCancelClick} >
                  <p style={{ color: '#BDBEBD', textAlign: 'center', textDecoration: 'underline', marginTop: '1em' }}>Cancel</p>
                </div>
              </FlexContainer>
            </Paper>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <MobileTopNavNoSearch />
          <div style={{ marginTop: '2%' }}>
            <FlexContainerMobile>
              <EventInfoContainerMobile
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
              <ButtonMobile
                className="btn btn-success"
                onClick={this.handleCreateClick}
                data={JSON.stringify(this.props.event)}
              >
                Save
              </ButtonMobile>
              <div onClick={this.handleCancelClick} >
                <p style={{ color: '#BDBEBD', textAlign: 'center', textDecoration: 'underline', marginTop: '1em' }}>Cancel</p>
              </div>
            </FlexContainerMobile>
          </div>
          <NavMobile
            onClick={this.handleMobileNav}/>
        </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const searchState = selectSearch(state);
  const startDate = moment(searchState.get('startDate'))._d;
  const occasion = searchState.get('occasion');
  const zipCode = searchState.get('zipCode');
  const eventState = selectEvent(state);
  const event = eventState.get('event');
  const eventPage = selectEventPage(state);
  const hostName = eventPage.get('hostName');
  const address = eventPage.get('address');
  const city = eventPage.get('city');
  const eventLocState = eventPage.get('eventLocState');
  const userState = selectUser(state);
  const isPaymentSubmitted = userState.get('isPaymentSubmitted');
  const isCreateFailed = eventState.get('isCreateFailed');
  return {
    occasion,
    zipCode,
    startDate,
    event,
    hostName,
    address,
    city,
    eventLocState,
    isPaymentSubmitted,
    isCreateFailed,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    setOccasion: (occ) => dispatch(setOccasion(occ)),
    setDate: (date) => dispatch(setDate(date)),
    setZip: (zip) => dispatch(setZip(zip)),
    createEvent: () => dispatch(createEvent()),
    setHostName: (hostName) => dispatch(setHostName(hostName)),
    setAddress: (address) => dispatch(setAddress(address)),
    setCity: (city) => dispatch(setCity(city)),
    setEventState: (eventState) => dispatch(setEventState(eventState)),
    moveLocation: (url) => dispatch(push(url)),
  };
}

EventPage.propTypes = {
  setOccasion: React.PropTypes.func,
  occasion: React.PropTypes.string,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  setHostName: React.PropTypes.func,
  hostName: React.PropTypes.string,
  setAddress: React.PropTypes.func,
  address: React.PropTypes.string,
  setCity: React.PropTypes.func,
  city: React.PropTypes.string,
  setEventState: React.PropTypes.func,
  eventLocState: React.PropTypes.string,
  event: React.PropTypes.object,
  createEvent: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
