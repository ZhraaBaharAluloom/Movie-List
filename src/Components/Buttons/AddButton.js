import React, { useState } from "react";
import movieStore from "../../stores/MovieStore";

//style
import { AddButtonStyled } from "../../styles";

const AddButton = ({ isOpen }) => {
  const [movie, setMovie] = useState({ name: "", image: "" });
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.createMovie(movie);
  };

  return (
    <AddButtonStyled>
      <form isOpen={isOpen} onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="col-4">
            <input
              required
              name="name"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="New Movie.."
            />
          </div>
          <div className="col-4 ">
            <input
              onChange={handleChange}
              name="image"
              className="form-control"
              placeholder="insert image.."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            +
          </button>
        </div>
      </form>
    </AddButtonStyled>
  );
};

export default AddButton;
