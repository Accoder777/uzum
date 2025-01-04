import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import envData from "../config/env";

const baseQuery = fetchBaseQuery({
  baseUrl: envData.baseUrl,
  prepareHeaders: (headers, {getState}) => {
    headers.set('Accept', 'application/json');

    // const token = getState().auth.token;
    // ...

    return headers;
  },
  credentials: 'same-origin'
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery,
  endpoints: (builder) => ({}),
});
