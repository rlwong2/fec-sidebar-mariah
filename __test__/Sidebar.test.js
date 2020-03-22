//const app = require('../app.js');
import React from 'react';
import Sidebar from '../client/components/Sidebar.jsx';
import renderer from 'react-test-renderer';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

configure({adapter: new Adapter()});


// Test add new artist works
test('Four is not divisible by three', () => {
  expect( 4 % 3 !== 0).toBe(true);
});

// Test get requests from App
describe('Testing get requests from Sidebar App', () => {
  beforeall(() => {
    global.fetch = jest.fn();
    // global or window, whichever one works
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Sidebar />, {disableLifecycleMethods: true});
  });

  afterEach(() => {
    wrapper.unmount();
  });

  // Apply spy to componentwillmount

  const spyMount = jest.spyOn(Sidebar.prototype, 'componentWillMount');

  // // More complicated stuff for testing body of request.
  // fetch.mockImplementation(() => {
  //   return Promise.resolve({
  //     status: 200,
  //     json: () => {
  //       return Promise.resolve({

  //         artist: {
  //           info: 'placeholder'
  //         },
  //         likedsongs:
  //           ['song1', 'song2', 'song3']

  //       });
  //     }
  //   });
  // });

  // Call componentWillMount
  const didMount = wrapper.instance().componentWillMount;

  expect(spyMount).toHaveBeenCalled();


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
