import React from 'react';
import HeartIcon from './heart.svg';

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
  const { imdbID, Year, Poster, Title, Type } = movie;
  
  return (
    <div className="movie" key={imdbID}>
      <button 
        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        onClick={() => onToggleFavorite(movie)}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <img src={HeartIcon} alt="favorite" style={{ width: '20px', height: '20px' }} />
      </button>
      
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;