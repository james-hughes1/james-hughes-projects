import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="https://via.placeholder.com/120"
        alt="Your Name"
        className="sidebar-avatar"
      />
      <h2>Your Name</h2>
      <p>Passionate developer building modern web apps.</p>
      <div className="sidebar-links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </aside>
  );
}
