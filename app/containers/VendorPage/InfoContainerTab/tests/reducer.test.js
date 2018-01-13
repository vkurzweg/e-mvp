import expect from 'expect';
import infoContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('infoContainerReducer', () => {
  it('returns the initial state', () => {
    expect(infoContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
