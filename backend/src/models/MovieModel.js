import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    movieTitle: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    runtime: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    imdb_rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
