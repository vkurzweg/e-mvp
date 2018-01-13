import expect from 'expect';
import eventPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('eventPageReducer', () => {
  it('returns the initial state', () => {
    expect(eventPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
