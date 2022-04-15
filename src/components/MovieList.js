import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const data = [];
  props.moviesList.map((e) => data.push(e));

  const filteredData = data.filter((e) => {
    if (props.searchValue === "" && props.stars === "") {
      return e;
    } else if (props.searchValue) {
      return e.Title.toLowerCase().includes(props.searchValue);
    } else if (props.stars) {
      return e.rating === props.stars;
    }
  });
  // console.log(filteredData);
  return (
    <div className="d-flex align-items-center justify-content-between movie-list">
      {/* {props.moviesList.map((movie, i) => (
        <MovieCard
          key={i}
          title={movie.Title}
          description={movie.Type}
          posterURL={movie.Poster}
          // rating={movie.rating}
        />
      ))} */}

      {filteredData.length > 0 &&
        filteredData.map((movie, i) => (
          <MovieCard
            key={i}
            title={movie.Title}
            description={movie.Type}
            posterURL={movie.Poster}
            rating={movie.rating}
          />
        ))}
      {filteredData.length === 0 && (
        <div style={{ color: "red" }}>No Movies Found</div>
      )}
      {/* {filteredDataStars.map((movie, i) => (
        <MovieCard
          key={i}
          title={movie.Title}
          description={movie.Type}
          posterURL={movie.Poster}
          rating={movie.rating}
        />
      ))} */}
    </div>
  );
}
