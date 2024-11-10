import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import React from "react";
import RecentProjects from "../components/RecentProjects";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="ma-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default page;
