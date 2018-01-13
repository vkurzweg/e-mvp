/*
 *
 * VendorCategoryPage actions
 *
 */

import {
  SET_LOCATION,
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
  SET_BUDGET_SLIDER,
  SET_VENDOR,
  SET_VENDORS,
  SET_VENDOR_CATEGORY,
  FETCH_VENDORS,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILURE,
  FETCH_VENDOR_ATTEMPT,
  FETCH_VENDOR_SUCCESS,
  FETCH_VENDOR_FAILURE,
  SET_VENDOR_KEY
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

export function fetchVendorAttempt() {
  return {
    type: FETCH_VENDOR_ATTEMPT,
    payload: true,
  };
}

export function fetchVendorSuccess(vendors) {
  return {
    type: FETCH_VENDOR_SUCCESS,
    vendors,
    payload: false,
  };
}

export function fetchVendorFailure() {
  return {
    type: FETCH_VENDOR_FAILURE,
    payload: false,
  };
}

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    location,
  };
}

export function setVendorCategory(category) {
  return {
    type: SET_VENDOR_CATEGORY,
    category,
  };
}

export function setVendor(vendor) {
  return {
    type: SET_VENDOR,
    vendor,
  };
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

export function setBudgetSlider(budgetValues) {
  return {
    type: SET_BUDGET_SLIDER,
    budgetValues,
  };
}

export function setVendors(vendors) {
  return {
    type: SET_VENDORS,
    vendors
  };
}


export function setVendorKey(key) {
  return {
    type: SET_VENDOR_KEY,
    key,
  };
}

