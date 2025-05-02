import React from "react";
import Marquee from "react-fast-marquee";

const HeaderMarquee = () => {
  return (
    <section className="bg-accent p-3 flex items-center gap-x-3 mt-5">
      <span className="bg-primary text-white py-2 px-4">Latest</span>
      <Marquee pauseOnHover={true}>
        <div className="text-secondary font-medium cursor-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis, cum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima sapiente quos neque adipisci sunt
          optio corporis praesentium dolorum eaque beatae!
        </div>
      </Marquee>
    </section>
  );
};

export default HeaderMarquee;
