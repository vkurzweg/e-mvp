import { createSelector } from 'reselect';

/**
 * Direct selector to the profilePage state domain
 */
const selectProfilePage = (state) => state.get('ProfilePage');
const selectUser = (state) => state.get('auth');
/**
 * Other specific selectors
 */


// *
//  * Default selector used by ProfilePage




export {
  selectProfilePage,
  selectUser,
};
