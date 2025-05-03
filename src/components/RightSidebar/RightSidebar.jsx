import React from "react";
import SocialNavigation from "../SocialNavigation/SocialNavigation";

const RightSidebar = () => {
  return (
    <aside className="col-span-1">
      <div>
        <h3 className="text-secondary font-semibold text-lg">
          Login With
        </h3>
      </div>
      <SocialNavigation />
    </aside>
  );
};

export default RightSidebar;
