import expect from 'expect';
import orderContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('orderContainerReducer', () => {
  it('returns the initial state', () => {
    expect(orderContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
