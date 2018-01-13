import { createSelector } from 'reselect';
import moment from 'moment';

/**
 * Direct selector to the homePage state
 */

export const selectSearchDomain = () => (state) => state.get('search');
export const selectVendorsDomain = () => (state) => state.get('vendors');
export const selectVendorsPageDomain = () => (state) => state.get('VendorsPage');
export const selectEventDomain = () => (state) => state.get('event');

export const selectVendorsPage = () => createSelector(
  [
    selectSearchDomain(),
    selectVendorsDomain(),
    selectVendorsPageDomain(),
    selectEventDomain()
  ],
  (searchState, vendorsState, vendorsPageState, eventState) => {
    const startDate = moment(searchState.get('startDate'))._d;
    const occasion = searchState.get('occasion');
    const zipCode = searchState.get('zipCode');
    let vendorsNum = 0;
    if (vendorsPageState.get('vendors') && vendorsPageState.get('vendors').length > 0) vendorsNum = vendorsPageState.get('vendors').length;
    const isFetchingVendors = vendorsPageState.get('isFetchingVendors');
    const currentEvent = eventState.get('event')
    return {
      occasion,
      startDate,
      zipCode,
      vendorsNum,
      isFetchingVendors,
      currentEvent,
    }
  }
);

export default selectVendorsPage;
