import React from "react";

function CategoryFilter({ categories, clickHandler, selectedFilter }) {
  const categoriesEls = categories.map((category) => {
    return (
      <button
        id={category}
        className={category === selectedFilter ? "selected" : null}
        onClick={clickHandler}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoriesEls}
    </div>
  );
}

export default CategoryFilter;
