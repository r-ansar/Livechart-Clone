import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card-container">
      <i className="fa-regular fa-bookmark bookmark-icon"></i>
      <div className="anime-card">
        <div className="anime-card-header">
          <p className="anime-title">
            <a href="#" className="anime-title-link">{anime.title}</a>
           </p>
          <p className="anime-genres">
            {anime.genres.map((genre, index) => (
              <span key={index}>
                <a href="#" className="genre-link">{genre}</a>
                {index < anime.genres.length - 1 && ' · '}
              </span>
            ))}
          </p>
        </div>

        <div className="anime-card-main">
          <div className="anime-card-image-section">
            <div className="episode-info">{anime.episodeInfo}</div>
            <div className="anime-rating">
              <i className="fa-solid fa-star star-icon"></i> {anime.rating}
            </div>
            <img src={anime.image} alt={anime.title} className="anime-image" />
          </div>

          <div className="anime-card-details">
            <div className="studio-name">
              <p><a href="#" className="studio-link">{anime.studio}</a></p>
            </div>
            <div className="air-date">
              <p>{anime.airDate}</p>
            </div>
            <div className="anime-meta">
              <span className="anime-source">{anime.source}</span>
              <span className="anime-duration">{anime.duration}</span>
            </div>
            <div className="anime-description">{anime.description}</div>
          </div>
        </div>

        <div className="anime-card-footer">
          <i className="fa-solid fa-globe"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-firefox"></i>
        </div>

      </div>
    </div>
  );
};

export default AnimeCard;
