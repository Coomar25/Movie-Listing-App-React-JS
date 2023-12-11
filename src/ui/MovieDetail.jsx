import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
  const { slug } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/movie/getmovie/${slug}`
        );
        setMovieData(response.data); // Assuming the API returns the movie data
        console.log("response.data", response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
    console.log("movieData", movieData);
  }, [slug]);

  return (
    <section className="section section--head section--head-fixed section--gradient section--details-bg">
      <div className="section__bg" data-bg="img/details.jpg"></div>
      <div className="container">
        {/* <!-- article --> */}
        <div className="article">
          <div className="row">
            <div className="col-12 col-xl-8">
              {/* <!-- trailer --> */}
              <Link to={`/booking/${slug}`}>
                <div className="article__trailer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book Now
                </div>
              </Link>

              {/* <!-- end trailer --> */}

              {/* <!-- article content --> */}
              <div className="article__content">
                <h1>{movieData?.movie?.movie_name}</h1>
                <ul className="list">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                    </svg>{" "}
                    9.7
                  </li>
                  <li>{movieData?.movie?.movie_length}</li>
                </ul>

                <p>{movieData?.movie?.movie_description}</p>
              </div>
              {/* <!-- end article content --> */}
            </div>

            {/* <!-- video player --> */}

            <div className="col-12 col-xl-8">
              <div className="plyr__video-embed" id="player">
                {/* <iframe width="560" height="315" src= title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                {/* {movieData?.movie.embedded_links} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: movieData?.movie?.embedded_links,
                  }}
                />
              </div>
            </div>
            {/* <!-- end video player --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
