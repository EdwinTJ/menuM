import React, { useState } from "react";

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
        style={{
          fontWeight: currentPage === i ? "bold" : "normal",
          cursor: "pointer",
        }}
      >
        {i}
      </button>
    );
  }

  return <div>{pages}</div>;
};

export default Pagination;
