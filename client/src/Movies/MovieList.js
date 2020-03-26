import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies, addToSavedList, setMovieList }) {
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} setMovieList={setMovieList} addToSavedList={addToSavedList} showSaveButton={false}/>
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList;
