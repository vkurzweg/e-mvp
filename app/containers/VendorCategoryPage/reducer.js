/*
 *
 * VendorCategoryPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  SET_BUDGET_SLIDER,
  SET_VENDOR_CATEGORY
} from './constants';

const initialState = fromJS({
});

function vendorCategoryPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default vendorCategoryPageReducer;
