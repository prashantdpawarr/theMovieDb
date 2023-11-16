import React from "react";
import usefetchrecord from "../CustomHooks/usefetchrecord";
import {Api_key} from "../keys";
import showFetchRcord from "../CustomHooks/showfetchrecord";

export default function TopRatedMovies() {
  var ans = usefetchrecord(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
  );
  //   console.log(ans);
  var result = showFetchRcord(ans, "Top Rated Movies");

  return <>{result}</>;
}
