import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDescription from './MovieDescription';


function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
      rating: 4.5,
      trailerLink: 'https://www.youtube.com/watch?v=9NJj12tJzqc',
    },
    {
      title: 'Movie 2',
      description: 'Description for Movie 2',
      posterURL: 'https://egoamo.co.za/cdn/shop/products/Avengers_-_End_Game_800x.jpg?v=1558989681',
      rating: 3.8,
      trailerLink: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
    },
  ]);
  
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else if (filterType === 'rating') {
      const filtered = movies.filter(movie => movie.rating >= parseFloat(value));
      setFilteredMovies(filtered);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Filter onFilterChange={handleFilterChange} />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movie/:index" element={<MovieDescription movies={movies} />} />
        </Routes>
        <div className="form-container">
          {/* ... add new movie form */}
        </div>
      </div>
    </Router>
  );
}

export default App;