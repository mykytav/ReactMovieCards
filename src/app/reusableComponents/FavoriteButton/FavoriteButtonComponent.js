import React from 'react';

const FavoriteButtonComponent = ({
  handleFavoriteClick,
  favoriteIds,
  individualMovie
}) => (
  <span className="btn-favorite icon  is-large" onClick={handleFavoriteClick}>
    {individualMovie && favoriteIds.includes(individualMovie.id) ? (
      <i className="fas fa-2x fa-trash-alt" />
    ) : (
      <i className="fas fa-2x fa-heart" />
    )}
  </span>
);

export default FavoriteButtonComponent;
