import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StatCounts from './StatCounts.jsx';
import Links from './Links.jsx';
import About from './About.jsx';
import LikedSongs from './LikedSongs.jsx';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      links: [],
      about: [],
      follower_count: null,
      following_count: null,
      track_count: null,
    };
  }

  // send get req before component renders.
  componentWillMount() {
    // get req here
    var that = this;
    var name = 'Dedrick.Hauck';

    axios.get(`/artist/?name=${name}`)
      .then(function(artist) {
        //convert paragraph into array of strings
        var length = artist.data.about.length-1;
        artist.data.about = artist.data.about.substring(2, length -2).split('\",\"')
        artist.data.links = artist.data.links.split(' ');
        that.setState(artist.data);
        //console.log(JSON.stringify(artist.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  }




  render() {
    return (
      <div id='sidebar-right' style={{top: '401px'}}>

        <article id="stats">
          <table id="links">
            <tbody>
              <tr>

                <StatCounts statTitle='followers' statNum={this.state.follower_count} />
                <StatCounts statTitle='following' statNum={this.state.following_count} />
                <StatCounts statTitle='tracks' statNum={this.state.track_count} />
              </tr>

            </tbody>
          </table>
        </article>

        <article>
          <div id="about">
            <About about={this.state.about}/>
          </div>
        </article>
        <article>
          <div id="weblinks">
            <Links
              links={this.state.links}
            />
          </div>
        </article>
        <article>
          <div id="likedsongs">
            <LikedSongs
              likedSongs={this.state.track_count}
            />
          </div>
        </article>


      </div>
    );
  }
}



export default Sidebar;