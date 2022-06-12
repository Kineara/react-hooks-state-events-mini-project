import React from "react";

function CategoryFilter({categories}) {
  const categoriesEls = categories.map((category) => {
    return <button id={category}>{category}</button>
  })
                                       
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoriesEls}
    </div>
  );
}

export default CategoryFilter;
