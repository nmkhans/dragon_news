import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Header/Header";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/news-detail");

  return (
    <>
      <Header />
      <section className="container mx-auto px-5 lg:px-0">
        <section className="grid grid-cols-5 gap-5">
          {!isDetailPage && <LeftSidebar />}
          <main
            className={`${
              isDetailPage ? "col-span-4" : "col-span-3"
            }`}
          >
            <div className="mb-5">
              <h3 className="text-secondary font-semibold text-lg">
                Dragon News Home
              </h3>
            </div>
            <Outlet />
          </main>
          <RightSidebar />
        </section>
      </section>
    </>
  );
}

export default App;
