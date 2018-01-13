/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const LOAD_EVENT = 'app/LOAD_EVENT';
export const SET_EVENT = 'app/event/SET_EVENT';
export const LOAD_USER = 'app/LOAD_USER';
export const SET_USER = 'app/auth/SET_USER';
export const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
export const SET_PAYMENT = 'app/auth/SET_PAYMENT';
export const APP_LOADED = 'app/APP_LOADED';
export const LOGOUT = 'app/auth/LOGOUT';
export const LOGOUT_SUCCESS = 'app/auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'app/auth/LOGOUT_FAILURE';
