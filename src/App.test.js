import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PageNotFound from './views/notFound';


it('renders without crashing', () => {
  shallow(<App />)
});

it('renders page not found without crashing', () => {
  shallow(<PageNotFound />)
});
