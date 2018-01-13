import expect from 'expect';
import vendorOrdersPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('vendorOrdersPageReducer', () => {
  it('returns the initial state', () => {
    expect(vendorOrdersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
