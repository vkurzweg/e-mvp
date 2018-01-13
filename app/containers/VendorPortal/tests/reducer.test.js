import expect from 'expect';
import vendorPortalReducer from '../reducer';
import { fromJS } from 'immutable';

describe('vendorPortalReducer', () => {
  it('returns the initial state', () => {
    expect(vendorPortalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
