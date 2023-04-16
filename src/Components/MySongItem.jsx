import React from 'react'
import { Link } from 'react-router-dom'

const MySongItem = ({ song }) => {

  return (
    <div className="col-sm-auto col-md-auto text-center mb-5" id={song.id}>
    <Link to={`/album/${song.album.id}`}>
      <img className="img-fluid" src={song.album.cover_medium} alt="cover" />
    </Link>
    <p>
      <Link to={`/album/${song.album.id}`}>
        Album: {song.album.title.length < 16 ? `${song.album.title}` : `${song.album.title.substring(0, 16)}...`}
        <br></br>
      </Link>
      <Link to={`/artist/${song.artist.id}`}>
        Artist: {song.artist.name}
      </Link>
    </p>
  </div> 
  );
}

export default MySongItem