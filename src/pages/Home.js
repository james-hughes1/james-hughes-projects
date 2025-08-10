import React from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Home({ onOpenSidebar }) {
  return (
    <>
      <button
        className="hamburger-btn"
        onClick={onOpenSidebar}
        aria-label="Open sidebar"
      >
        &#9776;
      </button>

      <Hero />

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
