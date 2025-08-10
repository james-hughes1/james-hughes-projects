import React from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="projects-section">
        <h2>Projects</h2>
        <ProjectCard />
      </section>
    </>
  );
}
