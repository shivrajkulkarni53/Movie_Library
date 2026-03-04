import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../lib/axios";
import MovieCard from "../components/MovieCard";
import { Film } from "lucide-react";
import banner from "../asset/batman2.jpg";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("/movie");
        setMovies(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, []);

  // 🔎 FILTER MOVIES
  const filteredMovies = movies.filter((movie) => {
    const directorMatch = movie.director
      .toLowerCase()
      .includes(searchDirector.toLowerCase());

    const ratingMatch =
      searchRating === ""
        ? true
        : Number(movie.imdb_rating) === Number(searchRating);

    const genreMatch =
      genreFilter === "" || movie.genre === genreFilter;

    return directorMatch && ratingMatch && genreMatch;
  });

  return (
    <div className="min-h-screen bg-black text-white">

      {/* BATMAN HERO SECTION */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold text-yellow-400 flex items-center gap-3">
              <Film size={36} />
              Movie Library
            </h1>

            <p className="text-gray-300 mt-2">
              Explore • Add • Manage Your Favorite Movies
            </p>
          </div>

          <Link
            to="/create"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 shadow-lg"
          >
            + New Movie
          </Link>

        </div>
      </div>

      {/* SEARCH + FILTER SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-6">

        {/* Search Director */}
        <input
          type="text"
          placeholder="Search by Director"
          value={searchDirector}
          onChange={(e) => setSearchDirector(e.target.value)}
          className="input input-bordered w-full bg-gray-900 border-gray-700 text-white"
        />

        {/* Search Rating */}
        <input
          type="number"
          step="0.1"
          placeholder="Exact IMDb Rating"
          value={searchRating}
          onChange={(e) => setSearchRating(e.target.value)}
          className="input input-bordered w-full bg-gray-900 border-gray-700 text-white"
        />

        {/* Genre Dropdown */}
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="select select-bordered bg-gray-900 border-gray-700 text-white"
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Crime">Crime</option>
          <option value="Horror">Horror</option>
        </select>

      </div>

      {/* MOVIE GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-12">

        {filteredMovies.length === 0 ? (

          <div className="flex justify-center py-20">

            <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 text-center">

              <h2 className="text-2xl text-yellow-400 font-bold mb-4">
                🎬 No Movies Found
              </h2>

              <p className="text-gray-400 mb-6">
                Your movie library is empty.
              </p>

              <Link
                to="/create"
                className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400"
              >
                Add Your First Movie
              </Link>

            </div>

          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
                setMovies={setMovies}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default HomePage;