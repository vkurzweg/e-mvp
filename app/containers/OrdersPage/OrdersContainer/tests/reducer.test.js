import expect from 'expect';
import productsContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('productsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(productsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
