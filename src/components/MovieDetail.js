import React from 'react';
import './MovieDetail.css';

const MovieDetail = () => {
  // Dữ liệu mẫu
  const movie = {
    title: 'Inception',
    year: 2010,
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology...'
  };

  return (
    <div className="movie-detail">
      <div className="movie-detail-title">{movie.title}</div>
      <div className="movie-detail-year">({movie.year})</div>
      <div className="movie-detail-desc">{movie.description}</div>
    </div>
  );
};

export default MovieDetail; 