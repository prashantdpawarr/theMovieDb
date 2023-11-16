import React from "react";
import usefetchrecord from "../CustomHooks/usefetchrecord";
import { Api_key } from "../keys";
import showFetchRcord from "../CustomHooks/showfetchrecord";

export default function UpComingMovies() {
  var ans = usefetchrecord(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
  );
  //   console.log(ans);
  var result = showFetchRcord(ans, "Upcoming Movies");

  return <>{result}</>;
}
