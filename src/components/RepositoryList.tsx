import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

const username = "rogerpolvr";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <div className="repository-container">
      <section className="repository-list">
        <h1>Github repository list</h1>
        <div className="repository-input">
          <input placeholder="Enter the github username" />
          <button>Load</button>
        </div>
        <ul>
          {repositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </ul>
      </section>
    </div>
  );
}
