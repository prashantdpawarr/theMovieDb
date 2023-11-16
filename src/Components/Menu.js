import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import { Api_key, Img_Path } from "../keys";

export default function Menu() {
  const inputValue = useRef();
  const [singleMovieApi, setSingleMovieApi] = useState([]);

  const SearchValue = (ev) => {
    ev.preventDefault();
    // console.log(inputValue.current.value);

    const movie_name = inputValue.current.value;
    console.log(movie_name);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1`
    )
      .then((res) => res.json())
      .then((val) => {
        // console.log(val);
        console.log(val.results[0]);
        setSingleMovieApi(val.results[0]);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg">
        <div className="container-fluid ">
          <Link
            to={"/popularmovies"}
            className="navbar-brand text-light ms-5 ms-sm-2"
          >
            Movie DB
          </Link>
          <button
            className="navbar-toggler bg-secondary btn-outline-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-outline-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/popularmovies"}
                  className="nav-link text-secondary"
                  aria-current="page"
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/topratedmovies"}
                  className="nav-link text-secondary"
                >
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/upcomingmovies"}
                  className="nav-link text-secondary"
                >
                  Upcoming
                </Link>
              </li>
            </ul>
            <form className="d-flex me-50" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Movie Name"
                aria-label="Search"
                ref={inputValue}
              />
              <button
                className="btn btn-outline-secondary bg-secondary text-light "
                type="submit"
                onClick={SearchValue}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid dark-bg">
        <div className="container dark-bg pt-4">
          <div className="row">
            {singleMovieApi && Object.keys(singleMovieApi).length > 0 && (
              <div className="col-xl-12">
                <div className="search_img">
                  <img
                    src={Img_Path + singleMovieApi.poster_path}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h4 className="text-center mt-3">{singleMovieApi.title}</h4>
                <p className="text-center">
                  Rating: {singleMovieApi.vote_average}/10
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
