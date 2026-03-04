import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

const EditPage = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await api.get(`/movie/${id}`);

        setFormData({
          movieTitle: res.data.movieTitle || "",
          director: res.data.director || "",
          cast: res.data.cast || "",
          description: res.data.description || "",
          genre: res.data.genre || "",
          runtime: res.data.runtime || "",
          releaseDate: res.data.releaseDate
            ? res.data.releaseDate.substring(0, 10)
            : "",
          budget: res.data.budget || "",
          imdb_rating: res.data.imdb_rating || "",
        });
      } catch (error) {
        toast.error("Failed to load movie");
      }
    };

    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/movie/${id}`, formData);
      toast.success("Movie Updated Successfully ✨");
      navigate("/");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center items-center p-6">

      <div className="w-full max-w-4xl bg-gray-900/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-700">

        <Link to="/" className="text-yellow-400 hover:underline text-sm">
          ← Back to Movies
        </Link>

        <h1 className="text-3xl font-bold text-center mt-4 mb-8 tracking-wide">
           Edit Movie
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <input
            type="text"
            name="movieTitle"
            placeholder="Movie Title"
            value={formData.movieTitle}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="text"
            name="director"
            placeholder="Director"
            value={formData.director}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="text"
            name="cast"
            placeholder="Main Cast"
            value={formData.cast}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="number"
            name="runtime"
            placeholder="Runtime (minutes)"
            value={formData.runtime}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="number"
            name="budget"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="number"
            step="0.1"
            name="imdb_rating"
            placeholder="IMDb Rating"
            value={formData.imdb_rating}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 text-white w-full focus:ring-2 focus:ring-yellow-500"
            required
          />

          <textarea
            name="description"
            placeholder="Movie Description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered bg-gray-800 text-white md:col-span-2 focus:ring-2 focus:ring-yellow-500"
            rows="4"
            required
          />

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-yellow-500/40"
          >
             Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditPage;