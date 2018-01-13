import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

/**
 * Direct selector to the vendorPage state domain
 */

export const selectVendorPageDomain = () => (state) => state.get('VendorPage');

/**
 * Other specific selectors
 */
 export const selectVendorsDomain = () => (state) => state.get('vendors');
 export const selectVendorCategoryPageDomain = () => (state) => state.get('VendorCategoryPage');
 export const selectSearchDomain = () => (state) => state.get('search');
 export const selectOrdersDomain = () => (state) => state.get('orders');
 export const selectUserDomain = () => (state) => state.get('auth');
 export const selectEventDomain = () => (state) => state.get('event');


/**
 * Default selector used by VendorPage
 */

 export const selectVendorPage = () => createSelector(
   [
     selectVendorPageDomain(),
     selectVendorsDomain(),
     selectSearchDomain(),
     selectOrdersDomain(),
     selectUserDomain(),
     selectEventDomain(),
   ],
   (vendorPageState, vendorsState, searchState, ordersState, userState, eventState) => {
     const orderPrices = vendorPageState.get('orderSlipPrices');
     const orderQuants = vendorPageState.get('orderSlipQuants');
     const currentLocation = window.location.pathname;
     const vendorId = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);
     let orderSlip;
     const modalIsOpen = vendorPageState.get('modalIsOpen');
     const errorModalIsOpen = vendorPageState.get('errorModalIsOpen');
     const isShowingSnackbar = vendorPageState.get('isShowingSnackbar');
     (!vendorPageState.get(vendorId)) ? orderSlip = fromJS([]) : orderSlip = vendorPageState.get(vendorId).get('orderSlip');

     const vendors = vendorsState.get('vendors');
     const key = vendorsState.get('key');
     const vendor = vendorsState.get('currentVendor');
     // (!vendorsState.get('currentVendor')) ? vendor = { products: [] } : vendor = vendorsState.get('currentVendor');
     const isFetchingVendor = vendorsState.get('isFetchingVendor');

     const occasion = searchState.get('occasion');
     const zipCode = searchState.get('zipCode');
     const category = searchState.get('category');

     const order = ordersState.get('currentOrder');
     const isDeliveryAdded = ordersState.get('isDeliveryAdded');

     const currentUser = userState.get('currentUser');
     const isAuthenticated = userState.get('isAuthenticated');
     const isPaymentSubmitted = userState.get('isPaymentSubmitted');

     const currentEvent = eventState.get('event')
     return {
       order,
       vendor,
       isFetchingVendor,
       orderSlip,
       category,
       modalIsOpen,
       errorModalIsOpen,
       event,
       currentUser,
       isAuthenticated,
       isPaymentSubmitted,
       isDeliveryAdded,
       isShowingSnackbar,
     };
   }
 );


export default selectVendorPage;


