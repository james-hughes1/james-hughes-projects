import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";

export default function Home({ onOpenSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <button className="hamburger-btn" onClick={onOpenSidebar} aria-label="Open sidebar">
        &#9776;
      </button>

      <section className="hero">
        <h1>Project Portfolio</h1>
      </section>

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map(({ id, title, description, imageUrl }) => (
            <button
              key={id}
              className="project-card"
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={() => navigate(`/project/${id}`)}
              aria-label={`View details for ${title}`}
            >
              <div className="overlay" />
              <h3>{title}</h3>
              <p>{description}</p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
