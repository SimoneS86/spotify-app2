import React from 'react'
import { Link } from 'react-router-dom'

const MySongObj = ({ song }) => {

  return (
    <div>
        <div className="py-3 d-flex justify-content-between align-items-center  trackHover text-white">
        <Link to="#" className="card-title trackHover px-3">
          {song.title}
        </Link>
        <small className="duration">{song.duration}s</small>
        </div>
      
    </div>
  );
}

export default MySongObj