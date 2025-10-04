import React, { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    backgroundColor: "#F3F4F6",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    boxSizing: "border-box",
  };

  const card = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // stack di mobile
    width: "100%",
    maxWidth: "960px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    background: "#fff",
  };

  const left = {
    width: isMobile ? "100%" : "50%",
    height: isMobile ? "200px" : "auto",
    background: "#e5e7eb",
    flexShrink: 0,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const right = {
    width: isMobile ? "100%" : "50%",
    padding: isMobile ? "1.5rem" : "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  const title = {
    fontSize: isMobile ? "1.3rem" : "1.6rem",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "1.5rem",
    textAlign: "center",
  };

  const label = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "#374151",
    marginBottom: "0.5rem",
  };

  const input = {
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "0.95rem",
    borderRadius: "8px",
    border: "1px solid #D1D5DB",
    marginBottom: "1rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    boxSizing: "border-box",
  };

  const button = {
    width: "100%",
    padding: "0.75rem 1rem",
    fontWeight: 700,
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#3B82F6",
    color: "#fff",
    fontSize: "1rem",
  };

  const handleMouseOver = (e) =>
    (e.currentTarget.style.backgroundColor = "#2563EB");
  const handleMouseOut = (e) =>
    (e.currentTarget.style.backgroundColor = "#3B82F6");

  return (
    <div style={container}>
      <div style={card}>
        <div style={left}>
          <img
            src="https://placehold.co/600x500"
            alt="placeholder"
            style={imageStyle}
          />
        </div>

        <div style={right}>
          <h2 style={title}>Login</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" style={label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email"
                style={input}
              />
            </div>
            <div>
              <label htmlFor="password" style={label}>
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password"
                style={input}
              />
            </div>
            <button
              type="submit"
              style={button}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
