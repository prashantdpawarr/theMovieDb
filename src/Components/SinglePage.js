import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api_key, Img_Path } from "../keys";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SinglePage() {
  const [api, setApi] = useState({});
  const [castApi, setCastApi] = useState([]);

  const { movie_id } = useParams();
  console.log(movie_id);

  useEffect(() => {
    // Fetch movie details
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`
    )
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        setApi(val);
      });

    // Fetch cast details for the specific movie
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`
    )
      .then((res) => res.json())
      .then((castVal) => {
        console.log(castVal["cast"]);
        setCastApi(castVal["cast"]);
      });
  }, [movie_id]);

  return (
    <>
      <section className="container-fluid dark-bg mainWrapper">
        <div className="container singlePageColor py-3">
          <h2 className="text-center mt-2 mb-5">Movie Details</h2>
          <div className="row">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-3 m-0">
                  <div className="poster_img">
                    <img
                      src={Img_Path + api.poster_path}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-9">
                  <p className="fs-4">{api.title}</p>
                  <p className="text-info fs-5">Rating: {api.vote_average}</p>
                  <p>Release Date: {api.release_date}</p>
                  <p>Movie Budget: {api.budget} USD</p>
                </div>
              </div>
              <p className="mx-3">
                <span className="fs-4 text-info">Overview</span> <br />
                <span className="text-light">{api.overview}</span>
              </p>
            </div>
            <div className="col-xl-6">
              <img
                src={Img_Path + api.backdrop_path}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container-fluid dark-bg">
          <div className="container">
            <h2 className="text-center pt-5 mb-5">Cast Details</h2>
            {/* Use react-slick Slider component */}
            <Slider
              infinite={false} // Set to false to disable infinite looping
              slidesToShow={6} // Number of cast members to show at once
              slidesToScroll={3} // Number of cast members to scroll at a time
            >
              {castApi.map((castMember) => (
                <div key={castMember.id} className="col-xl-2">
                  <div className="card">
                    <img
                      src={Img_Path + castMember.profile_path}
                      className="card-img-top img-fluid"
                      alt={castMember.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{castMember.name}</h5>
                      <p className="card-text">
                        Character: {castMember.character}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
