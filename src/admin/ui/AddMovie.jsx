import React from "react";
import { useState } from "react";
import axios from "axios";
import {successTOast, errorToast, warningToast} from "../../component/ToastMessage";




const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [coverimage, setCoverimage] = useState("");
  const [embeddedlinks, setEmbeddedlinks] = useState("");
  const [selectedItemType, setSelectedItemType] = useState("");
  const [error, setError] = useState("");


  let releasingDate =releaseDate && new Date(releaseDate).toISOString().split("T")[0];

  console.log(releasingDate);

  const handleItemTypeChange = (e) => {
    const selectedValue = e.target.id;

    setSelectedItemType(
      selectedValue === "type1" ? "1" :
      selectedValue === "type2" ? "2" :
      selectedValue === "type3" ? "3" :
      selectedValue
    );
  };

  const handleAddMovieSubmit = async (e) => {
    e.preventDefault();

	    // Basic validation
  if (!movieName || !releaseDate || !runningTime || !coverimage || !embeddedlinks || !selectedItemType) {
			setError("Please fill in all required fields.");
			warningToast(error);
			// alert(error);
			return;
		  }

		  try {
			const response = await axios.post(
			  "http://localhost:4000/movie/addmovie",
			  {
				movie_name: movieName,
				movie_description: movieDescription,
				category_id: selectedItemType,
				embedded_links: embeddedlinks,
				cover_image: coverimage,
				movie_length: runningTime,
				releasing_on: releasingDate,
			  }
			);

			successTOast(response.data.message);

			setMovieName("");
			setMovieDescription("");
			setReleaseDate("");
			setRunningTime("");
			setCoverimage("");
			setEmbeddedlinks("");
			setSelectedItemType("");

		  }catch(error){
			errorToast(error.message);
		  }


	
// 	const alertMessage = `
//     Movie Name: ${movieName}
//     Movie Description: ${movieDescription}
//     Release Date: ${releasingDate}
//     Running Time: ${runningTime}
//     Cover Image: ${coverimage}
//     Embedded Links: ${embeddedlinks}
//     category: ${selectedItemType}
//   `;

//   alert(alertMessage);
  };



  return (
    <>
      <div class="col-12">
        <div class="main__title">
          <h2>Add new item</h2>
        </div>
      </div>

      <div class="col-12">
        <form action="add-item.html#" class="form">
          <div class="row">
            <div class="col-12 col-md-7 form__content">
              <div class="row">
                {/* movie name hai */}
                <div class="col-12">
                  <div class="form__group">
                    <input
                      type="text"
                      value={movieName}
                      onChange={(e) => {
                        setMovieName(e.target.value);
                      }}
                      class="form__input"
                      placeholder="Movie Name"
                    />
                  </div>
                </div>

                {/* movie description hai */}
                <div class="col-12">
                  <div class="form__group">
                    <textarea
                      id="text"
                      value={movieDescription}
                      onChange={(e) => {
                        setMovieDescription(e.target.value);
                      }}
                      name="text"
                      class="form__textarea"
                      placeholder="Movie Description"
                    ></textarea>
                  </div>
                </div>

                {/* release date */}
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form__group">
                    <input
                      type="date"
                      value={releaseDate}
                      onChange={(e) => {
                        setReleaseDate(e.target.value);
                      }}
                      class="form__input"
                      placeholder="Release Date"
                    />
                  </div>
                </div>

                {/* running time */}

                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form__group">
                    <input
                      type="text"
                      value={runningTime}
                      onChange={(e) => {
                        setRunningTime(e.target.value);
                      }}
                      class="form__input"
                      placeholder="Running timed in minutes"
                    />
                  </div>
                </div>

             

                {/* Image links heres */}
                <div class="col-12 col-lg-12">
                  <div class="form__group form__group--link">
                    <input
                      type="text"
                      class="form__input"
                      placeholder="image link here"
                      value={coverimage}
                      onChange={(e) => {
                        setCoverimage(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <ul className="form__radio">
                <li>
                  <span>Item type:</span>
                </li>
                <li>
                  <input
                    id="type1"
                    type="radio"
                    name="type"
                    checked={selectedItemType === "type1"}
                    onChange={handleItemTypeChange}
                  />
                  <label htmlFor="type1">Now Showing</label>
                </li>
                <li>
                  <input
                    id="type2"
                    type="radio"
                    name="type"
                    checked={selectedItemType === "type2"}
                    onChange={handleItemTypeChange}
                  />
                  <label htmlFor="type2">Releasing</label>
                </li>
                <li>
                  <input
                    id="type3"
                    type="radio"
                    name="type"
                    checked={selectedItemType === "type3"}
                    onChange={handleItemTypeChange}
                  />
                  <label htmlFor="type3">Coming Soon</label>
                </li>
              </ul>
            </div>

            {/* youtube embedded links */}

            <div class="col-12">
              <div class="row">
                <div class="col-12 col-lg-12">
                  <div class="form__group form__group--link">
                    <input
                      type="text"
                      class="form__input"
                      placeholder="or add a youtube embedded link"
                      value={embeddedlinks}
                      onChange={(e) => {
                        setEmbeddedlinks(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="col-12">
                  <button
                    onClick={handleAddMovieSubmit}
                    type="button"
                    class="form__btn"
                  >
                    publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMovie;
