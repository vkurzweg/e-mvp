import expect from 'expect';
import ordersPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('ordersPageReducer', () => {
  it('returns the initial state', () => {
    expect(ordersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
