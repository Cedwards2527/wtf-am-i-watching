//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieOfTheDay from "./pages/MovieOfTheDay/MovieOfTheDay";
import RandomMovie from "./pages/RandomMovie/RandomMovie";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/movie-of-the-day" element={<MovieOfTheDay />} />
          <Route path="/random" element={<RandomMovie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
