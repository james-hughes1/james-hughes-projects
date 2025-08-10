import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
  document.querySelector(".main-content")?.scrollTo(0, 0);
  document.querySelector(".app-container")?.scrollTo(0, 0);
}, [location]);

  return null;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main-content">
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route
            path="/"
            element={<Home onOpenSidebar={() => setSidebarOpen(true)} />}
          />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
