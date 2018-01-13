import { createSelector } from 'reselect';

/**
 * Direct selector to the passwordResetPage state domain
 */
const selectPasswordResetPageDomain = () => (state) => state.get('passwordResetPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PasswordResetPage
 */

const selectPasswordResetPage = () => createSelector(
  selectPasswordResetPageDomain(),
  (substate) => substate.toJS()
);

export default selectPasswordResetPage;
export {
  selectPasswordResetPageDomain,
};
