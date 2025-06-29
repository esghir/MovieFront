import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import { fetchMockMovies, getRandomMockMovies } from "./mockMovieService";

// Keep the original API URL as a fallback or for future use
// const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem('movieland-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error parsing saved favorites:", error);
      }
    }
    
    // Load random superhero movies on initial render
    loadRandomMovies();
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('movieland-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const loadRandomMovies = async () => {
    setIsLoading(true);
    setShowFavorites(false);
    try {
      const data = await getRandomMockMovies(6); // Get 6 random movies
      setMovies(data.Search);
    } catch (error) {
      console.error("Error loading random movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchMovies = async (title) => {
    if (!title.trim()) return;
    
    setIsLoading(true);
    setShowFavorites(false);
    try {
      // Use our mock service instead of the real API
      const data = await fetchMockMovies(title);
      setMovies(data.Search);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      // Check if movie is already in favorites
      const existingIndex = prevFavorites.findIndex(m => m.imdbID === movie.imdbID);
      
      if (existingIndex >= 0) {
        // Remove from favorites
        return prevFavorites.filter(m => m.imdbID !== movie.imdbID);
      } else {
        // Add to favorites
        return [...prevFavorites, movie];
      }
    });
  };
  
  const isMovieFavorite = (movieId) => {
    return favorites.some(movie => movie.imdbID === movieId);
  };
  
  const toggleShowFavorites = () => {
    setShowFavorites(prev => !prev);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for superhero movies"
          onKeyPress={(e) => e.key === 'Enter' && searchMovies(searchTerm)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      
      <div className="actions">
        <button className="btn random-button" onClick={loadRandomMovies}>
          Load Random Movies
        </button>
        <button className="btn favorites-button" onClick={toggleShowFavorites}>
          {showFavorites ? "Show All Movies" : `My Favorites (${favorites.length})`}
        </button>
      </div>

      {isLoading ? (
        <div className="loading">
          <h2>Loading movies...</h2>
        </div>
      ) : showFavorites ? (
        <div className="favorites-container">
          <div className="favorites-header">
            <h2>My Favorite Movies</h2>
          </div>
          
          {favorites.length > 0 ? (
            <div className="container">
              {favorites.map((movie) => (
                <MovieCard 
                  key={movie.imdbID} 
                  movie={movie} 
                  onToggleFavorite={toggleFavorite}
                  isFavorite={true}
                />
              ))}
            </div>
          ) : (
            <div className="no-favorites">
              <h3>You haven't added any favorites yet</h3>
              <p>Click the heart icon on any movie to add it to your favorites</p>
            </div>
          )}
        </div>
      ) : movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              movie={movie} 
              onToggleFavorite={toggleFavorite}
              isFavorite={isMovieFavorite(movie.imdbID)}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;