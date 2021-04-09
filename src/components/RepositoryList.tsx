import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [username, setUsername] = useState<string>("");

  let inputData: string = "";

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setRepositories(data));
    }
  }, [username]);

  function getInputData(data: { target: { value: string } }) {
    inputData = data.target.value;
  }

  return (
    <div className="repository-container">
      <section className="repository-list">
        <h1>Github repository list</h1>
        <div className="repository-input">
          <input
            placeholder="Enter the github username"
            onChange={getInputData}
          />
          <button onClick={() => setUsername(inputData)}>Load</button>
        </div>
        <ul>
          {username
            ? repositories.map((repository) => (
                <RepositoryItem key={repository.id} repository={repository} />
              ))
            : null}
        </ul>
      </section>
    </div>
  );
}
