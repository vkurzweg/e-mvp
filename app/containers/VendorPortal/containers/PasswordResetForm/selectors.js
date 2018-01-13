import { createSelector } from 'reselect';

/**
 * Direct selector to the passwordResetForm state domain
 */
const selectPasswordResetFormDomain = () => (state) => state.get('PasswordResetForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PasswordResetForm
 */

const selectPasswordResetForm = () => createSelector(
  selectPasswordResetFormDomain(),
  (substate) => substate.toJS()
);

export default selectPasswordResetForm;
export {
  selectPasswordResetFormDomain,
};
