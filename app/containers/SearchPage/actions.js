/*
 *
 * SearchPage actions
 *
 */

import {
  SET_LOCATION,
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
} from './constants';

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    location
  }
};

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
