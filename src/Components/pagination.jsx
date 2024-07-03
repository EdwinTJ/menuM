import React, { useState } from "react";
import "../styles/Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => handleClick(i)}
        className={`pagination-button ${currentPage === i ? "active" : ""}`}
      >
        {i}
      </button>
    );
  }

  return <div className="pagination-container">{pages}</div>;
};

export default Pagination;
