import expect from 'expect';
import vendorPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('vendorPageReducer', () => {
  it('returns the initial state', () => {
    expect(vendorPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
