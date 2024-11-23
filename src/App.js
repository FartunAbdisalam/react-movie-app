import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//24160888
const API_URL = "https://www.omdbapi.com?apikey=24160888";

/*const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};*/

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
 

  useEffect(() => {
    searchMovie("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input placeholder="Search Movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie,index)=> (
              <MovieCard  movie={movie} key={index}/>
            ))}
          </div>
        ) : (<div className="empty"> <h2> No Movies Found</h2> </div>)
      }

      
    </div>
  );
};

export default App;
