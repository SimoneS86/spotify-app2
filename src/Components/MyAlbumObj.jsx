import React from 'react'
import { Link } from 'react-router-dom'

const MyAlbumObj = ({ data }) => {

  return (
      <div className="col-sm-auto col-md-auto text-center mb-5" id={data.id}>
        <Link to={`/album/${data.album.id}`}>
          <img className="img-fluid" src={data.album.cover_medium} alt="cover" />
        </Link>
        <p>
          <Link to={`/album/${data.album.id}`}>
            Album: {data.album.title}
            <br></br>
          </Link>
          <Link to={`/artist/${data.artist.id}`}>
            Artist: {data.artist.name}
          </Link>
        </p>
      </div> 
  );
}

export default MyAlbumObj