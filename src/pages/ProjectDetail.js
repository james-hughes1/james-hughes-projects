import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="project-detail not-found">
        <h2>Project Not Found</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>{project.title}</h1>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
        <p className="project-details">{project.details}</p>
      </div>
    </div>
  );
}
