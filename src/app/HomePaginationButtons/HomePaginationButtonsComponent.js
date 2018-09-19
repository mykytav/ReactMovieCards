import React from 'react';

import HomePaginationListButtons from './HomePaginationListButtons';

const PaginationButtonsComponent = props => {
  const {
    currentPage,
    totalPages,
    handleNextPageClick,
    handlePrevPageClick
  } = props;
  return (
    <div className="btn-pagination pagination is-centered is-rounded">
      <a
        className="btn-pagination-prev pagination-previous"
        disabled={currentPage === 1}
        onClick={handlePrevPageClick}
      >
        Previous Page
      </a>
      <a
        className="btn-pagination-next pagination-next"
        disabled={totalPages <= currentPage}
        onClick={handleNextPageClick}
      >
        Next Page
      </a>
      <HomePaginationListButtons
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageNumberClick={props.handlePageNumberClick}
      />
    </div>
  );
};

export default PaginationButtonsComponent;
