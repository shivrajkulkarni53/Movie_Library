import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import EditMoviePage from "./pages/EditMoviePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/movie/edit/:id" element={<EditMoviePage />} />
    </Routes>
  );
};

export default App;