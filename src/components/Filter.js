import React from "react";
import ReactStars from "react-stars";

export default function Filter(props) {
  const ratingChanged = (newRating) => {
    props.setStars(newRating);
  };
  return (
    <div className="col col-sm-4 search-field">
      <input
        className="form-control"
        placeholder="Type Movie Name"
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
      <div className="d-flex align-items-center justify-content-between">
        <span>{"or search by star rating ==>"}</span>
        <ReactStars
          count={10}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={props.stars ? props.stars : 0}
        />
      </div>
    </div>
  );
}
