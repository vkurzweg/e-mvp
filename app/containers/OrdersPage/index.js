/*
 *
 * OrdersPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import NavMobile from 'components/common/NavMobile';
import NavTablet from 'components/common/NavTablet';
import NavWebContainer from '../NavWebContainer';
import EventInfo from 'components/orders/EventInfo';
import EventInfoMobile from 'components/orders/EventInfoMobile';
import OrdersContainer from './OrdersContainer';
import OrdersContainerMobile from './OrdersContainerMobile';
import ProductsContainerMobile from './ProductsContainerMobile';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import TabletTopNavNoSearch from 'components/common/TabletTopNavNoSearch';
import { fetchOrders, setOrders, capturePayment, setOrder, deleteOrder, openModal, closeModal, setOrdersEvent, closeSuccessModal } from './actions';
import { selectOrdersPage, selectOrders, selectUser, selectProducts, selectEvent, selectUserEvents } from './selectors';
import EventConfirmationModal from 'components/orders/EventConfirmationModal';
import ConfirmationSuccessModal from 'components/orders/ConfirmationSuccessModal';
import ConfirmationSuccessModalMobile from 'components/orders/ConfirmationSuccessModalMobile';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { toJS } from 'immutable';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import Button from './Button';
import moment from 'moment';

export class OrdersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isContactShowing: false,
    }
    this.handleEventConfirm = this.handleEventConfirm.bind(this);
    this.handleDeleteOrder = this.handleDeleteOrder.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handlePastEventsToggle = this.handlePastEventsToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.handleContactVendor = this.handleContactVendor.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
    this.handleMobileNav = this.handleMobileNav.bind(this)
  }

  componentWillMount() {
    this.props.fetchOrders();
  }

  handleEventConfirm() {
    this.props.capturePayment();
  }

  handleDeleteOrder(e) {
    this.props.setOrder()
    const orderId = currentOrder._id
    this.props.deleteOrder(orderId);
  }

  showModal() {
    this.props.openModal();
  }

  handlePastEventsToggle() {
    this.setState({open: !this.state.open});
  }

  handlePastEventClick(event) {
    this.setState({open: false});
    this.props.setOrdersEvent(event)
  }

  handleClose() {
    this.setState({open: false});
  }

  handleCreateEvent() {
    if (this.props.successModalIsOpen) {
      this.props.closeSuccessModal();
    }
    browserHistory.push('/event');
  }

  handleContactVendor() {
    browserHistory.push('/messages');
  }

  toggleContact() {
    this.setState((prevState) => {
      return { isContactShowing: !prevState.isContactShowing };
    });
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Eventmakr - Event & Party Planning Orders"
          meta={[
            { name: 'description', content: 'Order from caterers, food trucks, florists, party rentals and other local vendors on Eventmakr, a new marketplace.' },
          ]}
        />

        <MediaQuery minWidth={768} >
          <div style={{ backgroundColor: '#E2E2E2'}}>
            <NavWebContainer />
            <div style={{ display: 'inline-block', position: 'absolute', cursor: 'pointer', marginTop: '4%', marginLeft: '14%' }} onClick={this.handlePastEventsToggle}>
              <p style={{ color: '#75B2DF', textDecoration: 'underline' }}>My Events</p>
            </div>
            <Drawer open={this.state.open}>
              <MenuItem onTouchTap={this.handleClose}>X</MenuItem>
              { this.props.userEvents.map((event, idx) => {
                    return (
                      <MenuItem
                        key={idx}
                        onTouchTap={this.handlePastEventClick.bind(this, event)}>
                        {event.get('occasion')} - {moment(event.get('date')).format('MM/DD/YYYY')}
                        </MenuItem>
                    )
              })}
            </Drawer>
            <EventInfo
              event={this.props.event}
              orders={this.props.orders}
              onCreateEvent={this.handleCreateEvent}
            />
            <OrdersContainer
              event={this.props.event}
              isFetchingOrders={this.props.isFetchingOrders}
              orders={this.props.event.orders}
              showModal={this.showModal}
              onContactVendor={this.handleContactVendor}
              toggleContact={this.toggleContact}
              isContactShowing={this.state.isContactShowing}
            />
            <EventConfirmationModal
              closeModal={this.props.closeModal}
              isOpen={this.props.modalIsOpen}
              onEventConfirm={this.handleEventConfirm}
              isCaptureFailed={this.props.isCaptureFailed}
            />
            <ConfirmationSuccessModal
              closeModal={this.props.closeSuccessModal}
              isOpen={this.props.successModalIsOpen}
              onCreateEvent={this.handleCreateEvent}
            />
            <Snackbar
               open={this.props.isShowingSnackbar}
               message="Payment success!"
               autoHideDuration={4000}
             />
           </div>
          </MediaQuery>

          <MediaQuery minWidth={481} maxWidth={767}>
            <TabletTopNavNoSearch />
            <div style={{ display: 'inline-block', position: 'absolute', cursor: 'pointer', marginTop: '9%', marginLeft: '16%' }} onClick={this.handlePastEventsToggle}>
              <p style={{ color: '#75B2DF', textDecoration: 'underline', fontSize: '12px' }}>My Events</p>
            </div>
            <Drawer open={this.state.open}>
              <MenuItem onTouchTap={this.handleClose}>X</MenuItem>
              { this.props.userEvents.map((event, idx) => {
                    return (
                      <MenuItem
                        key={idx}
                        onTouchTap={this.handlePastEventClick.bind(this, event)}>
                        {event.get('occasion')} - {moment(event.get('date')).format('MM/DD/YYYY')}
                        </MenuItem>
                    )
              })}
            </Drawer>
            <EventInfoMobile
              event={this.props.event}
              orders={this.props.orders}
              onCreateEvent={this.handleCreateEvent}
            />
            <OrdersContainerMobile
              event={this.props.event}
              isFetchingOrders={this.props.isFetchingOrders}
              orders={this.props.event.orders}
              showModal={this.showModal}
              onContactVendor={this.handleContactVendor}
              toggleContact={this.toggleContact}
              isContactShowing={this.state.isContactShowing}
              isCaptureFailed={this.props.isCaptureFailed}
            />
            <EventConfirmationModal
              closeModal={this.props.closeModal}
              isOpen={this.props.modalIsOpen}
              onEventConfirm={this.handleEventConfirm}
              isCaptureFailed={this.props.isCaptureFailed}
            />
            <ConfirmationSuccessModalMobile
              closeModal={this.props.closeSuccessModal}
              isOpen={this.props.successModalIsOpen}
              onCreateEvent={this.handleCreateEvent}
            />
            <Snackbar
               open={this.props.isShowingSnackbar}
               message="Payment success!"
               autoHideDuration={4000}
             />
            <NavTablet
             onClick={this.handleMobileNav}/>
          </MediaQuery>

          <MediaQuery maxWidth={480}>
            <MobileTopNavNoSearch />
            <div style={{ display: 'inline-block', position: 'absolute', cursor: 'pointer', marginTop: '9%', marginLeft: '16%' }} onClick={this.handlePastEventsToggle}>
              <p style={{ color: '#75B2DF', textDecoration: 'underline', fontSize: '12px' }}>My Events</p>
            </div>
            <Drawer open={this.state.open}>
              <MenuItem onTouchTap={this.handleClose}>X</MenuItem>
              { this.props.userEvents.map((event, idx) => {
                    return (
                      <MenuItem
                        key={idx}
                        onTouchTap={this.handlePastEventClick.bind(this, event)}>
                        {event.get('occasion')} - {moment(event.get('date')).format('MM/DD/YYYY')}
                        </MenuItem>
                    )
              })}
            </Drawer>
            <EventInfoMobile
              event={this.props.event}
              orders={this.props.orders}
              onCreateEvent={this.handleCreateEvent}
            />
            <OrdersContainerMobile
              event={this.props.event}
              isFetchingOrders={this.props.isFetchingOrders}
              orders={this.props.event.orders}
              showModal={this.showModal}
              onContactVendor={this.handleContactVendor}
              toggleContact={this.toggleContact}
              isContactShowing={this.state.isContactShowing}
              isCaptureFailed={this.props.isCaptureFailed}
            />
            <EventConfirmationModal
              closeModal={this.props.closeModal}
              isOpen={this.props.modalIsOpen}
              onEventConfirm={this.handleEventConfirm}
              isCaptureFailed={this.props.isCaptureFailed}
            />
            <ConfirmationSuccessModalMobile
              closeModal={this.props.closeSuccessModal}
              isOpen={this.props.successModalIsOpen}
              onCreateEvent={this.handleCreateEvent}
            />
            <Snackbar
               open={this.props.isShowingSnackbar}
               message="Payment success!"
               autoHideDuration={4000}
             />
            <NavMobile
             onClick={this.handleMobileNav}/>
          </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const ordersPageState = selectOrdersPage(state);
  const userEvents = selectUserEvents(state);
  const isFetchingOrders = ordersPageState.get('isFetchingOrders');
  const modalIsOpen = ordersPageState.get('modalIsOpen');
  const successModalIsOpen = ordersPageState.get('successModalIsOpen');
  const ordersState = selectOrders(state);
  const orders = ordersState.get('orders');
  (!!ordersPageState.get('event')) ? event = ordersPageState.get('event').toJS() : event = {orders:[], date:'', location:{address:'', city:''}, };
  const isCaptureFailed = ordersPageState.get('isCaptureFailed');
  return {
    isFetchingOrders,
    orders,
    event,
    modalIsOpen,
    successModalIsOpen,
    userEvents,
    isCaptureFailed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
    setOrders: (orders) => dispatch(setOrders(orders)),
    capturePayment: () => dispatch(capturePayment()),
    setOrder: (currentOrder) => dispatch(setOrder(currentOrder)),
    deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    closeSuccessModal: () => dispatch(closeSuccessModal()),
    setOrdersEvent: (event) => dispatch(setOrdersEvent(event)),
    moveLocation: (url) => dispatch(push(url)),
  };
}

OrdersPage.propTypes = {
  setOccasion: React.PropTypes.func,
  occasion: React.PropTypes.string,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  isFetchingOrders: React.PropTypes.bool,
  orders: React.PropTypes.array,
  fetchOrders: React.PropTypes.func,
  event: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);

// <MediaQuery maxWidth={767}>
//   <MobileTopNav
//     setOccasion={this.props.setOccasion}
//     occasion={this.props.occasion}
//     setDate={this.props.setDate}
//     startDate={this.props.startDate}
//     setZip={this.props.setZip}
//     zipCode={this.props.zipCode}
//   />
//   <EventInfoMobile />
//   <ProductsContainerMobile />
//   <NavMobile />
// </MediaQuery>
