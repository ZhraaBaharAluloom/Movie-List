import React, { useState } from "react";
import movieStore from "../../stores/MovieStore";

const AddButton = ({ isOpen }) => {
  const [movie, setMovie] = useState({ name: "" });
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.createMovie(movie);
  };

  return (
    <div>
      <form isOpen={isOpen} onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="col-4">
            <input
              name="name"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="New Movie.."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddButton;
