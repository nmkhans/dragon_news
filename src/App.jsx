import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-5 lg:px-0">
        <section className="grid grid-cols-3 gap-5">
          <aside>Left sidebar</aside>
          <main>
            <Outlet />
          </main>
          <aside>Right sidebar</aside>
        </section>
      </section>
    </>
  );
}

export default App;
