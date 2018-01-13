import expect from 'expect';
import signUpReducer from '../reducer';
import { fromJS } from 'immutable';

describe('signUpReducer', () => {
  it('returns the initial state', () => {
    expect(signUpReducer(undefined, {})).toEqual(fromJS({}));
  });
});
