/*
 *
 * PasswordResetPage actions
 *
 */

 import {
   RESET_REQUEST,
   RESET_REQUEST_SUCCESS,
   RESET_REQUEST_FAILURE,
 } from './constants';

 export function resetRequest() {
   return {
     type: RESET_REQUEST,
     payload: true,
   };
 }

 export function resetRequestSuccess() {
   return {
     type: RESET_REQUEST_SUCCESS,
     payload: false,
   };
 }

 export function resetRequestFailure() {
   return {
     type: RESET_REQUEST_FAILURE,
     payload: false,
   };
 }
