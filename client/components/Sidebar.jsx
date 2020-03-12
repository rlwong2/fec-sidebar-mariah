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
    var that = this;

    axios.get(`/artist/?name=${name}`)
      .then(function(artist) {
        that.setState(artist);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // on click function to be added when I have time


  render() {
    return (
      <div id='sidebar-right' style="top: -401px;">

        <article id="stats">
          <span ><StatCounts followers={this.state.follower_count}/></span>
          <span ><StatCounts following={this.state.following_count}/></span>
          <span ><StatCounts tracks={this.state.track_count}/></span>
        </article>

        <article id="about">
          <About about={this.state.about}/>
        </article>

        <article id="links">
          <Links links={this.state.links}/>
        </article>
      </div>
    );
  }
}



export default Sidebar;