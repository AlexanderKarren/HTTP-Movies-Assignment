import React, { useState } from 'react';
import axios from 'axios';

const MovieCard = props => {
  const [editMode, setEditMode] = useState(false);
  const saveMovie = () => {
    props.addToSavedList(props.movie);
  };
  const editMovie = event => {
    event.preventDefault();
    if (editMode) {
      axios.put(`http://localhost:5000/api/movies/${props.movie.id}`, values).then(response => {
        console.log(response);
        setEditMode(!editMode);
      })
      .catch(error => {
        console.log(error);
      })
    }
    else {
      setEditMode(!editMode);
    }
  }
  const [values, updateValues] = useState({
    ...props.movie,
    stars: props.movie.stars.toString()
  });
  // {
  //   id: 0,
  //   title: "The Godfather",
  //   director: "Francis Ford Coppola",
  //   metascore: 100,
  //   stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
  // }
  const handleChanges = event => {
    event.preventDefault();
    updateValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className="movie-card">
      <form>
        {editMode ? <input type="text" name="title" id="title" onChange={handleChanges} value={values.title}/> :<h2>{props.movie.title}</h2>}
        {editMode ? <input type="text" name="director" id="director" onChange={handleChanges} value={values.director}/> : <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>}
        { editMode ? <input type="text" name="metascore" id="metascore" onChange={handleChanges} value={values.metascore}/> : <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>}
        <h3>Actors</h3>
        {editMode ? <input type="text" name="stars" id="stars" onChange={handleChanges} value={values.stars}/> : props.movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </form>
      {(props.showSaveButton && !editMode) && <button onClick={saveMovie}>Save</button>}
      {props.showSaveButton && <button onClick={editMovie}>{editMode ? "Update" : "Edit"}</button>}
    </div>
  );
};

export default MovieCard;
