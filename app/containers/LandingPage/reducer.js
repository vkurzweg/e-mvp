
import { fromJS } from 'immutable';
import {
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
  FETCH_FEATURED_VENDORS,
  FETCH_FEATURED_VENDORS_SUCCESS,
  FETCH_FEATURED_VENDORS_FAILURE,
} from './constants';
import { loadState } from 'utils/LocalStorage';
import moment from 'moment';

// check local storage for old state
let oldState = {};
if (typeof loadState() === 'object') {
  oldState = loadState();
}
const appState = fromJS({
  ...oldState,
  selectValue: {},
  startDate: moment(),
  zipCode: '',
  isFetchingFeaturedVendors: false,
});

function landingPageReducer(state = appState, action) {
  switch (action.type) {
    case SET_OCCASION:
      return state.set('occasion', fromJS(action.occasion))
    case SET_DATE:
      return state.set('startDate', fromJS(action.date))
    case SET_ZIP:
      return state.set('zipCode', fromJS(action.zip))
    case FETCH_FEATURED_VENDORS:
      return state.set('isFetchingFeaturedVendors', fromJS(true))
    case FETCH_FEATURED_VENDORS_SUCCESS:
      return state.set('featuredVendors', fromJS(action.vendors))
                  .set('isFetchingFeaturedVendors', fromJS(false))
    case FETCH_FEATURED_VENDORS_FAILURE:
      return state.set('isFetchingFeaturedVendors', fromJS(false))
    default:
      return state;
  }
}

export default landingPageReducer;
