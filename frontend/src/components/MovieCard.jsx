import { useNavigate } from "react-router-dom";
import { Trash2, Edit2, Star } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const MovieCard = ({ movie, setMovies }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/movie/${movie._id}`);
      setMovies((prev) => prev.filter((m) => m._id !== movie._id));
      toast.success("Movie deleted successfully 🗑️");
      setShowConfirm(false);
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <>
      {/* MOVIE CARD */}
      <div
        onClick={() => navigate(`/movie/${movie._id}`)}
        className="p-4 bg-gray-900 border border-gray-700 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition"
      >
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">{movie.genre}</span>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-lg text-white">
            {movie.movieTitle}
          </h2>
          <p className="text-gray-400">{movie.director}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-400">
            {formatDate(movie.releaseDate)}
          </span>

          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1 text-gray-300">
              <Star size={16} />
              {movie.imdb_rating}
            </span>

            <Edit2
              size={18}
              className="text-blue-400 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/movie/edit/${movie._id}`);
              }}
            />

            <Trash2
              size={18}
              className="text-red-500 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                setShowConfirm(true);
              }}
            />
          </div>
        </div>
      </div>

      {/* 🔥 DELETE CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="bg-gray-900 p-6 rounded-xl shadow-2xl w-96 border border-gray-700">

            <h2 className="text-xl font-bold text-red-500 mb-4">
              Confirm Delete
            </h2>

            <p className="text-gray-300 mb-6">
              Are you sure you want to delete{" "}
              <span className="text-white font-semibold">
                {movie.movieTitle}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;