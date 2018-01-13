import expect from 'expect';
import testingPageForDevReducer from '../reducer';
import { fromJS } from 'immutable';

describe('testingPageForDevReducer', () => {
  it('returns the initial state', () => {
    expect(testingPageForDevReducer(undefined, {})).toEqual(fromJS({}));
  });
});
