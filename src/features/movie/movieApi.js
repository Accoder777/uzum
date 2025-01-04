import envData from "../../config/env";
import { apiSlice } from "../../service/apiSlice";

const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Trending
    getTrendingMovie: builder.query({
      query: (trendingType) =>
        `/trending/${trendingType}/week?api_key=${envData.apiKey}`,
    }),
    // Get By Id
    getMovieById: builder.query({
      query: (id) => `/movie/${id}?api_key=${envData.apiKey}`,
    }),
  }),
});

export const { useGetTrendingMovieQuery, useGetMovieByIdQuery } = movieApiSlice;
