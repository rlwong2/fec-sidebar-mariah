import React from 'react';
import request from 'request';
import StatCounts from './StatCounts.jsx';
import Links from './Links.jsx';
import About from './About.jsx';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      links: '',
      about: '',
      followers: null,
      following: null,
      tracks: null,
    };
  }

  // send get req before component renders.
  componentWillMount() {
    // get req here
    that = this;

    request
      // If continuing to use request then url is going to be the parameter.
      .get('/artist')
      .on('response', function(artist) {
        // add the values to the state
        that.setState(artist, function() { console.log('State has been changed!')};);
      });
  }

  // on click function to be added when I have time


  render() {
    return (
      <div id='sidebar-right' style="top: -401px;">

        <article id="stats">
          <span ><StatCounts followers={followers}/></span>
          <span ><StatCounts following={following}/></span>
          <span ><StatCounts tracks={tracks}/></span>
        </article>

        <article id="about">
          <About about={about}/>
        </article>

        <article id="links">
          <Links links={links}/>
        </article>
      </div>
    );
  }
}



export default Sidebar;