import React from 'react';

const FavoriteButtonComponent = props => (
  <button className="btn-favorite" onClick={props.handleFavoriteClick}>
    {props.favoriteIds.includes(props.movies.id)
      ? 'Remove from favorite'
      : 'Add to favorite'}
  </button>
);

export default FavoriteButtonComponent;
