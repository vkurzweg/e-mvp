/*
 *
 * PaymentPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectPaymentPage, selectUser } from './selectors';
import NavWebContainer from '../NavWebContainer';
import MediaQuery from 'react-responsive';
import PaymentInfoContainer from './PaymentInfoContainer';
import PaymentInfoContainerMobile from './PaymentInfoContainerMobile';
import { submitPayment, setPayment, showSnackbar } from './actions';
import NavMobile from 'components/common/NavMobile';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import { push } from 'react-router-redux';


export class PaymentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>

        <MediaQuery minWidth={768}>
          <NavWebContainer />
          <PaymentInfoContainer
            submitPayment={this.props.submitPayment}
            isPaymentSubmitted={this.props.isPaymentSubmitted}
            setPayment={this.props.setPayment}
            isShowingSnackbar={this.props.isShowingSnackbar}
            isPaymentFailed={this.props.isPaymentFailed}
          />
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <MobileTopNavNoSearch />
          <PaymentInfoContainerMobile
            submitPayment={this.props.submitPayment}
            isPaymentSubmitted={this.props.isPaymentSubmitted}
            setPayment={this.props.setPayment}
            isShowingSnackbar={this.props.isShowingSnackbar}
            isPaymentFailed={this.props.isPaymentFailed}
          />
          <NavMobile
           onClick={this.handleMobileNav}/>
        </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const userState = selectUser(state);
  const currentUser = userState.get('currentUser');
  const isPaymentSubmitted = userState.get('isPaymentSubmitted');
  const paymentState = selectPaymentPage(state);
  const isShowingSnackbar = paymentState.get('isShowingSnackbar');
  const isPaymentFailed = userState.get('isPaymentFailed');
  const isSubmittingPayment = userState.get('isSubmittingPayment');
  return {
    currentUser,
    isPaymentSubmitted,
    isShowingSnackbar,
    isPaymentFailed,
    isSubmittingPayment,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitPayment: (token) => dispatch(submitPayment(token)),
    showSnackbar: () => dispatch(showSnackbar()),
    moveLocation: (url) => dispatch(push(url)),
    setPayment: () => dispatch(setPayment()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
