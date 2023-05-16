import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      {movies.map(movie => (
        <div key={movie.id} className='cont'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;