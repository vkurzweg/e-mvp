import expect from 'expect';
import navWebContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('navWebContainerReducer', () => {
  it('returns the initial state', () => {
    expect(navWebContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
