// src/components/GitHubProjects.tsx
import React, { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = "philstorm";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const primary = [
          "ai-governance-risk",
          "incident-response-playbook",
          "vulnerability-scan",
        ];
        const filtered = data
          .filter((r) => primary.includes(r.name))
          .sort((a, b) => primary.indexOf(a.name) - primary.indexOf(b.name));
        setRepos(filtered);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1>Featured GitHub Projects</h1>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div className="project" key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h2>{repo.name.replace(/-/g, " ")}</h2>
            </a>
            <p>{repo.description ?? "No description provided."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
