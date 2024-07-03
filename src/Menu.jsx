import React from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";
import Pagination from "./Components/pagination";
const Menu = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Logic to slice items based on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="section-center">
      {currentItems.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
      <Pagination
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Menu;
