import { createSelector } from 'reselect';

/**
 * Direct selector to the bottomNavContainer state domain
 */
const selectBottomNavContainerDomain = () => (state) => state.get('bottomNavContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BottomNavContainer
 */

const selectBottomNavContainer = () => createSelector(
  selectBottomNavContainerDomain(),
  (substate) => substate.toJS()
);

export default selectBottomNavContainer;
export {
  selectBottomNavContainerDomain,
};
