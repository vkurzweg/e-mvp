import { createSelector } from 'reselect';

/**
 * Direct selector to the navWebContainer state domain
 */
const selectNavWebContainer = (state) => state.get('NavWebContainer');
const selectEvent = (state) => state.get('event');
const selectUser = (state) => state.get('auth');


/**
 * Other specific selectors
 */


/**
 * Default selector used by NavWebContainer
 */



export default selectNavWebContainer;
export {
  selectNavWebContainer,
  selectEvent,
  selectUser,
};
