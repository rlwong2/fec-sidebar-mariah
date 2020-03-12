import React from 'react';
import axios from 'axios';
import StatCounts from './StatCounts.jsx';
import Links from './Links.jsx';
import About from './About.jsx';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      links: '',
      about: '',
      follower_count: null,
      following_count: null,
      track_count: null,
    };
  }

  // send get req before component renders.
  componentWillMount() {
    // get req here
    that = this;

    axios.get(`/artist/?name=${name}`)
      .then(function(artist) {
        that.setState(artist);
      })
      .throw(function(err) {
        console.log(err);
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