/*
 *
 * SignUp
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SignUpFormWeb from 'components/signup/SignUpFormWeb';
import SignUpFormMobile from 'components/signup/SignUpFormMobile';
import MediaQuery from 'react-responsive';
import { browserHistory } from 'react-router';
import { selectSignUpPage } from './selectors';
import { signupAttempt, setEmailSignup, setPasswordSignup, setPasswordConfirmSignup, submitPayment, openModal, closeModal, facebookLoginAttempt, setPayment, showSnackbar } from './actions';
import { setOccasion,
  setDate,
  setZip,
  createEvent,
  setHostName,
  setAddress,
  setCity,
  setEventState
} from 'containers/EventPage/actions';
import { selectEventPage, selectSearch, selectEvent, selectUser } from 'containers/EventPage/selectors';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import EventPageContainer from './EventPageContainer';
import EventPageContainerMobile from './EventPageContainerMobile';
import moment from 'moment';
import NavWebContainer from '../NavWebContainer';
import PaymentInfoContainer from './PaymentInfoContainer';
import PaymentInfoContainerMobile from './PaymentInfoContainerMobile';
import Snackbar from 'material-ui/Snackbar';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import NavMobile from 'components/common/NavMobile';
import { push, goBack } from 'react-router-redux';
import { toJS } from 'immutable';



export class SignUpPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      isTermAccepted: false,
      isAgeVerified: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleTermsAccept = this.handleTermsAccept.bind(this);
    this.handleAgeVerify = this.handleAgeVerify.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleMobileNav = this.handleMobileNav.bind(this)
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
          <MediaQuery minWidth={768}>
            <SignUpFormWeb
              email={this.props.email}
              password={this.props.password}
              passwordConfirm={this.props.passwordConfirm}
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
              handlePasswordConfirmChange={this.handlePasswordConfirmChange}
              setEmail={this.props.setEmail}
              setPassword={this.props.setPassword}
              setPasswordConfirm={this.props.setPasswordConfirm}
              signup={this.props.signup}
              onTermsAccept={this.handleTermsAccept}
              onAgeVerify={this.handleAgeVerify}
              isOpen={this.props.modalIsOpen}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
              facebookLoginAttempt={this.props.facebookLoginAttempt}
              currentUser={this.props.currentUser}
              isLoginFailed={this.props.isLoginFailed}
              isSigningUp={this.props.isSigningUp}
            />
            <div style={{ textAlign: 'center', marginTop: '5%' }}>
              <RaisedButton
                label={stepIndex === 2 ? 'Finish' : 'Next'}
                primary={true}
                disabled={(this.state.isTermAccepted === false) || (this.state.isAgeVerified === false) || (!this.props.currentUser)}
                onTouchTap={this.handleNext}
              />
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <SignUpFormMobile
              email={this.props.email}
              password={this.props.password}
              passwordConfirm={this.props.passwordConfirm}
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
              handlePasswordConfirmChange={this.handlePasswordConfirmChange}
              setEmail={this.props.setEmail}
              setPassword={this.props.setPassword}
              setPasswordConfirm={this.props.setPasswordConfirm}
              signup={this.props.signup}
              onTermsAccept={this.handleTermsAccept}
              onAgeVerify={this.handleAgeVerify}
              isOpen={this.props.modalIsOpen}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
              facebookLoginAttempt={this.props.facebookLoginAttempt}
              currentUser={this.props.currentUser}
              isLoginFailed={this.props.isLoginFailed}
              isSigningUp={this.props.isSigningUp}
            />
            <div style={{ textAlign: 'center', marginTop: '5%', paddingBottom: '25%' }}>
              <RaisedButton
                label={stepIndex === 2 ? 'Finish' : 'Next'}
                primary={true}
                disabled={(this.state.isTermAccepted === false) || (this.state.isAgeVerified === false) || (!this.props.currentUser)}
                onTouchTap={this.handleNext}
              />
            </div>
          </MediaQuery>
        </div>
        );
      case 1:
        return (
          <div>
            <MediaQuery minWidth={768}>
              <PaymentInfoContainer
                stepIndex={this.props.stepIndex}
                handlePrev={this.handlePrev}
                handleNext={this.handleNext}
                submitPayment={this.props.submitPayment}
                isPaymentSubmitted={this.props.isPaymentSubmitted}
                currentUser={this.props.currentUser}
                isPaymentFailed={this.props.isPaymentFailed}
                isSubmittingPayment={this.props.isSubmittingPayment}
              />
              <div style={{ textAlign: 'center', marginTop: '5%' }}>
                <RaisedButton
                  label={this.props.stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  disabled={this.props.isPaymentSubmitted === false}
                  onTouchTap={this.handleNext}
                />
              </div>
              <Snackbar
                 open={this.props.isShowingSnackbar}
                 message="Payment added"
                 autoHideDuration={4000}
               />
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <PaymentInfoContainerMobile
                stepIndex={this.props.stepIndex}
                handlePrev={this.handlePrev}
                handleNext={this.handleNext}
                submitPayment={this.props.submitPayment}
                isPaymentSubmitted={this.props.isPaymentSubmitted}
                currentUser={this.props.currentUser}
                isPaymentFailed={this.props.isPaymentFailed}
                isSubmittingPayment={this.props.isSubmittingPayment}
              />
              <div style={{ textAlign: 'center', marginTop: '5%' }}>
                <RaisedButton
                  label={this.props.stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  disabled={this.props.isPaymentSubmitted === false}
                  onTouchTap={this.handleNext}
                />
              </div>
              <Snackbar
                 open={this.props.isShowingSnackbar}
                 message="Payment added"
                 autoHideDuration={4000}
               />
            </MediaQuery>
          </div>
        );
      case 2:
        return (
          <div>
            <MediaQuery minWidth={768}>
              <EventPageContainer
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
                handleCreateClick={this.handleCreateClick}
                isCreateFailed={this.props.isCreateFailed}
              />
              <div style={{ textAlign: 'center', marginTop: '5%' }}>
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  disabled={this.state.isTermAccepted === false}
                  onTouchTap={this.handleCreateClick}
                />
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <EventPageContainerMobile
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
                handleCreateClick={this.handleCreateClick}
                isCreateFailed={this.props.isCreateFailed}
              />
              <div style={{ textAlign: 'center', marginTop: '5%' }}>
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  disabled={this.state.isTermAccepted === false}
                  onTouchTap={this.handleCreateClick}
                />
              </div>
            </MediaQuery>
          </div>
        )
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  handleEmailChange(evt, email) {
    this.props.setEmail(email);
  }

  handlePasswordChange(evt, password) {
    this.props.setPassword(password);
  }

  handlePasswordConfirmChange(evt, passwordConfirm) {
    this.props.setPasswordConfirm(passwordConfirm);
  }

  handleSignup() {
    this.props.signup();
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleTermsAccept(e) {
    this.setState({
      isTermAccepted: true,
    });
  }

  handleAgeVerify(e) {
    this.setState({
      isAgeVerified: true,
    });
  }

  handleCreateClick(e) {
    this.props.createEvent();
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };
    return (
      <div>

        <MediaQuery minWidth={768}>
          <NavWebContainer />
          <div style={{ width: '100%', maxWidth: 700, margin: 'auto', marginTop: '1em' }}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Create account</StepLabel>
              </Step>
              <Step>
                <StepLabel>Set up payment</StepLabel>
              </Step>
              <Step>
                <StepLabel>Save event details</StepLabel>
              </Step>
            </Stepper>
            <div style={contentStyle}>
              {finished ? (
                <p>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({ stepIndex: 0, finished: false });
                    }}
                  >
                    Click here
                  </a> to reset the example.
                </p>
              ) : (
                <div>
                  <div>{this.getStepContent(stepIndex)}</div>
                </div>
              )}
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <MobileTopNavNoSearch />
          <div style={{ width: '100%', maxWidth: 375, margin: 'auto' }}>
            <Stepper
              activeStep={stepIndex}
              connector={null}
              orientation="vertical"
              style={{ marginLeft: '25%' }}>
              <Step style={{ height: '55px' }}>
                <StepLabel>Create account</StepLabel>
              </Step>
              <Step style={{ height: '55px' }}>
                <StepLabel>Set up payment</StepLabel>
              </Step>
              <Step style={{ height: '55px' }}>
                <StepLabel>Save event details</StepLabel>
              </Step>
            </Stepper>
            <div style={contentStyle}>
              {finished ? (
                <p>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({ stepIndex: 0, finished: false });
                    }}
                  >
                    Click here
                  </a> to reset the example.
                </p>
              ) : (
                <div>
                  <div>{this.getStepContent(stepIndex)}</div>
                </div>
              )}
            </div>
          </div>
          <NavMobile
            onClick={this.handleMobileNav}/>
        </MediaQuery>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const signupPage = selectSignUpPage(state);
  const modalIsOpen = signupPage.get('modalIsOpen')
  const email = signupPage.get('email');
  const password = signupPage.get('password');
  const passwordConfirm = signupPage.get('passwordConfirm');
  const searchState = selectSearch(state);
  const startDate = moment(searchState.get('startDate'))._d;
  const occasion = searchState.get('occasion');
  const zipCode = searchState.get('zipCode');
  const eventState = selectEvent(state);
  const event = eventState.get('event');
  const hostName = eventState.get('hostName');
  const address = eventState.get('address');
  const city = eventState.get('city');
  const eventLocState = eventState.get('eventLocState');
  const userState = selectUser(state);
  const currentUser = userState.get('currentUser');
  const isPaymentSubmitted = userState.get('isPaymentSubmitted');
  const isShowingSnackbar = signupPage.get('isShowingSnackbar');
  const isLoginFailed = signupPage.get('isLoginFailed');
  const isPaymentFailed = signupPage.get('isPaymentFailed');
  const isCreateFailed = eventState.get('isCreateFailed');
  const isSigningUp = signupPage.get('isSigningUp');
  const isSubmittingPayment = userState.get('isSubmittingPayment');
  return {
    email,
    password,
    passwordConfirm,
    occasion,
    zipCode,
    startDate,
    event,
    hostName,
    address,
    city,
    eventLocState,
    modalIsOpen,
    currentUser,
    isPaymentSubmitted,
    isShowingSnackbar,
    isLoginFailed,
    isPaymentFailed,
    isCreateFailed,
    isSigningUp,
    isSubmittingPayment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // create account
    signup: () => dispatch(signupAttempt()),
    setEmail: (email) => dispatch(setEmailSignup(email)),
    setPassword: (password) => dispatch(setPasswordSignup(password)),
    setPasswordConfirm: (password) => dispatch(setPasswordConfirmSignup(password)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    facebookLoginAttempt: () => dispatch(facebookLoginAttempt()),
    setUser: (currentUser) => dispatch(setUser(currentUser)),
    // save event info
    setOccasion: (occ) => dispatch(setOccasion(occ)),
    setDate: (date) => dispatch(setDate(date)),
    setZip: (zip) => dispatch(setZip(zip)),
    createEvent: () => dispatch(createEvent()),
    setHostName: (hostName) => dispatch(setHostName(hostName)),
    setAddress: (address) => dispatch(setAddress(address)),
    setCity: (city) => dispatch(setCity(city)),
    setEventState: (eventState) => dispatch(setEventState(eventState)),
    submitPayment: (token) => dispatch(submitPayment(token)),
    moveLocation: (url) => dispatch(push(url)),
  };
}

SignUpPage.propTypes = {

  setEmail: React.PropTypes.func,
  email: React.PropTypes.string,
  setPassword: React.PropTypes.func,
  setPasswordConfirm: React.PropTypes.func,
  signup: React.PropTypes.func,
  password: React.PropTypes.string,
  passwordConfirm: React.PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
