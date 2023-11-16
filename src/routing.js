import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App";
import PopularMovies from "./Components/PopularMovies";
import TopRatedMovies from "./Components/TopRatedMovies";
import UpComingMovies from "./Components/UpComingMovies";
import SinglePage from "./Components/SinglePage";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <PopularMovies></PopularMovies>,
      },
      {
        path: "/popularmovies",
        element: <PopularMovies></PopularMovies>,
      },
      {
        path: "/topratedmovies",
        element: <TopRatedMovies></TopRatedMovies>,
      },
      {
        path: "/upcomingmovies",
        element: <UpComingMovies></UpComingMovies>,
      },
      {
        path: "/singlepageview/:movie_id",
        element: <SinglePage></SinglePage>,
      },
    ],
  },
  {
    path: "*",
    element: <App></App>,
  },
]);

export default customRouter;
