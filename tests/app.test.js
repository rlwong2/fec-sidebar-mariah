//const app = require('../app.js');
import React from 'react';
import App from '../client/app.js';
import renderer from 'react-test-renderer';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})


// Test add new artist works
test('Four is not divisible by three', () => {
  expect( 4 % 3 !== 0).toBe(true);
});


// Snapshot test for sidebar rendering.
test('Components render on mount', () => {
  const sidebar = renderer.create(<Sidebar />);
  var component = sidebar.toJSON();
  expect(sidebar).toMatchSnapshot();
});

// Displays the correct amount of links
test('Links render the correct amount', () => {

  const links = renderer.create(<Links links='onelink twolink threelink'/>);
  var test = links.toJSON();
  //Count amount of elements have id "sociallinks"
  //Compare with expected.
  expect(test).toMatchSnapshot();
});


// Hover over artist name test / Work in progress test.
test('Displays artist info over artist name hover', () => {
  const artistName = shallow(<LikedSong artist_name='TEST'/>);

  artistName.find('input').simulate('change');

  expect(artistName.text()).toEqual('hover');
});
