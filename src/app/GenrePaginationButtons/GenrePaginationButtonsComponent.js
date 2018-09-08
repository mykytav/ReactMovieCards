import React from 'react';

const GenrePaginationButtonsComponent = ({
  handleNextPageClick,
  handlePrevPageClick,
  totalPages,
  currentPage
}) => (
  <div className=" buttons">
    <button
      className="buttons--prev"
      disabled={currentPage === 1}
      onClick={handlePrevPageClick}
    >
      Previous Page
    </button>
    <button
      className="buttons--next"
      disabled={totalPages <= currentPage}
      onClick={handleNextPageClick}
    >
      Next Page
    </button>
  </div>
);

export default GenrePaginationButtonsComponent;
