

create table likedsongs (
  id int not null auto_increment,
  user varchar(25) not null,
  song_name varchar(40) not null,
  artist_name varchar(25) not null,
  plays int,
  likes int,
  reposts int,
  comments int,
  album_art text,
  location text,
  artist_pic text,
  primary key (id)
);



create table artist (
  id int not null auto_increment,
  name varchar(25) not null,
  track_count int not null,
  follower_count int not null,
  following_count int not null,
  links varchar(255),
  about text,
  primary key (id)
);