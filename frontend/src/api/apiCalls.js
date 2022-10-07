import axios from "axios";

export const login = (creds) => {
  return axios.post("/api/1.0/auth", {}, { auth: creds });
};

export const signup = (body) => {
  return axios.post("/api/1.0/users", body);
};
