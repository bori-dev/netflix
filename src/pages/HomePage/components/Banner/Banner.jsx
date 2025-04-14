import React from 'react'
import { usePopularMoviesQuery } from '../../Hooks/usePopularMovie';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './Banner.style.css'

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();


  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  if (data && data.results && data.results.length > 0) {
    return (
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w533_and_h300_bestv2/${data?.results[0].poster_path})`,
          backgroundSize: 'cover',
          height: '300px',
          backgroundPosition: 'center',
        }}
        className="banner"
      >
        <div className="text-white banner-text-area"> 
          <h1> {data?.results[0].title}</h1>
          <p> {data?.results[0].overview}</p>
        </div>
      </div>
    );
  }

  return <div>No popular movies available</div>;
};

export default Banner;
