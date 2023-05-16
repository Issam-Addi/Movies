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
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-10">Movies List</h1>
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded shadow-md p-4 mb-4 w-full max-w-xl">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-full mb-4"
            alt={movie.title}
          />
          <h1 className="text-xl font-bold mb-2">Name of movie: {movie.title}</h1>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Movie description:</span> {movie.overview}
          </p>
          <hr className="border-gray-300 my-4" />
        </div>
      ))}
    </div>

  );
};

export default MoviesList;