import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard() {
  const project = {
    title: "Project One",
    description: "A cool app that does amazing things.",
    tech: ["React", "Node.js", "CSS"],
  };

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech-stack">{project.tech.join(" | ")}</p>
      <Link to="/project" className="btn small">
        View Details
      </Link>
    </div>
  );
}
