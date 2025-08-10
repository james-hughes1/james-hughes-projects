import React from "react";

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* Close button - only on mobile */}
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      <div className="sidebar-content">
        <img src="/ljubljana_castle.jpg" alt="Me" className="profile-pic" />
        <p className="bio">I made this page to organise all of my personal projects in one place.
        They cover a range of different techniques spanning AI, data science, and programming.
        I learned something new doing each one, and typically there is something interesting to show for each one.</p>
        <div className="links">
            <a href="https://linkedin.com/in/jameshughes-1" target="_blank" rel="noreferrer">
            LinkedIn
            </a>
            <a href="https://github.com/james-hughes1" target="_blank" rel="noreferrer">
            GitHub
            </a>
        </div>
      </div>
    </aside>
  );
}
