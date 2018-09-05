import React from 'react';

const PaginationButtonsComponent = props => (
  <div className=" buttons">
    <button
      className="buttons--prev"
      disabled={props.currentPage === 1}
      onClick={props.handlePrevPageClick}
    >
      Previous Page
    </button>
    <button
      className="buttons--next"
      disabled={props.totalPages <= props.currentPage}
      onClick={props.handleNextPageClick}
    >
      Next Page
    </button>
  </div>
);

export default PaginationButtonsComponent;
