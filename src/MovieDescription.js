import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { index } = useParams();
  const movie = movies.find((_, idx) => idx === parseInt(index));

  if (!movie) {
    return <div>Loading...</div>; // or handle loading state as needed
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Back</Link>
    </div>
  );
};

export default MovieDescription;
