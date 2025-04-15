import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from '../../../utils/api';

const fetchUpcomingMovies = async () => {
  try {
    const response = await api.get('/movie/upcoming');
    console.log("API Response:", response.data);  
    return response.data;
  } catch (error) {
    console.error("API Error:", error); 
    throw error;  
  }
};

const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["upcomingMovies"], 
    queryFn: fetchUpcomingMovies, 
  });
};

export default useUpcomingMoviesQuery;
