import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RepoList() {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/repositories')
      .then(response => response.json())
      .then(data => {
        setRepoList(data.repositories);
        console.log("data:", data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1>Repo list</h1>
      <div>
        {repoList ? (
          repoList.map((repo, index) => (
            <li key={index}>
              <h3>Name: {repo.name}</h3>
              <p>Description: {repo.description}</p>
              <p>Language: {repo.language}</p>
              <p>Branches: {repo.branches}</p>
              <p>URL: <a href={repo.url}>{repo.url}</a></p>
              <Link to={`/repolist/commits/${repo.name}`}>View Commits</Link>
            </li>
          ))
        ) : (
          <p>Loading repositories...</p>
        )}
      </div>
    </>
  );
}
