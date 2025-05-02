import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

function App() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-5 lg:px-0">
        <section className="grid grid-cols-5 gap-5">
          <LeftSidebar />
          <main className="col-span-3">
            <Outlet />
          </main>
          <aside className="col-span-1">Right sidebar</aside>
        </section>
      </section>
    </>
  );
}

export default App;
