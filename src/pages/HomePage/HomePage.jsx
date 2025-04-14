import React from 'react'
import Banner from './components/Banner/Banner' 
import '../../App.css'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

const HomePage = () => {
  return (
    <div>
      <Banner /> 
      <PopularMovieSlide />
      <UpcomingMovieSlide />
    </div>
  )
}

export default HomePage
