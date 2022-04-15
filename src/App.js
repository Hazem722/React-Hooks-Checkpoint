import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Heading from "./components/Heading";
import Filter from "./components/Filter";
import ReactStars from "react-stars";
import data from "./data.json";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [stars, setStars] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const [clicked, setClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function moviesListDisplay() {
    setMoviesList(data);
  }
  useEffect(() => {
    moviesListDisplay();
  }, []);

  function addMovies() {
    setClicked(true);
    document.querySelector(".add-movie-btn").style.display = "none";
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.querySelector("#root").appendChild(overlay);
    setSubmitted(false);
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const ratingChanged = (newRating) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, rating: newRating };
    });
    return newRating;
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setClicked(false);
    setMoviesList((prevMoviesList) => {
      return [
        {
          Title: formData.title,
          Type: formData.description,
          Poster: formData.posterURL,
          rating: formData.rating,
        },
        ...prevMoviesList,
      ];
    });
    setFormData({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
    document
      .querySelector("#root")
      .removeChild(document.querySelector(".overlay"));
  }
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center  mt-4 mb-4">
        <Heading title="Movies" />
        {!clicked && (
          <button className="add-movie-btn" onClick={addMovies}>
            Add Your Own Movies
          </button>
        )}
        <Filter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          stars={stars}
          setStars={setStars}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieList
          moviesList={moviesList}
          setMoviesList={setMoviesList}
          searchValue={searchValue}
          stars={stars}
        />
      </div>
      {clicked && !submitted && (
        <form
          className="d-flex flex-column align-items-center justify-content-between form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Type Movie Name"
            onChange={handleChange}
            name="title"
            value={formData.title}
          />
          <input
            type="text"
            placeholder="Type Movie Description"
            onChange={handleChange}
            name="description"
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Movie posterURL"
            onChange={handleChange}
            name="posterURL"
            value={formData.posterURL}
          />
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
            value={formData.rating ? formData.rating : 0}
          />
          <input type="submit" value="add" />
        </form>
      )}
    </div>
  );
}

export default App;

// Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.
