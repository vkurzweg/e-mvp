import { createSelector } from 'reselect';

/**
 * Direct selector to the searchPage state domain
 */
const selectSearchPage = (state) => state.get('search');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchPage
 */

export default selectSearchPage;
