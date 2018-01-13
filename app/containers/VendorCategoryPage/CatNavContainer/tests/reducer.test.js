import expect from 'expect';
import catNavContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('catNavContainerReducer', () => {
  it('returns the initial state', () => {
    expect(catNavContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
