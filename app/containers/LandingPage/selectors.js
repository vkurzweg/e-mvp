import { createSelector } from 'reselect';
import moment from 'moment';

/**
 * Direct selector to the homePage state domain
 */

const selectSearchPageDomain = () => (state) => state.get('SearchPage');
const selectSearchDomain = () => (state) => state.get('search');
const selectLandingPageDomain = () => (state) => state.get('LandingPage');
const selectAppDomain = () => (state) => state.get('app');

const selectLandingPage = () => createSelector(
  [
    selectSearchPageDomain(),
    selectSearchDomain(),
    selectLandingPageDomain(),
    selectAppDomain()
  ],
  (sub1, sub2, sub3, sub4) => {
    const startDate = moment(sub2.get('startDate'))._d;
    const occasion = sub2.get('occasion');
    const zipCode = sub2.get('zipCode');
    const featuredVendors = sub3.get('featuredVendors')
    return {
      startDate,
      occasion,
      zipCode,
      featuredVendors
    }
  }
);

export default selectLandingPage;
