import React from "react";

const CategoryItem = ({
  selected,
  category,
  setSelectedCategory,
}) => {
  return (
    <div
      onClick={() => setSelectedCategory(category.id)}
      className={`${
        selected
          ? "bg-accent font-semibold text-secondary"
          : "bg-white text-[#9F9F9F]"
      } hover:bg-accent flex items-center justify-start p-5 cursor-pointer rounded`}
    >
      <h3>{category.name}</h3>
    </div>
  );
};

export default CategoryItem;
