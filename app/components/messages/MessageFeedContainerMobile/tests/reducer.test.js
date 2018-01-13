import expect from 'expect';
import messageFeedContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('messageFeedContainerReducer', () => {
  it('returns the initial state', () => {
    expect(messageFeedContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
