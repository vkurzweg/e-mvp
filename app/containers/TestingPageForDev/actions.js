/*
 *
 * TestingPageForDev actions
 *
 */

import {
  DEFAULT_ACTION,
  CREATE_ORDER_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createOrderSuccess() {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: false,
  };
}
