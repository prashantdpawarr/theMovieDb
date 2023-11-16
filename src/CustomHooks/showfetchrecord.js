import { Img_Path } from "../keys";
import "../assets/css/index.css";
import { Link } from "react-router-dom";

export default function showFetchRcord(apiData, label) {
  //   console.log("called");
  return (
    <div className="container-fluid dark-bg">
      <div className="container ">
        <h1 className="text-center p-5">{label}</h1>
        <div className="row">
          {apiData &&
            apiData.length > 0 &&
            apiData.map(({ original_title, vote_average, poster_path, id }) => (
              <div className="col-xl-3 col-6 col-sm-6 movies-col">  
                <Link to={"/singlepageview/ " + id}>
                  <img
                    src={Img_Path + poster_path}
                    alt=""
                    className="img-fluid"
                  />
                  <p className="text-center pt-3 mb-1 text-light text-decoration-none">
                    {original_title}
                  </p>
                  <p className="text-center mb-50 text-light text-decoration-none">
                    Rating : {vote_average}/10
                  </p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
