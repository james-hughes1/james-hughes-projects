import React from "react";

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose} aria-label="Close sidebar">
        ✕
      </button>
      <img src="/ljubljana_castle.jpg" alt="Me" className="profile-pic" />
      <p className="bio">
        This page summarises some of my recent technical work in one place.
        The projects have helped me develop my skills in AI, quantitative analysis, programming, and more.
        For each one I have written a summary of what I did and what I learnt.
        Each summary has a link to the code and some have interactive demos/webapps.
      </p>
      <p className="bio">
        I always appreciate any feedback, or questions, or suggestions - please connect with me via GitHub/LinkedIn below.
      </p>
      <div className="links">
        <a href="https://linkedin.com/in/jameshughes-1" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/james-hughes1" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </aside>
  );
}
