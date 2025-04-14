import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
});

// Popular Movies 가져오기
const fetchPopularMovies = () => {
  api.get("/movie/popular")
    .then((response) => {
      console.log("Popular movies:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching popular movies:", error.response?.data);
    });
};

// Upcoming Movies 가져오기
const fetchUpcomingMovies = () => {
  api.get("/movie/upcoming")
    .then((response) => {
      console.log("Upcoming movies:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching upcoming movies:", error.response?.data);
    });
};

// 두 API 호출을 연속적으로 실행
const fetchMovies = () => {
  fetchPopularMovies();
  fetchUpcomingMovies();
};

fetchMovies();

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // 요청이 보내지기 전에 실행할 코드
  return config;
}, function (error) {
  // 요청 에러 처리
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // 2xx 상태 코드일 때 실행되는 코드
  return response;
}, function (error) {
  // 2xx 상태 코드가 아닐 때 실행되는 코드
  return Promise.reject(error);
});

export default api;
