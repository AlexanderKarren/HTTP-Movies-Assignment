import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function SavedList({ list }) {
  const { push } = useHistory();
  const redirect = event => {
    event.preventDefault();
    push("/");
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <button onClick={redirect}>Home</button>
    </div>
  );
}

export default SavedList;
