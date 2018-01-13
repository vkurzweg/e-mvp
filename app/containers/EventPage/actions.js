/*
 *
 * EventPage actions
 *
 */

import {
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  SET_EVENT,
  SET_HOSTNAME,
  SET_ADDRESS,
  SET_CITY,
  SET_EVENTSTATE,
} from './constants';

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

export function setHostName(hostName) {
  return {
    type: SET_HOSTNAME,
    hostName,
  };
}

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address,
  };
}

export function setCity(city) {
  return {
    type: SET_CITY,
    city,
  };
}

export function setEventState(eventLocState) {
  return {
    type: SET_EVENTSTATE,
    eventLocState,
  };
}

export function createEvent() {
  return {
    type: CREATE_EVENT,
    payload: true,
  };
}

export function createEventSuccess() {
  return {
    type: CREATE_EVENT_SUCCESS,
    payload: false,
  };
}

export function createEventFailure() {
  return {
    type: CREATE_EVENT_FAILURE,
    payload: false,
    isCreateFailed: true,
  }
}

export function setEvent(event) {
  return {
    type: SET_EVENT,
    event,
  }
}
