import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

// over here the code will execute before you send out the request
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // add a access token
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
