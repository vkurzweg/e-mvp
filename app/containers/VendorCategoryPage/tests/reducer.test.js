import expect from 'expect';
import vendorCategoryPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('vendorCategoryPageReducer', () => {
  it('returns the initial state', () => {
    expect(vendorCategoryPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
