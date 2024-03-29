import React from "react";
import OneMovie from "./OneMovie";
import { useSelector } from "react-redux";

export default function MoviesReviewSection() {
  const MovieReviewData = useSelector((state) => state.MovieReviewReducer);
  const movieReviewsList = MovieReviewData.movieReviewsList;

  return (
    <div className="w-100 d-flex flex-wrap justify-content-around">
      {movieReviewsList?.map((oneMovie, index) => {
        return <OneMovie key={index} movieData={oneMovie} />;
      })}
    </div>
  );
}
