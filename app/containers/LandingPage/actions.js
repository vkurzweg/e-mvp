import {
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
  QUERY_ATTEMPT,
  QUERY_SUCCESS,
  QUERY_FAILURE,
  FETCH_FEATURED_VENDORS,
  FETCH_FEATURED_VENDORS_SUCCESS,
  FETCH_FEATURED_VENDORS_FAILURE,
} from './constants';

export function queryAttempt() {
  return {
    type: QUERY_ATTEMPT,
    payload: true,
  };
}

export function querySuccess(occasion, date, zip) {
  return {
    type: QUERY_SUCCESS,
    occasion,
    date,
    zip,
    payload: false,
  };
}

export function queryFailure() {
  return {
    type: QUERY_FAILURE,
    payload: false,
  }
}

export function setOccasion(occasion) {
  return {
    type: SET_OCCASION,
    occasion,
  };
}

export function setDate(date) {
  return {
    type: SET_DATE,
    date,
  };
}

export function setZip(zip) {
  return {
    type: SET_ZIP,
    zip,
  };
}

export function fetchFeaturedVendors() {
  return {
    type: FETCH_FEATURED_VENDORS,
  }
}

export function fetchFeaturedVendorsSuccess(vendors) {
  return {
    type: FETCH_FEATURED_VENDORS_SUCCESS,
    vendors,
  }
}

export function fetchFeaturedVendorsFailure() {
  return {
    type: FETCH_FEATURED_VENDORS_FAILURE,
  }
}

