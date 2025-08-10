import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* background image */}
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${project.image})` }}
        aria-hidden="true"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech-stack">{project.tech.join(" | ")}</p>
      <Link to={`/project/${project.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
