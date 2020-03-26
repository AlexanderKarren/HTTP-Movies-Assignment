import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddMovie = props => {
    const { push } = useHistory();
    const [values, setValues] = useState({
        title: "",
        director: "",
        metascore: "",
        stars: ""
    })
    const submitMovie = event => {
        event.preventDefault();
        let newMovie = {
            ...values,
            stars: values.stars.split(",")
        }
        axios.post("http://localhost:5000/api/movies", newMovie).then(response => {
            console.log(response);
            setValues({
                title: "",
                director: "",
                metascore: "",
                stars: ""
            })
            props.setMovieList([
                ...props.movies,
                newMovie
            ])
            push("/");
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleChanges = event => {
        event.preventDefault();
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })

    }
    return (
        <div className="add-movie">
            <form>
                <input type="text" name="title" id="title" placeholder="Title" onChange={handleChanges} value={values.title}/>
                <input type="text" name="director" id="director" placeholder="Director" onChange={handleChanges} value={values.director}/>
                <input type="text" name="metascore" id="metascore" placeholder="Metascore" onChange={handleChanges} value={values.metascore}/>
                <input type="text" name="stars" id="stars" placeholder="Starring (separate names with commas)" onChange={handleChanges} value={values.stars}/>
                <button type="submit" onClick={submitMovie}>Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie
