import React from 'react';
import { Badge } from 'react-bootstrap'; // Badge 임포트
import { FaStar, FaUsers, FaUserShield } from 'react-icons/fa'; // 적절한 아이콘으로 수정
import './MovieCard.style.css';

const MovieCard = ({ movie }) => {
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
          {movie.genre_ids.map((id) => (
            <Badge key={id} bg="danger" className="genre-badge">
              {id}
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
