//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieOfTheDay from "./pages/MovieOfTheDay/MovieOfTheDay";
import RandomMovie from "./pages/RandomMovie/RandomMovie";
import About from "./pages/About/About";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movie-of-the-day" element={<MovieOfTheDay />} />
          <Route path="/random" element={<RandomMovie />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
