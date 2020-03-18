import React from 'react';
import LikedSong from './LikedSong.jsx';


const LikedSongs = ({likedSongs}) => (

  <div>
    <span className='LIKEDSONGCLASS'>
      <span> ♡
        <h3 className='LIKEDSONGSNUMBER'>
          {likedSongs} likes </h3>
      </span>
    </span>

    <ul>
      <LikedSong
      />
    </ul>
  </div>
);

export default LikedSongs;