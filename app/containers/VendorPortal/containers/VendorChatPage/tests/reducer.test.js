import expect from 'expect';
import vendorChatPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('vendorChatPageReducer', () => {
  it('returns the initial state', () => {
    expect(vendorChatPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
