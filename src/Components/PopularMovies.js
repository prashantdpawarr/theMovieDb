import React from "react";
import {Api_key} from "../keys";
import useFetchRecord from "../CustomHooks/usefetchrecord";
import showFetchRcord from "../CustomHooks/showfetchrecord";

export default function PopularMovies() {
  var ans = useFetchRecord(
    `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
  );
  //   console.log(ans);
  var result = showFetchRcord(ans, "Popular Movies");
  return <>{result}</>;
}
