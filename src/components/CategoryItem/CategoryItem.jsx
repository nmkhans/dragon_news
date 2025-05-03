import React from "react";
import { useNavigate } from "react-router";

const CategoryItem = ({
  selected,
  category,
  setSelectedCategory,
}) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    setSelectedCategory(category.id);
    navigate(
      category.id === 0 ? "/" : `/category-news/${category.id}`
    );
  };

  return (
    <div
      onClick={handleCategoryClick}
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
