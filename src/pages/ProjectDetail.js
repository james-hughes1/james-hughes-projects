import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.details}</p>
      <ul>
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link to="/" className="btn small">Back to Home</Link>
    </section>
  );
}
