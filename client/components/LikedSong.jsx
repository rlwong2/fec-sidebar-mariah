import React from 'react';


const LikedSong = ({artistName, songName, albumArtLink}) => (
  <li className='INDIVIDUALLIKEDSONGS'>
    <div className='CONTENTSOFLIKEDSONG'>
      <span className='ALBUMART'>
        <div className='ALBUMART2'>
          <span style='ALBUMARTIMAGE'>{albumArtLink}</span>
        </div>
      </span>

      <div className='MEDIA'>
        <div className='SONGNAMEARTISTINFO'>
          <div className='ARTISTNAME'></div>
          <span>{artistName}</span>
          <div className='SONGNAME'></div>
          <span>{songNAme}</span>
        </div>

        <ul className='MORESTATS'>
          <li>plays 11</li>
          <li>likes 10</li>
          <li>reposts 12</li>
          <li>comments 2</li>
        </ul>
      </div>
    </div>
  </li>

);

export default LikedSong;