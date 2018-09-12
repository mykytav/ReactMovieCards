import React from 'react';

const FavoriteButtonComponent = ({
  handleFavoriteClick,
  favoriteIds,
  movies
}) => (
  <span className="btn-favorite icon  is-large" onClick={handleFavoriteClick}>
    {favoriteIds.includes(movies.id) ? (
      <i className="fas fa-2x fa-trash-alt" style={{ color: 'white' }} />
    ) : (
      <i className="fas fa-2x fa-heart" style={{ color: 'red' }} />
    )}
  </span>
);

export default FavoriteButtonComponent;
