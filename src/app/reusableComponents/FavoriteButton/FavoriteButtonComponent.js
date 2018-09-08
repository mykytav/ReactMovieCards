import React from 'react';

const FavoriteButtonComponent = ({
  handleFavoriteClick,
  favoriteIds,
  movies
}) => (
  <button className="btn-favorite" onClick={handleFavoriteClick}>
    {favoriteIds.includes(movies.id)
      ? 'Remove from favorite'
      : 'Add to favorite'}
  </button>
);

export default FavoriteButtonComponent;
