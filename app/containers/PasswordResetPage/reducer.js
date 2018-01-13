/*
 *
 * PasswordResetPage reducer
 *
 */

 import { fromJS } from 'immutable';
 import {
   RESET_REQUEST,
   RESET_REQUEST_SUCCESS,
   RESET_REQUEST_FAILURE,
 } from './constants';

 const initialState = fromJS({
   isRequestingReset: false,
 });

 function passwordResetPageReducer(state = initialState, action) {
   switch (action.type) {
     case RESET_REQUEST:
       return state.set('isRequestingReset', fromJS(action.payload));
     case RESET_REQUEST_SUCCESS:
       return state.set('isRequestingReset', fromJS(action.payload));
     case RESET_REQUEST_FAILURE:
       return state.set('isRequestingReset', fromJS(action.payload));
     default:
       return state;
   }
 }

 export default passwordResetPageReducer;
