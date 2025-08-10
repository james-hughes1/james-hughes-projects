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

      <div className="hero">
        <img src="/ide-background.jpg" alt="Hero" className="hero-img" />
        <div className="hero-overlay"></div>
        <h1 className="hero-title">James' Project Space</h1>
      </div>

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
