import React from "react";
import { useGetTrendingMovieQuery } from "./features/movie/movieApi";
import "./styles/App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  );
};

export default App;
