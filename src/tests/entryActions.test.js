import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as global from '../global';
import * as actions from '../actions/types';
import addEntry from '../actions/addEntry';
import getEntries from '../actions/fetchEntries';
import fetchEntry from '../actions/fetchEntry'

const mockStore = configureStore([thunk]);
const store = mockStore();
const payload = {
  status: 201
};
const addEntryUrl = global.baseUrl + 'entries';
const viewEntryUrl = global.baseUrl + 'entries/1';
const expectedData = {
  title: 'This is a title',
  details: 'These are the details'
};

const responseData = {
    payload: []
  };

describe('entry actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('creates a new entry', () => {
    const responseData = {
      payload: []
    };
    fetchMock.post(addEntryUrl, responseData);

    const expectedActions = [
      { payload: { payload: payload }, type: actions.ADD_ENTRY }
    ];
    store.dispatch(addEntry(expectedData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('gets all entries', () => {
    fetchMock.get(addEntryUrl, responseData);

    const expectedActions = [
      {
        payload: payload,
        type: actions.FETCH_ENTRIES,
      }
    ];
    store.dispatch(getEntries()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })

  it('gets a single entry', () => {
    fetchMock.get(viewEntryUrl, responseData);
    const expectedActions = [
        {
          payload: payload,
          type: actions.FETCH_ENTRY,
        }
      ];
      store.dispatch(fetchEntry(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  })
});
