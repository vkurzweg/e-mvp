import { createSelector } from 'reselect';

/**
 * Direct selector to the catNavContainer state domain
 */
const selectCatNavContainerDomain = () => (state) => state.get('catNavContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CatNavContainer
 */

const selectCatNavContainer = () => createSelector(
  selectCatNavContainerDomain(),
  (substate) => substate.toJS()
);

export default selectCatNavContainer;
export {
  selectCatNavContainerDomain,
};
