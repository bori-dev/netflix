import React from 'react';
import { Badge } from 'react-bootstrap'; 
import { FaStar, FaUsers, FaUserShield } from 'react-icons/fa'; 
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../pages/HomePage/Hooks/useMovieGenre';

const MovieCard = ({ movie }) => {

  const {data:genreData} = useMovieGenreQuery(); 
 
  const showGenre = (genreIdList) => {
   if(!genreData) return []
   const genreNameList = genreIdList.map((id)=> {
    const genreObj = genreData.find((genre)=>genre.id === id)
    return genreObj.name; 
   })

   return genreNameList 

  }

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path})`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h3>{movie.title}</h3>
        <div className="genre-container">
          {showGenre(movie.genre_ids).map((genre, index) => (
            <Badge key={index} bg="danger" className="genre-badge">
              {genre}
            </Badge>
          ))}
        </div>

        <div className="info-item">
          <FaStar /> <span>{movie.vote_average}</span>
        </div>
        <div className="info-item">
          <FaUsers /> <span>{movie.popularity}</span>
        </div>
        <div className="info-item">
          <FaUserShield /> <span>{movie.adult ? 'over 18' : 'under 18'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
