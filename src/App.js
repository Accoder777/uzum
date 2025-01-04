import React from "react";
import { useGetTrendingMovieQuery } from "./features/movie/movieApi";
import "./styles/App.css";

const App = () => {
  // API
  const trendingMovieRes = useGetTrendingMovieQuery("all");
  console.log("🚀 ~ App ~ trendingMovieRes:", trendingMovieRes);

  return (
    <div>
      Hello
    </div>
  );
};

export default App;
