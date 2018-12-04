import { shallow, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import AddArticleButton from '../components/entries/addArticleButton';
import ViewEntry from '../components/entries/singleEntry';
import AddEntry from '../components/entries/addEntry';
import HomePage from '../components/entries/homePage';
import store from '../store';

it('renders add entry button without fail', () => {
  shallow(<AddArticleButton />);
});

describe('view entry component', () => {
  const props = {
    fetchEntry: jest.fn()
  };
  it('renders view entry component without fail', () => {
    mount(
      <MemoryRouter>
        <Provider store={store}>
          <ViewEntry match={{ params: { id: 1 } }} {...props} />
        </Provider>
      </MemoryRouter>
    );
  });
});

it('renders view entry component without fail', () => {
  mount(
    <MemoryRouter>
      <Provider store={store}>
        <AddEntry />
      </Provider>
    </MemoryRouter>
  );
});

it('renders homepage component without fail', () => {
  mount(
    <MemoryRouter>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </MemoryRouter>
  );
});
