import React from 'react';
import { shallow } from 'enzyme';
import UserHomePage from '../views/homePage';
import UserEntry from '../views/addEntry';
import Entry from '../views/singleEntry';

it('should render homepage view without fail', () => {
    shallow(<UserHomePage />)
});

it('add entry view renders without crashing', () => {
    shallow(<UserEntry />);
});

it('view single entry renders without crashing', () => {
    shallow(<Entry />);
});
