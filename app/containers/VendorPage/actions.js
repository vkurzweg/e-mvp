/*
 *
 * VendorPage actions
 *
 */

 import {
  SET_VENDOR,
  SET_VENDOR_CATEGORY,
  SET_VENDOR_KEY,
  FETCH_VENDOR,
  FETCH_VENDOR_SUCCESS,
  FETCH_VENDOR_FAILURE,
  SET_PRODUCT_QUANTITY,
  SET_PRODUCT_TYPE,
  SET_ORDER_SLIP,
  ADD_DELIVERY,
  CLEAR_DELIVERY,
  REMOVE_ORDER_SLIP_ITEM,
  CLEAR_ORDER_SLIP,
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  SET_ORDER,
  CLEAR_ORDER,
  SET_PRODUCT_NOTE,
  SHOW_SNACKBAR,
  CLEAR_SNACKBAR,
  CREATE_INITIAL_ORDER_SLIP,
 } from './constants';

export function setVendorCategory(category) {
  return {
    type: SET_VENDOR_CATEGORY,
    category,
  };
}

export function setVendorKey(key) {
  return {
    type: SET_VENDOR_KEY,
    key,
  };
}

export function setVendor(vendor) {
  return {
    type: SET_VENDOR,
    vendor,
  };
}

export function fetchVendor() {
  return {
    type: FETCH_VENDOR,
    payload: true,
  };
}

export function fetchVendorSuccess() {
  return {
    type: FETCH_VENDOR_SUCCESS,
    payload: false,
  };
}

export function fetchVendorFailure() {
  return {
    type: FETCH_VENDOR_FAILURE,
    payload: false,
  };
}

export function setProductQuantity(productIndex, quantity) {
  return {
    type: SET_PRODUCT_QUANTITY,
    productIndex,
    quantity,
  };
}

export function setProductType(productIndex, price) {
  return {
    type: SET_PRODUCT_TYPE,
    productIndex,
    price,
  };
}

export function setProductNote(productIndex, note) {
  return {
    type: SET_PRODUCT_NOTE,
    productIndex,
    note,
  };
}

export function setOrderSlip(productIndex, product, vendorId) {
  return {
    type: SET_ORDER_SLIP,
    productIndex,
    product,
    vendorId,
  };
}

export function addDelivery(payload) {
  return {
    type: ADD_DELIVERY,
    payload,
  }
}

export function clearDelivery() {
  return {
    type: CLEAR_DELIVERY,
    payload: false,
  }
}

export function removeOrderSlipItem(productIndex, vendorId) {
  return {
    type: REMOVE_ORDER_SLIP_ITEM,
    productIndex,
    vendorId,
  };
}

export function clearOrderSlip(vendorId) {
  return {
    type: CLEAR_ORDER_SLIP,
    vendorId,
  }
}

export function openModal() {
  return {
    type: OPEN_MODAL,
    payload: true,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    payload: false,
  };
}

export function openErrorModal() {
  return {
    type: OPEN_ERROR_MODAL,
    payload: true,
  };
}

export function closeErrorModal() {
  return {
    type: CLOSE_ERROR_MODAL,
    payload: false,
  };
}

export function createOrder(order) {
  return {
    type: CREATE_ORDER,
    payload: true,
    order,
  };
}

export function createOrderSuccess() {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: false,
  };
}

export function createOrderFailure() {
  return {
    type: CREATE_ORDER_FAILURE,
    payload: false,
    isCreateFailed: true,
  };
}

export function setOrder(currentOrder) {
  return {
    type: SET_ORDER,
    currentOrder,
  };
}

export function clearOrder() {
  return {
    type: CLEAR_ORDER,
  };
}

export function showSnackbar() {
  return {
    type: SHOW_SNACKBAR,
    payload: true,
  };
}

export function clearSnackbar() {
  return {
    type: CLEAR_SNACKBAR,
    payload: false,
  };
}

export function createInitialOrderSlip(vendorId) {
  return {
    type: CREATE_INITIAL_ORDER_SLIP,
    vendorId,
  }
}
