import expect from 'expect';
import vendorMapContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('vendorMapContainerReducer', () => {
  it('returns the initial state', () => {
    expect(vendorMapContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
