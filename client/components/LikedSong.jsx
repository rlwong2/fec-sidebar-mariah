import React from 'react';

import styled from 'styled-components';

const LikedSong = ({song_name, artist_name, plays, likes, reposts, comments, album_art, location, artist_pic, onArtistNameClick}) => (
  <li className='INDIVIDUALLIKEDSONGS'>
    <div className='CONTENTSOFLIKEDSONG'>
      <span className='ALBUMART'>
        <img src={album_art}></img>
      </span>

      <div className='MEDIA'>
        <div className='SONGNAMEARTISTINFO'>
          <div className='ARTISTNAME'></div>
          <span onClick={onArtistNameClick}>{artist_name}</span>
          <div className='SONGNAME'></div>
          <span>{song_name}</span>
        </div>

        <ul className='MORESTATS'>
          <li>plays {plays}</li>
          <li>likes {likes} </li>
          <li>reposts {reposts} </li>
          <li>comments {comments} </li>
        </ul>
      </div>
    </div>
  </li>

);

export default LikedSong;