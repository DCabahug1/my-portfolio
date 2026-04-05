"use client";
import HeroText from "./HeroText";
import HeroTags from "./HeroTags";
import HeroSearch from "./HeroSearch";
import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";
import HeroPortrait from "./HeroPortrait";

function Hero() {
  return (
    <div id="hero" className="w-full flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-16 md:h-[85svh]">
        <div className="flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left">
          <HeroText />
          <HeroTags />
          <HeroSearch />
          <HeroActions />
          <HeroSocials />
        </div>
        <HeroPortrait />
      </div>
    </div>
  );
}

export default Hero;
