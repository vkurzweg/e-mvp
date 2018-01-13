import expect from 'expect';
import vendorContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('vendorContainerReducer', () => {
  it('returns the initial state', () => {
    expect(vendorContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
