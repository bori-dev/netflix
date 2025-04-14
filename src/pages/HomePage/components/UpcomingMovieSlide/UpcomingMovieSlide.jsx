import React from 'react';
import useUpcomingMoviesQuery from '../../Hooks/useUpcomingMovie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard'; 
import './UpcomingMovieSlide.style.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.log("Error:", error);  
    return <Alert variant="danger">{error.message}</Alert>;
  }

  console.log("Data from API:", data);  

  if (data && data.results && Array.isArray(data.results) && data.results.length > 0) {
    return (
      <div>
        <h3>Upcoming Movies</h3>
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="movie-slider p-1"
          containerClass="carousel-container"
          responsive={responsive}
        >
          {data.results.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </Carousel>
      </div>
    );
  }

  return <h1>No Movies Available</h1>;
};


export default UpcomingMovieSlide;
