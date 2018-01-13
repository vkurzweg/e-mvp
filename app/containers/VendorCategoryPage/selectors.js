import { createSelector } from 'reselect';
import moment from 'moment';


/**
 * Direct selector to the vendorCategoryPage state domain
 */

export const selectVendorCategoryPageDomain = () => (state) => state.get('VendorCategoryPage');

/**
 * Other specific selectors
 */

export const selectSearchDomain = () => (state) => state.get('search');
export const selectSearchPageDomain = () => (state) => state.get('SearchPage');
export const selectVendorsDomain = () => (state) => state.get('vendors');
export const selectVendorPageDomain = () => (state) => state.get('VendorPage');
export const selectVendorsPageDomain = () => (state) => state.get('VendorsPage');

/**
 * Default selector used by VendorCategoryPage
 */

 export const selectVendorCategoryPage = () => createSelector(
  [
    selectSearchDomain(),
    selectVendorsDomain(),
  ],
  (searchState, vendorsState) => {
    const vendors = vendorsState.get('vendors');
    const startDate = moment(searchState.get('startDate'))._d;
    const occasion = searchState.get('occasion');
    const zipCode = searchState.get('zipCode');
    const category = searchState.get('category');
    const budgetValues = {
      min: searchState.get('budget').get('min'),
      max: searchState.get('budget').get('max'),
    };
    const isFetchingVendors = vendorsState.get('isFetchingVendors');
    return {
      vendors,
      occasion,
      startDate,
      zipCode,
      budgetValues,
      category,
      isFetchingVendors,
    };
  }
);


export default selectVendorCategoryPage;
