import React from 'react';

import styled from 'styled-components';


const Li = styled.li`
  padding: 5px 0;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  margin: 0;
`;

const SongDiv = styled.div`
  padding: 0;
  left: -6px;
  margin-right: -6px;
  position: relative;
  min-height: 60px;
  border-radius: 4px;
  overflow: hidden;
  `;

const AlbumArtDiv = styled.span`
  height: 50px;
  width: 50px;
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
`;

const AlbumArtSpan = styled.span`
  display: inline-block;
  background: transparent 50%/contain no-repeat;
  margin-right: 4px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  float: left;
`;

const MediaInfoDiv = styled.span`
  margin-top: 4px;
  overflow: hidden;
  display: block;
`;

const AlbumImage = styled.img`
    width: 50px;
    height: 50px;
    opacity: 1;
`;

const SmallLi = styled.li`
`;



const LikedSong = ({song_name, artist_name, plays, likes, reposts, comments, album_art, location, artist_pic, onArtistNameClick}) => (
  <Li className='INDIVIDUALLIKEDSONGS'>
    <SongDiv className='CONTENTSOFLIKEDSONG'>
      <AlbumArtDiv>
        <AlbumArtSpan className='ALBUMART'>
          <AlbumImage src={album_art}></AlbumImage>
        </AlbumArtSpan>
      </AlbumArtDiv>

      <MediaInfoDiv className='MEDIA'>
        <div className='SONGNAMEARTISTINFO'>
          <div className='ARTISTNAME'></div>
          <span onClick={onArtistNameClick}>{artist_name}</span>
          <div className='SONGNAME'></div>
          <span>{song_name}</span>
        </div>

        <ul className='MORESTATS'>
          <SmallLi>plays {plays}</SmallLi>
          <SmallLi>likes {likes} </SmallLi>
          <SmallLi>reposts {reposts} </SmallLi>
          <SmallLi>comments {comments} </SmallLi>
        </ul>
      </MediaInfoDiv>
    </SongDiv>
  </Li>

);

export default LikedSong;