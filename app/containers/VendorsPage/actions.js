import {
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
  SET_LOCATION,
  SET_VENDOR_CATEGORY,
  FETCH_VENDORS,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILURE,
  SET_VENDORS,
} from './constants';

export function fetchVendors() {
  return {
    type: FETCH_VENDORS,
    payload: true,
  };
}

export function fetchVendorsSuccess(vendors) {
  return {
    type: FETCH_VENDORS_SUCCESS,
    vendors,
    payload: false,
  };
}

export function fetchVendorsFailure() {
  return {
    type: FETCH_VENDORS_FAILURE,
    payload: false,
  };
}

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    location,
  };
}

export function setOccasion(occasion) {
  return {
    type: SET_OCCASION,
    occasion,
  };
}

export function setVendorCategory(category) {
  return {
    type: SET_VENDOR_CATEGORY,
    category,
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

export function setVendors(vendors) {
  return {
    type: SET_VENDORS,
    vendors
  }
}
