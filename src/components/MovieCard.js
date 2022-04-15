import React from "react";
import ReactStars from "react-stars";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="image">
        <img src={props.posterURL} alt="movie"></img>
        <ReactStars
          count={10}
          size={24}
          color2={"#ffd700"}
          value={props.rating}
          edit={false}
        />
      </div>
    </div>
  );
}
/* Every movie should have the following attributes: title, description, posterURL, rating */
