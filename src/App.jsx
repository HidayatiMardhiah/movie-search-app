import React, { useState } from 'react';
import { useEffect } from 'react';
import './style.css';
import searchIcon from './assets/search.png';
import MovieCard from './MovieCard'


// define the URL of the api key
const movie_api = 'https://omdbapi.com/?apikey=fe2f6c44';
const default_movies = ['Batman', 'Avengers', 'Matrix', 'Joker', 'Interstellar', 'Inception']
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) =>{
        const response = await fetch(`${movie_api}&s=${title}`); // Call the API when search
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        const random = default_movies[Math.floor(Math.random() * default_movies.length)]
        searchMovies(random); 
    }, []);
    return (
        <div className="app">
            <h1> List of Movies </h1>
            <div className="search">
                <input placeholder="Search a Movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> 
                <img src={searchIcon} alt="search icon" onClick={() => searchMovies(searchTerm)} />
            </div>
        {
            movies?.length > 0
                ? (<div className="container">
                    {movies.map((movie) =>(
                        <MovieCard movie={movie}/> ))}
                        </div> ) : (
                            <div className="empty">
                                <h2> No movie found</h2>
                            </div>
                        )
                    }
                    </div>
                );
    
}
export default App;