import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './RowPoster.css';
import instance from '../instance';


function RowPoster(props) {

  const APIKEY="47de2b9e8b2462b53975d18185ac40bf";
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const [urlId, setUrlId] = useState('');
  const [movies, setMovies] = useState([]);
  const [isVideoVisible, setIsVideoVisible] = useState(false);


  useEffect(() => {
    instance.get(props.fetchurl).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    instance.get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then((response) => {
      console.log(response.data);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
        toggleVideoVisibility(); // Show the video
      } else {
        setUrlId('');
        toggleVideoVisibility(); // Hide the video
      }
    }).catch((error) => {
      console.log("An error", error);
    });
  };

  const toggleVideoVisibility = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <div className='row'>
      <h2 className="title">{props.title}</h2>

      <div className="posters">
        {movies.map((obj) => 
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            src={`${imgUrl + obj.backdrop_path}`}
            alt=""
            className={props.isSmall ? 'smallPoster' : 'poster'}
          />
        )}
      </div>

      {isVideoVisible && urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPoster;