import expect from 'expect';
import passwordResetFormReducer from '../reducer';
import { fromJS } from 'immutable';

describe('passwordResetFormReducer', () => {
  it('returns the initial state', () => {
    expect(passwordResetFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
