import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../lib/axios";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await api.get(`/movie/${id}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex justify-center items-center p-6">
      <div className="bg-gray-800 w-full max-w-3xl p-8 rounded-2xl shadow-2xl">

        <Link to="/" className="text-yellow-400 hover:underline">
          ← Back to Movies
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-6">
          {movie.movieTitle}
        </h1>

        <div className="space-y-3 text-gray-300">
          <p><span className="text-white font-semibold">Director:</span> {movie.director}</p>
          <p><span className="text-white font-semibold">Cast:</span> {movie.cast}</p>
          <p><span className="text-white font-semibold">Genre:</span> {movie.genre}</p>
          <p><span className="text-white font-semibold">Runtime:</span> {movie.runtime} mins</p>
          <p><span className="text-white font-semibold">Release Date:</span> {movie.releaseDate}</p>
          <p><span className="text-white font-semibold">Budget:</span> ${movie.budget}</p>
          <p><span className="text-white font-semibold">IMDb Rating:</span> ⭐ {movie.imdb_rating}</p>
          <p className="pt-4">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;