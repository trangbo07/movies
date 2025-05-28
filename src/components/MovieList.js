import React from 'react';
import './MovieList.css';


const MovieList = () => {
  // Dữ liệu mẫu
  const movies = [
    { id: 2, title: 'Meow Meow War', year: 2014, image: 'img11.png' },
    { id: 3, title: 'TitaMeowMeow', year: 2008, image: 'img2.png' },
   { id: 2, title: 'RonaldMeow', year: 2014, image: 'RonaldMeow.png' },
    { id: 3, title: 'Tokuda-Meow', year: 2008, image: 'tokuda2.png' },
    { id: 2, title: 'Meow Meow War-2', year: 2025, image: 'img11.png' },
    { id: 3, title: 'TitaMeowMeow-2', year: 2015, image: 'img2.png' },
    { id: 4, title: 'Meow Meow War-3', year: 2025, image: 'img11.png' },
  ];

  return (
    <div className="movie-list">
      <h2 className="movie-list-title">Danh sách phim mèo</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} className="movie-img" />
            <div className="movie-title">{movie.title}</div>
            <div className="movie-year">({movie.year})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList; 






