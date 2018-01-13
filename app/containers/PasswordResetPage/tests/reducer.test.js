import expect from 'expect';
import passwordResetPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('passwordResetPageReducer', () => {
  it('returns the initial state', () => {
    expect(passwordResetPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
