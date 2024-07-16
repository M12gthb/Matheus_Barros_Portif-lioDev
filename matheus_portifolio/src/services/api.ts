"use client";

import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://api.github.com/users/M12gthb/repos?sort=created&direction=desc",
  timeout: 20000,
});
