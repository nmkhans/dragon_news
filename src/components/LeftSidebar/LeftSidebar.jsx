import React from "react";
import CategoryList from "../CategoryList/CategoryList";

const LeftSidebar = () => {
  return (
    <aside className="col-span-1">
      <CategoryList />
    </aside>
  );
};

export default LeftSidebar;
