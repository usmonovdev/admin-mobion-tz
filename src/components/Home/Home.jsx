import React from "react";
import { Contact, Faq, Hero, NewProducts, Products } from "../index";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 last:pb-6">
      <Hero />
      <NewProducts />
      <Products />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
