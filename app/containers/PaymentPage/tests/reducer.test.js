import expect from 'expect';
import paymentPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('paymentPageReducer', () => {
  it('returns the initial state', () => {
    expect(paymentPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
