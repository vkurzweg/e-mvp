import { createSelector } from 'reselect';

/**
 * Direct selector to the infoContainer state domain
 */
const selectInfoContainerDomain = () => (state) => state.get('infoContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by InfoContainer
 */

const selectInfoContainer = () => createSelector(
  selectInfoContainerDomain(),
  (substate) => substate.toJS()
);

export default selectInfoContainer;
export {
  selectInfoContainerDomain,
};
