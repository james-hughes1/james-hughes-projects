import React from "react";

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose} aria-label="Close sidebar">
        ✕
      </button>
      <img src="/ljubljana_castle.jpg" alt="Me" className="profile-pic" />
      <p className="bio">
        I made this page to organise all of my personal projects in one place.
        They cover AI, data science, and programming.
        For each one I have written a summary of what I did and what I learnt.
      </p>
      <div className="links">
        <a href="https://linkedin.com/in/jameshughes-1" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/james-hughes1" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </aside>
  );
}
