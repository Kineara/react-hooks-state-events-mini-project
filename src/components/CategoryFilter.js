import React from "react";

function CategoryFilter({ categories }) {
  const categoriesEls = categories.map((category) => {
    return (
      <button key={category} onClick={(e) => e.target.classList.toggle("selected")}>
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
