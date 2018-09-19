import React from 'react';

import MovieCardContainer from '../reusableComponents/MovieCard/MovieCardContainer';
import { generateGenreName } from '../../utils';

const GenreComponent = ({ movies, genreName }) => (
  <React.Fragment>
    <h2 className="genre-title title has-text-centered">
      Genre: {generateGenreName(genreName)}
    </h2>
    <div className="genre main">
      {movies.map(movie => (
        <MovieCardContainer key={movie.id} movieInfo={movie} />
      ))}
    </div>
  </React.Fragment>
);

export default GenreComponent;
