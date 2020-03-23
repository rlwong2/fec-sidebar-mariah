import React from 'react';
import LikedSong from './LikedSong.jsx';

import styled from 'styled-components';


const LikedSongs = ({likedSongs, count, onArtistNameClick, onHover}) => (

  <div>
    <span className='LIKEDSONGCLASS'>
      <span> ♡
        <h3 className='LIKEDSONGSNUMBER'>
          {count} likes </h3>
      </span>
    </span>

    <ul>
      {likedSongs.map((likedSong) => {
        <LikedSong
          //id={likedSong.id}
          //user={likedSong.user}
          song_name={likedSong.song_name}
          artist_name={likedSong.artist_name}
          plays={likedSong.plays}
          likes={likedSong.likes}
          reposts={likedSong.reposts}
          comments={likedSong.comments}
          album_art={likedSong.album_art}
          location={likedSong.location}
          artist_pic={likedSong.artist_pic}
          onArtistNameClick={onArtistNameClick}
        />;
      }
      )}
    </ul>
  </div>
);

export default LikedSongs;