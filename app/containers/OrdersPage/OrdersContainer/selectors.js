import { createSelector } from 'reselect';

/**
 * Direct selector to the productsContainer state domain
 */
const selectProductsContainerDomain = () => (state) => state.get('productsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductsContainer
 */

const selectProductsContainer = () => createSelector(
  selectProductsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectProductsContainer;
export {
  selectProductsContainerDomain,
};
