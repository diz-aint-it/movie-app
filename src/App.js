import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    // Example initial movies
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
      rating: 4.5,
    },
    {
      title: 'Movie 2',
      description: 'Description for Movie 2',
      posterURL: 'https://egoamo.co.za/cdn/shop/products/Avengers_-_End_Game_800x.jpg?v=1558989681',
      rating: 3.8,
    },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

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

  const handleAddMovie = (e) => {
    e.preventDefault();
  
    const newMovieObject = {
      title: newMovie.title,
      description: newMovie.description,
      posterURL: newMovie.posterURL,
      rating: parseFloat(newMovie.rating),
    };
    setMovies([...movies, newMovieObject]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };
  
  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div className="form-container">
        <h2>Add New Movie</h2>
        <form onSubmit={handleAddMovie}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={newMovie.title}
              onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={newMovie.description}
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="posterURL">Poster URL</label>
            <input
              type="text"
              id="posterURL"
              value={newMovie.posterURL}
              onChange={(e) =>
                setNewMovie({ ...newMovie, posterURL: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              value={newMovie.rating}
              onChange={(e) => setNewMovie({ ...newMovie, rating: +e.target.value })}
              required
              step="0.1"
              min="0"
              max="10"
            />
          </div>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default App;
