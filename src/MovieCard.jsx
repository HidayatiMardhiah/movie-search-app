// MovieCard.jsx
import React from 'react';
const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Title}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://placehold.co/400x600?text=No+Poster"} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard;