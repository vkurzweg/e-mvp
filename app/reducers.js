/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
  SET_BUDGET_SLIDER,
  SET_VENDOR_CATEGORY,
  SET_VENDORS,
  SET_VENDOR_KEY,
  FETCH_VENDORS,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILURE,
  FETCH_FEATURED_VENDORS,
  FETCH_FEATURED_VENDORS_SUCCESS,
  FETCH_FEATURED_VENDORS_FAILURE,
  SET_VENDOR,
  FETCH_VENDOR,
  FETCH_VENDOR_SUCCESS,
  FETCH_VENDOR_FAILURE,
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  SET_ORDER,
  CLEAR_ORDER,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  SET_ORDERS,
  ADD_DELIVERY,
  DELETE_ORDER,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  SET_EVENT,
  FB_LOGIN_ATTEMPT,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAILURE,
  SET_USER,
  SET_USER_TOKEN,
  SET_PAYMENT,
  UNSET_PAYMENT,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SUBMIT_PAYMENT,
  SUBMIT_PAYMENT_SUCCESS,
  SUBMIT_PAYMENT_FAILURE,
  APP_LOADED,
  VENDOR_LOGOUT,
  VENDOR_LOGOUT_SUCCESS,
  VENDOR_LOGOUT_FAILURE,
  CLEAR_CURRENT_EVENT,
} from './constants';
import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE } from 'containers/LoginPage/constants';
import { VENDOR_LOGIN_ATTEMPT, VENDOR_LOGIN_SUCCESS, VENDOR_LOGIN_FAILURE } from 'containers/VendorPortal/containers/LoginPage/constants';
import { SET_HOSTNAME, SET_ADDRESS, SET_CITY, SET_EVENTSTATE } from 'containers/EventPage/constants';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import moment from 'moment';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */

 // TODO: refactor reducers into separate file
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const appInitialState = fromJS({
  isAppLoaded: false,
})

function appReducer(state = appInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case APP_LOADED:
      return state.set('isAppLoaded', fromJS(action.payload))
    default:
      return state;
  }
}

const searchInitialState = fromJS({
  occasion: '',
  startDate: moment(),
  zipCode: '',
  category: '',
  budget: {min: 1, max: 4},
});;

function searchReducer(state = searchInitialState, action) {
  switch (action.type) {
    case SET_OCCASION:
      return state.set('occasion', fromJS(action.occasion))
    case SET_DATE:
      return state.set('startDate', fromJS(action.date))
    case SET_ZIP:
      return state.set('zipCode', fromJS(action.zip))
    case SET_VENDOR_CATEGORY:
      return state.set('category', fromJS(action.category));
    case SET_BUDGET_SLIDER:
      return state.set('budget', fromJS(action.budgetValues));
    default:
      return state;
  }
}

const authInitialState = fromJS({
  isLoggingIn: false,
  isLoggingOut: false,
  currentUser: {},
  isSubmittingPayment: false,
  isPaymentSubmitted: false,
  isAuthenticated: false,
  isLoginFailed: false,
  isPaymentFailed: false,
});

function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return state.set('isLoggingIn', fromJS(action.payload))
    case LOGIN_SUCCESS:
      return state.set('currentUser', fromJS(action.user))
                  .set('isAuthenticated', fromJS(action.isAuthenticated))
                  .set('isLoggingIn', fromJS(action.payload));
    case LOGIN_FAILURE:
      return state.set('isLoggingIn', fromJS(action.payload))
                  .set('isAuthenticated', fromJS(action.isAuthenticated))
                  .set('isLoginFailed', fromJS(action.isLoginFailed));
    case FB_LOGIN_ATTEMPT:
      return state.set('isLoggingIn', fromJS(action.payload))
    case FB_LOGIN_SUCCESS:
      return state.set('currentUser', fromJS(action.user))
                  .set('isAuthenticated', fromJS(true))
                  .set('isLoggingIn', fromJS(action.payload));
    case FB_LOGIN_FAILURE:
      return state.set('isLoggingIn', fromJS(action.payload))
                  .set('isAuthenticated', fromJS(false))
                  .set('isLoginFailed', fromJS(action.isLoginFailed));
    case SET_USER:
      return state.set('currentUser', fromJS(action.user))
                  .set('isAuthenticated', fromJS(true));
    case SET_USER_TOKEN:
      return state.setIn(['currentUser', 'customer_id'], fromJS(action.token));
    case SUBMIT_PAYMENT:
      return state.set('token', fromJS(action.token))
                  .set('isSubmittingPayment', fromJS(action.payload));
    case SUBMIT_PAYMENT_SUCCESS:
      return state.set('isSubmittingPayment', fromJS(action.payload));
    case SUBMIT_PAYMENT_FAILURE:
      return state.set('isSubmittingPayment', fromJS(action.payload))
                  .set('isPaymentFailed', fromJS(action.isPaymentFailed));
    case SET_PAYMENT:
      return state.set('isPaymentSubmitted', fromJS(action.payload));
    case UNSET_PAYMENT:
      return state.set('isPaymentSubmitted', fromJS(action.isPaymentSubmitted));
    case LOGOUT:
      return state.set('isLoggingOut', fromJS(action.payload));
    case LOGOUT_SUCCESS:
      return state.set('currentUser', fromJS({}))
                  .set('isLoggingOut', fromJS(action.payload))
                  .set('isAuthenticated', fromJS(false))
                  .set('isSubmittingPayment', fromJS(false))
                  .set('isLoggingIn', fromJS(false))
                  .set('isLoggingOut', fromJS(false))
                  .set('isPaymentSubmitted', fromJS(false));
    case LOGOUT_FAILURE:
      return state.set('isLoggingOut', fromJS(action.payload))
    default:
      return state;
  }
}

