import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";
import Home from "@/components/sections/home/Home";
import AboutMobile from "@/components/sections/aboutMobile/AboutMobile";
import ExperienceList from "@/components/sections/experience/ExperienceList";
import NavBar from "@/components/Navigation";
import ResumeButton from "@/components/ResumeButton";

function page() {
  return (
    <div
      id="page"
      className="flex flex-col items-center font-sans px-8 w-full h-screen overflow-y-auto"
    >
      <NavBar />
      <Home />
      <AboutMobile />
      <ResumeButton />
      <ExperienceList />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default page;
