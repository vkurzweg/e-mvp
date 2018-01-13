import { createSelector } from 'reselect';
/**
 * Direct selector to the homePage state domain
 */
const selectLoginPage = (state) => state.get('LoginPage');
const selectSearch = (state) => state.get('search');
const selectUser = (state) => state.get('auth');

export {
  selectLoginPage,
  selectUser,
  selectSearch,
}