const vendorAuthInitialState = fromJS({
  isLoggingIn: false,
  isLoggingOut: false,
  currentVendor: {},
  isLoginFailed: false,
});

function vendorAuthReducer(state = vendorAuthInitialState, action) {
  switch (action.type) {
    case VENDOR_LOGIN_ATTEMPT:
      return state.set('isLoggingIn', fromJS(action.payload))
    case VENDOR_LOGIN_SUCCESS:
      state.set('isLoggingIn', fromJS(action.payload));
      return state.set('currentVendor', fromJS(action.user));
    case VENDOR_LOGIN_FAILURE:
      return state.set('isLoggingIn', fromJS(action.payload))
                  .set('isLoginFailed', fromJS(action.isLoginFailed));
    case VENDOR_LOGOUT:
      return state.set('isLoggingOut', fromJS(action.payload));
    case VENDOR_LOGOUT_SUCCESS:
      return state.set('currentVendor', fromJS({}))
                  .set('isLoggingOut', fromJS(false));
    case VENDOR_LOGOUT_FAILURE:
      return state.set('isLoggingOut', fromJS(action.payload))
    default:
      return state;
  }
}

const vendorsInitialState = fromJS({
  vendors: [],
  key: 0,
  isFetchingVendors: false,
  isFetchingVendor: false,
})

function vendorsReducer(state = vendorsInitialState, action) {
  switch (action.type) {
    case SET_VENDORS:
      return state.set('vendors', action.vendors);
    case SET_VENDOR_KEY:
      return state.set('key', action.key);
    case FETCH_VENDORS:
      return state.set('isFetchingVendors', fromJS(action.payload));
    case FETCH_VENDORS_SUCCESS:
      return state.set('vendors', action.vendors)
                  .set('isFetchingVendors', fromJS(action.payload));
    case FETCH_VENDORS_FAILURE:
      return state.set('isFetchingVendors', fromJS(action.payload));
    case SET_VENDOR:
      return state.set('currentVendor', action.vendor);
    case FETCH_VENDOR:
      return state.set('isFetchingVendor', action.payload);
    case FETCH_VENDOR_SUCCESS:
      return state.set('isFetchingVendor', action.payload);
    case FETCH_VENDOR_FAILURE:
      return state.set('isFetchingVendor', action.payload);
    default:
      return state;
  }
}

const ordersInitialState = fromJS({
  orders: [],
  currentOrder: {},
  isCreatingOrder: false,
  isFetchingOrders: false,
  isDeletingOrder: false,
  isDeliveryAdded: false,
  isCreateFailed: false,
});

function ordersReducer(state = ordersInitialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return state.set('orders', action.orders);
    case CREATE_ORDER:
      return state.set('currentOrder', fromJS(action.order));
    case CREATE_ORDER_SUCCESS:
      return state.set('isCreatingOrder', fromJS(action.payload));
    case CREATE_ORDER_FAILURE:
      return state.set('isCreatingOrder', fromJS(action.payload))
                  .set('isCreateFailed', fromJS(action.isCreateFailed));
    case SET_ORDER:
      return state.set('currentOrder', action.currentOrder);
    case CLEAR_ORDER:
      return state.delete('currentOrder');
    case FETCH_ORDERS:
      return state.set('isFetchingOrders', fromJS(action.payload));
    case FETCH_ORDERS_SUCCESS:
      return state.set('isFetchingOrders', fromJS(action.payload));
    case FETCH_ORDERS_FAILURE:
      return state.set('isFetchingOrders', fromJS(action.payload));
    case DELETE_ORDER:
      state.set('isDeletingOrder', fromJS(action.payload));
      return state.delete('orderId');
    case DELETE_ORDER_SUCCESS:
      return state.set('isDeletingOrder', fromJS(action.payload));
    case DELETE_ORDER_FAILURE:
      return state.set('isDeletingOrder', fromJS(action.payload));
    case ADD_DELIVERY:
      return state.set('isDeliveryAdded', fromJS(action.payload));
    default:
      return state;
  }
}

const eventInitialState = fromJS({
  event: null,
  isCreatingEvent: false,
  occasion: '',
  startDate: '',
  zipCode: '',
  hostName: '',
  address: '',
  city: '',
  eventLocState: '',
  orders: [],
  isCreateFailed: false,
});

function eventReducer(state = eventInitialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return state.set('isCreatingEvent', fromJS(action.payload));
    case CREATE_EVENT_SUCCESS:
      return state.set('isCreatingEvent', fromJS(action.payload));
    case CREATE_EVENT_FAILURE:
      return state.set('isCreatingEvent', fromJS(action.payload))
                  .set('isCreateFailed', fromJS(action.isCreateFailed));
    case SET_EVENT:
      return state.set('event', action.event);
    case SET_HOSTNAME:
      return state.set('hostName', fromJS(action.hostName));
    case SET_OCCASION:
      return state.set('occasion', fromJS(action.occasion));
    case SET_DATE:
      return state.set('startDate', fromJS(action.date));
    case SET_ADDRESS:
      return state.set('address', fromJS(action.address));
    case SET_CITY:
      return state.set('city', fromJS(action.city));
    case SET_EVENTSTATE:
      return state.set('eventLocState', fromJS(action.eventLocState));
    case SET_ZIP:
      return state.set('zipCode', fromJS(action.zip));
    case CLEAR_CURRENT_EVENT:
      return state.set('event', null);
    default:
      return state;
  }
}


/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    app: appReducer,
    route: routeReducer,
    auth: authReducer,
    language: languageProviderReducer,
    search: searchReducer,
    vendors: vendorsReducer,
    orders: ordersReducer,
    vendorAuth: vendorAuthReducer,
    event: eventReducer,
    ...asyncReducers,
  });
}
