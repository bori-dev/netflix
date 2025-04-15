import React from 'react';
import usePopularMoviesQuery from '../../Hooks/usePopularMovie';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'react-bootstrap';
import '../../../../common/MovieSlider/MovieSlider'
import {responsive} from "../../../../constants/responsive"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import useTopRatedMoviesQuery from '../../Hooks/useTopRatedMovies';
import './PopularMovieSlide.style.css'

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const { data: topRatedMovies, isLoading: isTopRatedLoading, isError: isTopRatedError, error: topRatedError } = useTopRatedMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isTopRatedLoading) {
    return <h1>Loading Top Rated Movies...</h1>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  if (isTopRatedError) {
    return <Alert variant="danger">{topRatedError.message}</Alert>;
  }

  if (data && data.results && data.results.length > 0) {
    return (
      <div>
             {/* Popular Movies */}
           <MovieSlider title="Popular Movies" movies={data.results} responsive={responsive}  className="movie-slider-title"/> 
             {/* Top Rated Movies */}
           {topRatedMovies && topRatedMovies.results && topRatedMovies.results.length > 0 && (
           <MovieSlider title="Top Rated Movies" movies={topRatedMovies.results} responsive={responsive} />
      )}


      </div>
    );
  }

  return <h1>No Movies Available</h1>;
};

export default PopularMovieSlide;

