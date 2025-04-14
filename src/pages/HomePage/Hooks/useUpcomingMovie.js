import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from '../../../utils/api';

const fetchUpcomingMovies = async () => {
  const response = await api.get('/movie/upcoming');
  console.log("upcomimg", response.data);  
};


const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["upcomingMovies"], 
    queryFn: fetchUpcomingMovies, 
  });
};

export default useUpcomingMoviesQuery;
