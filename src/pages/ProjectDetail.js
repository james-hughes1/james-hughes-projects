import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  return (
    <section className="project-detail">
      <h2>Project One</h2>
      <p>
        This is a detailed page about Project One. Here you can explain what
        you did, technologies used, challenges, and what you learned.
      </p>
      <ul>
        <li>Built with React and Node.js</li>
        <li>Implemented responsive design</li>
        <li>Integrated with external APIs</li>
      </ul>
      <Link to="/" className="btn small">
        Back to Home
      </Link>
    </section>
  );
}
