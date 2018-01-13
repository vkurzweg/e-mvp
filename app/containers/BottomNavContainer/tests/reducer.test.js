import expect from 'expect';
import bottomNavContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('bottomNavContainerReducer', () => {
  it('returns the initial state', () => {
    expect(bottomNavContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
