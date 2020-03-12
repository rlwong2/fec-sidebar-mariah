import React from 'react';


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
  }

  // change state values upon finishing get req


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