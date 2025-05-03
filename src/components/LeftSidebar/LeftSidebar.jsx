import React from "react";
import CategoryList from "../CategoryList/CategoryList";

const LeftSidebar = () => {
  return (
    <aside className="col-span-1 sticky left-0 top-2 h-fit">
      <div>
        <h3 className="text-secondary font-semibold text-lg">
          All Caterogy
        </h3>
      </div>
      <CategoryList />
    </aside>
  );
};

export default LeftSidebar;
