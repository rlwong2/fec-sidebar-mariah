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
      artistName: '',

      links: [],
      about: [],
      follower_count: null,
      following_count: null,
      track_count: null,

      likedSongs: []
    };
  }

  // Reformat get data
  formatData(results, that) {
    // artist will be an object
    // results.artist will have artist bio, results.likedsongs will have an array of liked song data

    //convert paragraph into array of strings
    // var length = artist.data.about.length - 1;
    // artist.about = artist.data.about.substring(2, length - 2).split('\",\"')
    // artist.links = artist.data.links.split(' ');
    var artist = results.artist;
    console.log(artist.name);
    that.setState({
      track_count: artist.track_count,
      follower_count: artist.follower_count,
      following_count: artist.following_count,
      about: artist.about.split('. '),
      links: artist.links.split(' '),
      likedSongs: results.likedSongs
    });
  }

  // send get req when component renders/aka refresh
  // componentDidMount() {
  //   var that = this;
  //   axios.get('/artist')
  //     .then(function(results) {
  //       console.log(results)
  //       that.formatData(results.data, that);
  //     })
  //     .catch(function(err) {
  //       console.log('There was an error trying to get a random artist from the server.')
  //     });

  // }

  //send get req before component renders.
  componentWillMount() {
    // get req here
    var that = this;
    var name = 'Dedrick.Hauck';
    // axios.get(`/artist/?name=${name}`)
    axios.get(`/artist`)
      .then(function(results) {
        that.formatData(results.data, that);
        //convert paragraph into array of strings
        // var length = artist.data.about.length-1;
        // artist.data.about = artist.data.about.substring(2, length -2).split('\",\"')
        // artist.data.links = artist.data.links.split(' ');
        // that.setState(artist.data);
        //console.log(JSON.stringify(artist.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // Show artist info and follow button on click
  showArtistInfo(e) {

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
              likedSongs={this.state.likedSongs}
              showArtistInfo={this.showArtistInfo.bind(this)}
            />
          </div>
        </article>


      </div>
    );
  }
}



export default Sidebar;


// If else statement
// {
//   this.state.likedSongs.length === 0 ?
//   (<span>0</span>)
//   :
//   (<LikedSongs
//     likedSongs={this.state.likedSongs}
//   />)
// }