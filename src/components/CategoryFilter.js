import React from "react";

function CategoryFilter({ categories, currentCategory, setCurrentCategory }) {
  const handleClass = (category) => {
    setCurrentCategory(category);
  };

  const categoryList = categories.map((category, index) => (
    <div key={index}>
      <button
        onClick={() => handleClass(category)}
        className={currentCategory === category ? "selected" : ""}
      >
        {category}
      </button>
    </div>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
