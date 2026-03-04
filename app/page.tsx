import React from "react";
import Header from "@/components/header/Header";
import Hero from "@/components/sections/hero/Hero";

function page() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center w-full max-w-7xl px-4">
        <Hero />
      </div>
    </div>
  );
}

export default page;
