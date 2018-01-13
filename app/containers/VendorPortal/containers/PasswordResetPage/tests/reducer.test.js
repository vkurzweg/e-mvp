import expect from 'expect';
import passwordResetContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('passwordResetContainerReducer', () => {
  it('returns the initial state', () => {
    expect(passwordResetContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
