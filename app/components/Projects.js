"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {repos.map((repo) => (
        <div
          key={repo.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "280px",
          }}
        >
          <h3>{repo.name}</h3>

          <p style={{ fontSize: "14px" }}>
            {repo.description || "No description"}
          </p>

          <a href={repo.html_url} target="_blank">
            View on GitHub →
          </a>
        </div>
      ))}
    </div>
  );
}