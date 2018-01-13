/*
 *
 * VendorPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import NavMobile from 'components/common/NavMobile';
import NavTablet from 'components/common/NavTablet';
import NavWebContainer from '../NavWebContainer';
import InfoContainer from './InfoContainer';
import CatNavContainer from './CatNavContainer';
import CatNavContainerTablet from './CatNavContainerTablet';
import ProductsContainer from './ProductsContainer';
import ProductsContainerTablet from './ProductsContainerTablet';
import ProductsContainerMobile from './ProductsContainerMobile';
import VendorHeader from 'components/vendor/VendorHeader';
import { browserHistory } from 'react-router';
import { push, goBack } from 'react-router-redux';
import * as actionCreators from './actions';
import { clearSnackbar } from './actions';
import { bindActionCreators } from 'redux';
import CatNavContainerMobile from 'containers/VendorCategoryPage/CatNavContainerMobile';
import InfoContainerMobile from './InfoContainerMobile';
import VendorHeaderMobile from 'components/vendor/VendorHeaderMobile';
import selectVendorPage from './selectors';
import MobileTopNav from 'components/common/MobileTopNav';
import TabletTopNav from 'components/common/TabletTopNav';
import Loading from 'react-loading';
import { toJS, fromJS } from 'immutable';
import ConfirmationModal from 'components/vendor/ConfirmationModal';
import ConfirmationModalMobile from 'components/vendor/ConfirmationModalMobile';
import ErrorModal from 'components/vendor/ErrorModal';
import ErrorModalMobile from 'components/vendor/ErrorModalMobile';
import Snackbar from 'material-ui/Snackbar';
import StepperContainer from '../StepperContainer';
import StepperContainerMobile from '../StepperContainerMobile';
import StepperContainerTablet from '../StepperContainerTablet';


export class VendorPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 2,
    }
    this.handleBackToCategoryClick = this.handleBackToCategoryClick.bind(this)
    this.handleRemoveOrderSlipItem = this.handleRemoveOrderSlipItem.bind(this)
    this.handleOrderRequest = this.handleOrderRequest.bind(this);
    this.handlemockorder = this.handlemockorder.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleDelivery = this.handleDelivery.bind(this);
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  componentDidMount() {
    console.log('vendorPage rerendered')
    const currentLocation = window.location.pathname;
    const vendorId = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);
    this.props.createInitialOrderSlip(vendorId)
  }

  componentWillMount() {
    this.props.fetchVendor();
  }

  handleBackToCategoryClick(e) {
    e.preventDefault();
    this.props.goBack();
  }

  handleRemoveOrderSlipItem(e) {
    console.log(e.target.getAttribute('id'));
    const currentLocation = window.location.pathname;
    const vendorId = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);
    const productIndex = e.target.getAttribute('id');
    this.props.removeOrderSlipItem(productIndex, vendorId);
  }

  handleOrderRequest(e, notes) {
    console.log('createOrder clicked');
    const vendor = JSON.parse(e.target.getAttribute('data'));
    this.props.createOrder();
    this.props.clearOrderSlip(vendor._id);
    this.props.closeModal();
    this.props.clearSnackbar();
  }

  handleRedirect(url) {
    console.log('handling redirect')
    console.log(url)
    if (url === '') {
      this.props.openModal()
    } else {
      const nextPageUrl = window.location.pathname;
      this.props.moveLocation(`/${url}?next=${nextPageUrl}`)
    }
  }

  handlemockorder(e) {
    this.props.mockOrderSuccess();
  }

  handleNotes(e, note) {
    const productIndex = parseInt(e.target.getAttribute('id'));
    this.props.setProductNote(productIndex, note);
  }

  handleDelivery(e) {
    const payload = !this.props.isDeliveryAdded;
    this.props.addDelivery(payload);
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <NavWebContainer />
          <StepperContainer
            stepIndex={this.state.stepIndex}
            />
          <div style={{ marginTop: '3em' }}>
            <VendorHeader
              onBackClick={this.handleBackToCategoryClick}
              category={this.props.category}
            />
            <div className="container">
              <div className="row">
                <CatNavContainer setCategory={this.props.setCategory} />
                <ProductsContainer
                  vendor={this.props.vendor}
                  isFetchingVendor={this.props.isFetchingVendor}
                  setProductQuantity={this.props.setProductQuantity}
                  setProductType={this.props.setProductType}
                  setOrderSlip={this.props.setOrderSlip}
                  setSubtotal={this.props.setSubtotal}
                />
                <InfoContainer
                  removeOrderSlipItem={this.handleRemoveOrderSlipItem}
                  isFetchingVendor={this.props.isFetchingVendor}
                  vendor={this.props.vendor}
                  orderSlip={this.props.orderSlip}
                  handleRedirect={this.handleRedirect}
                  event={this.props.event}
                  closeModal={this.props.closeModal}
                  modalIsOpen={this.props.modalIsOpen}
                  openModal={this.props.openModal}
                  currentUser={this.props.currentUser}
                  isAuthenticated={this.props.isAuthenticated}
                  isPaymentSubmitted={this.props.isPaymentSubmitted}
                  setOrderSlip={this.props.setOrderSlip}
                  setProductQuantity={this.props.setProductQuantity}
                />
              </div>
            </div>
            <ConfirmationModal
              removeOrderSlipItem={this.handleRemoveOrderSlipItem}
              isOpen={this.props.modalIsOpen}
              orderSlip={this.props.orderSlip}
              vendor={this.props.vendor}
              closeModal={this.props.closeModal}
              createOrder={this.handleOrderRequest}
              handleNotes={this.handleNotes}
              handleDelivery={this.handleDelivery}
              isDeliveryAdded={this.props.isDeliveryAdded}
            />
            <ErrorModal
              closeErrorModal={this.props.closeErrorModal}
              errorModalIsOpen={this.props.errorModalIsOpen}
            />
            <Snackbar
               open={this.props.isShowingSnackbar}
               message="Order success!"
               autoHideDuration={4000}
             />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={481} maxWidth={767}>
          <TabletTopNav
            setOccasion={this.props.setOccasion}
            occasion={this.props.occasion}
            setDate={this.props.setDate}
            startDate={this.props.startDate}
            setZip={this.props.setZip}
            zipCode={this.props.zipCode}
          />
          <StepperContainerTablet
            stepIndex={this.state.stepIndex}
            />
          <div style={{ marginTop: '7%' }}>
            <InfoContainerMobile
              removeOrderSlipItem={this.handleRemoveOrderSlipItem}
              isFetchingVendor={this.props.isFetchingVendor}
              vendor={this.props.vendor}
              orderSlip={this.props.orderSlip}
              handleRedirect={this.handleRedirect}
              event={this.props.event}
              closeModal={this.props.closeModal}
              modalIsOpen={this.props.modalIsOpen}
              openModal={this.props.openModal}
              currentUser={this.props.currentUser}
              isAuthenticated={this.props.isAuthenticated}
              isPaymentSubmitted={this.props.isPaymentSubmitted}
              setOrderSlip={this.props.setOrderSlip}
              setProductQuantity={this.props.setProductQuantity}
            />
          </div>
          <ProductsContainerTablet
            vendor={this.props.vendor}
            isFetchingVendor={this.props.isFetchingVendor}
            setProductQuantity={this.props.setProductQuantity}
            setProductType={this.props.setProductType}
            setOrderSlip={this.props.setOrderSlip}
            setSubtotal={this.props.setSubtotal}
          />
          <ConfirmationModalMobile
            removeOrderSlipItem={this.handleRemoveOrderSlipItem}
            isOpen={this.props.modalIsOpen}
            orderSlip={this.props.orderSlip}
            vendor={this.props.vendor}
            closeModal={this.props.closeModal}
            createOrder={this.handleOrderRequest}
            handleNotes={this.handleNotes}
            handleDelivery={this.handleDelivery}
            isDeliveryAdded={this.props.isDeliveryAdded}
          />
          <ErrorModal
            closeErrorModal={this.props.closeErrorModal}
            errorModalIsOpen={this.props.errorModalIsOpen}
          />
          <Snackbar
             open={this.props.isShowingSnackbar}
             message="Order success!"
             autoHideDuration={4000}
           />
          <NavTablet
            onClick={this.handleMobileNav} />
        </MediaQuery>

        <MediaQuery maxWidth={480}>
          <MobileTopNav
            setOccasion={this.props.setOccasion}
            occasion={this.props.occasion}
            setDate={this.props.setDate}
            startDate={this.props.startDate}
            setZip={this.props.setZip}
            zipCode={this.props.zipCode}
          />
          <StepperContainerMobile
            stepIndex={this.state.stepIndex}
            />
          <div style={{ marginTop: '7%' }}>
            <InfoContainerMobile
              removeOrderSlipItem={this.handleRemoveOrderSlipItem}
              isFetchingVendor={this.props.isFetchingVendor}
              vendor={this.props.vendor}
              orderSlip={this.props.orderSlip}
              handleRedirect={this.handleRedirect}
              event={this.props.event}
              closeModal={this.props.closeModal}
              modalIsOpen={this.props.modalIsOpen}
              openModal={this.props.openModal}
              currentUser={this.props.currentUser}
              isAuthenticated={this.props.isAuthenticated}
              isPaymentSubmitted={this.props.isPaymentSubmitted}
              setOrderSlip={this.props.setOrderSlip}
              setProductQuantity={this.props.setProductQuantity}
            />
          </div>
          <ProductsContainerMobile
            vendor={this.props.vendor}
            isFetchingVendor={this.props.isFetchingVendor}
            setProductQuantity={this.props.setProductQuantity}
            setProductType={this.props.setProductType}
            setOrderSlip={this.props.setOrderSlip}
            setSubtotal={this.props.setSubtotal}
          />
          <ConfirmationModalMobile
            removeOrderSlipItem={this.handleRemoveOrderSlipItem}
            isOpen={this.props.modalIsOpen}
            orderSlip={this.props.orderSlip}
            vendor={this.props.vendor}
            closeModal={this.props.closeModal}
            createOrder={this.handleOrderRequest}
            handleNotes={this.handleNotes}
            handleDelivery={this.handleDelivery}
            isDeliveryAdded={this.props.isDeliveryAdded}
          />
          <ErrorModal
            closeErrorModal={this.props.closeErrorModal}
            errorModalIsOpen={this.props.errorModalIsOpen}
          />
          <Snackbar
             open={this.props.isShowingSnackbar}
             message="Order success!"
             autoHideDuration={4000}
           />
          <NavMobile
            onClick={this.handleMobileNav} />
        </MediaQuery>

      </div>
    );
  }
}

const mapStateToProps = selectVendorPage();

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actionCreators, dispatch),
    moveLocation: (url) => dispatch(push(url)),
    goBack: () => dispatch(goBack()),
    clearSnackbar: () => setTimeout(dispatch(clearSnackbar()), 2000),
  };
}

VendorPage.propTypes = {
  setLocation: React.PropTypes.func,
  setCategory: React.PropTypes.func,
  category: React.PropTypes.string,
  order: React.PropTypes.object,
  vendor: React.PropTypes.object,
  isFetchingVendor: React.PropTypes.bool,
  orderSlip: React.PropTypes.object,
  modalIsOpen: React.PropTypes.bool,
  event: React.PropTypes.object,
  fetchVendor: React.PropTypes.func,
  setProductQuantity: React.PropTypes.func,
  setProductType: React.PropTypes.func,
  setOrderSlip: React.PropTypes.func,
  removeOrderSlipItem: React.PropTypes.func,
  clearOrderSlip: React.PropTypes.func,
  openModal: React.PropTypes.func,
  closeModal: React.PropTypes.func,
  createOrder: React.PropTypes.func,
  setOrder: React.PropTypes.func,
  occasion: React.PropTypes.string,
  location: React.PropTypes.string,
  setOccasion: React.PropTypes.func,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  mockOrderSuccess: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorPage);

// <MediaQuery minWidth={768} maxWidth={1079}>
//   <NavWeb
//     links={[
//     { url: '/profile', name: 'Profile' },
//     { url: '/vendors', name: 'Find Vendors' },
//     { url: '/messages', name: 'Messages' },
//     { url: '/orders', name: 'Orders' }]}
//   />
//   <div style={{ marginTop: '3em' }}>
//     <VendorHeader
//       onBackClick={this.handleBackToCategoryClick}
//       category={this.props.category}
//     />
//   </div>
//   <div className="container">
//     <div className="row">
//       <ProductsContainerTab
//         vendor={this.props.vendor}
//         isFetchingVendor={this.props.isFetchingVendor}
//         setProductQuantity={this.props.setProductQuantity}
//         setProductType={this.props.setProductType}
//         setOrderSlip={this.props.setOrderSlip}
//       />
//       <InfoContainerTab
//         removeOrderSlipItem={this.handleRemoveOrderSlipItem}
//         isFetchingVendor={this.props.isFetchingVendor}
//         vendor={this.props.vendor}
//         orderSlip={this.props.orderSlip}
//         handleCreateEvent={this.handleCreateEvent}
//         event={this.props.event}
//         closeModal={this.props.closeModal}
//         modalIsOpen={this.props.modalIsOpen}
//         openModal={this.props.openModal}
//       />
//     </div>
//   </div>
//   <ConfirmationModal
//     removeOrderSlipItem={this.handleRemoveOrderSlipItem}
//     isOpen={this.props.modalIsOpen}
//     orderSlip={this.props.orderSlip}
//     vendor={this.props.vendor}
//     closeModal={this.props.closeModal}
//     createOrder={this.handleOrderRequest}
//   />
// </MediaQuery>
