import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

const CreatePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    movieTitle: "",
    director: "",
    cast: "",
    description: "",
    genre: "",
    runtime: "",
    releaseDate: "",
    budget: "",
    imdb_rating: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/movie", formData);
      toast.success("Movie Created Successfully ");
      navigate("/");
    } catch (error) {
      toast.error("Error Creating Movie");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center items-center p-6">

      <div className="w-full max-w-3xl bg-gray-900/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-700">

        <Link
          to="/"
          className="text-yellow-400 hover:underline text-sm"
        >
          ← Back to Movies
        </Link>

        <h1 className="text-3xl font-bold text-center mt-4 mb-8 tracking-wide">
            Create New Movie
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            name="movieTitle"
            placeholder="Movie Title"
            value={formData.movieTitle}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <input
            type="text"
            name="director"
            placeholder="Director"
            value={formData.director}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <input
            type="text"
            name="cast"
            placeholder="Main Cast"
            value={formData.cast}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <input
            type="number"
            name="runtime"
            placeholder="Runtime (minutes)"
            value={formData.runtime}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <input
            type="number"
            name="budget"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <input
            type="number"
            step="0.1"
            name="imdb_rating"
            placeholder="IMDb Rating"
            value={formData.imdb_rating}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full"
            required
          />

          <textarea
            name="description"
            placeholder="Movie Description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered bg-gray-800 text-white md:col-span-2"
            required
          />

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-yellow-500/50"
          >
             Create Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;