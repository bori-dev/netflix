import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import api from '../../../utils/api';

const fetchTopRatedMovies = async () => {
  const response = await api.get('/movie/top_rated');
  return response.data; 
};

const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: fetchTopRatedMovies,
  });
};

export default useTopRatedMoviesQuery;
