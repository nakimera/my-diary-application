import addEntryReducer from '../reducers/EntriesReducer';
import * as actions from '../actions/types';

const initialState = {
  entry: []
};

const payload = {
  title: 'My title',
  details: 'My details'
};

describe('add entry reducer', () => {
  it('should return the initial state', () => {
    expect(addEntryReducer(undefined, {})).toEqual({
      entry: []
    });
  });

  it('should handle ADD_ENTRY', () => {
    expect(
      addEntryReducer(initialState, {
        type: actions.ADD_ENTRY,
        payload: payload
      })
    ).toEqual({
      entry: {
        title: 'My title',
        details: 'My details'
      }
    });
  });

  it('should handle FETCH_ENTRIES', () => {
    const initialState = {
      entry: []
    };
    expect(
      addEntryReducer(initialState, {
        type: actions.FETCH_ENTRIES,
        payload: payload
      })
    ).toEqual({
      entry: {
        title: 'My title',
        details: 'My details'
      }
    });
  });

  it('should handle FETCH_ENTRY', () => {
    const initialState = {
      entry: []
    };
    expect(
      addEntryReducer(initialState, {
        type: actions.FETCH_ENTRY,
        payload: {
          title: 'My title',
          details: 'My details'
        }
      })
    ).toEqual({
      entry: {
        title: 'My title',
        details: 'My details'
      }
    });
  });
});
