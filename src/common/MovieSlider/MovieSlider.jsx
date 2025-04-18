import React from 'react'
import "./MovieSlider.style.css"
import Carousel from 'react-multi-carousel'
import MovieCard from '../MovieCard/MovieCard'

const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
          <h3>{title}</h3>
              <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
              >
                {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
              </Carousel>
    </div>
  )
}

export default MovieSlider
