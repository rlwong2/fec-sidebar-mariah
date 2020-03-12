import React from 'react';
import ReactDOM from 'react-dom';
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
    var name = 'Dedrick.Hauck'

    axios.get(`/artist/?name=${name}`)
      .then(function(artist) {
        that.setState(artist.data);
        console.log(JSON.stringify(artist.data));
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // on click function to be added when I have time


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
{/*
        <article id="about">
          <About about={this.state.about}/>
        </article>

        <article>
          <Links links={this.state.links}/>
        </article> */}
      </div>
    );
  }
}



export default Sidebar;