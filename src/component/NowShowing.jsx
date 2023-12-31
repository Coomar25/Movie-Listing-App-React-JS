import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NowShowing = () => {
  const [nowShowingMovies, setNowShowingMovies] = useState([]);

  useEffect(() => {
    // Fetch now showing movies from your API endpoint
    const fetchNowShowingMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/movie/nowShowingMovies`
        );
        const data = await response.json();
        setNowShowingMovies(data.nowShowing);
        console.log("Now showing movies:", data.nowShowing);
      } catch (error) {
        console.error("Error fetching now showing movies:", error);
      }
    };

    fetchNowShowingMovies();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section__title">
              <a href="category.html">Now Showing</a>
            </h2>
          </div>

          <div className="col-12">
            <div className="section__carousel-wrap">
              <div
                className="section__carousel owl-carousel"
                style={{
                  display: "flex",
                  gap: "4rem",
                }}
                id="popular"
              >
                
                {nowShowingMovies.map((movie, index) => (
                  <div className="card " key={index}>
                    {" "}
                    <Link
                     to={`/moviedetails/${movie.slug}`} 
                      className="card__cover"
                    >
                      <img
                        src={movie.cover_image}
                        alt=""
                        style={
                          {
                           width: "250px",
                           height: "350px",
                          }
                        }
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <button className="card__add" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" />
                      </svg>
                    </button>
                    <h3 className="card__title">
                      <Link to="/moviedetails">{movie.movie_name}</Link>
                    </h3>
                    <ul className="card__list">
                      <li>{movie.movie_length}</li>
                      <li>Min</li>
                    </ul>
                   

                  </div>
                ))}


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowShowing;
