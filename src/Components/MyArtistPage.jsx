import { Link, useParams } from "react-router-dom";
import Logo from "../logo/Spotify_Logo.png";
import Next from "../playerbuttons/Next.png";
import Play from "../playerbuttons/Play.png";
import Previous from "../playerbuttons/Previous.png";
import Repeat from "../playerbuttons/Repeat.png";
import Shuffle from "../playerbuttons/Shuffle.png";
import { useEffect, useState } from "react";
import MySongItem from "./MySongItem";

const MyArtistPage = () => {
  const [artistObj, setArtistObj] = useState(null);
  const [songsObj, setSongsObj] = useState(null);
  const params = useParams();
  const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
  const endpoint2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  useEffect(() =>{
    getDataArtist();
  },[])

  useEffect(() =>{
    if(artistObj) {
    getDataSongs();
  }
  },[artistObj])

  

  const getDataArtist = async () => {
    try {
      const resp = await fetch(`${endpoint}${params.id}`)
      if (resp.ok) {
        const dataFetch = await resp.json()
        setArtistObj(dataFetch)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getDataSongs = async () => {
    try {
      const resp = await fetch(`${endpoint2}${artistObj.name}`)
      if (resp.ok) {
        const dataFetch = await resp.json()
        setSongsObj(dataFetch)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }


    return (
    <div>
        <div className="container-fluid">
          <div className="row">
            {/*SIDEBAR VERTICAL*/}
            <div className="col-2">
              <nav className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
                <div className="nav-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Spotify_Logo" width={131} height={40} />
                    </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <ul>
                        <li>
                        <Link to="/" className="nav-item nav-link">
                          <i className="fas fa-home fa-lg" />
                          &nbsp; Home
                        </Link>
                        </li>
                        <li>
                          <Link to="#" className="nav-item nav-link"><i className="fas fa-book-open fa-lg" />&nbsp; Your
                            Library</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="nav-btn">
                  <button className="btn signup-btn" type="button">Sign Up</button>
                  <button className="btn login-btn" type="button">Login</button>
                  <Link to="#">Cookie Policy</Link> |
                  <Link to="#"> Privacy</Link>
                </div>
              </nav>
            </div>
            {/*END SIDEBAR VERTICAL*/}
            {/*MAIN*/}
            <div className="col-12 col-md-9 offset-md-3 mainPage">
              <div className="row mb-3">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                  <Link to="#">TRENDING</Link>
                  <Link to="#">PODCAST</Link>
                  <Link to="#">MOODS AND GENRES</Link>
                  <Link to="#">NEW RELEASES</Link>
                  <Link to="#">DISCOVER</Link>
                </div>
              </div>
              {artistObj && (
              <>
              <div className="row">
                <div className="col-12 col-md-10 col-lg-10 mt-5 text-center">
                  <img className="img-fluid" src={artistObj.picture_xl} alt="foto" />
                  <h2 className="titleMain">{artistObj.name}</h2>
                  <div id="followers">{artistObj.nb_fan} followers</div>
                  <div className="d-flex justify-content-center" id="button-container">
                    <button className="btn btn-success mr-2 mainButton d-none" id="playButton">
                      PLAY
                    </button>
                    <button className="btn btn-outline-light mainButton d-none" id="followButton">
                      FOLLOW
                    </button>
                  </div>
                </div>
              </div>
              {songsObj && (
              <div className="row mb-3">
                <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                  <div className="mt-4 d-flex justify-content-start">
                    <h2 className="text-white font-weight-bold">Tracks</h2>
                  </div>
                  <div className="pt-5 mb-5">
                    <div className="row" id="apiLoaded">
                      {songsObj.data.map((song) => (
                        <MySongItem key={song.id} song={song} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )}
              </>
              )}
            </div>
          </div>
        </div>
        {/*END MAIN*/}
        {/*NAVBAR FLEX-BOTTOM*/}
        <div className="container-fluid fixed-bottom bg-container pt-1">
          <div className="row">
            <div className="col-lg-10 offset-lg-2">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                  <div className="row">
                    <Link to="#">
                      <img src={Shuffle} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Previous} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Play} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Next} alt="shuffle" />
                    </Link>
                    <Link to="#">
                      <img src={Repeat} alt="shuffle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center playBar py-3">
                <div className="col-8 col-md-6">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default MyArtistPage;