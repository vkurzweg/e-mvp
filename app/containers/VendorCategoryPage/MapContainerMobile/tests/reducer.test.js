import expect from 'expect';
import mapContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('mapContainerReducer', () => {
  it('returns the initial state', () => {
    expect(mapContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
