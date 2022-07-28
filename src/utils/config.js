import React from "react";

import axios from "axios";

const api_key = process.env.TMDB_KEY;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: api_key,
    language: "pt-BR",
  },
});
