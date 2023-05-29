import React, { useState, useEffect } from 'react';

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
      <h1>
          Repo list
      </h1>
      <div>
        {repoList.map((repo, index) => (
          <li key={index}>
            <h3>Name: {repo.name}</h3>
            <p>Description: {repo.description}</p>
            <p>Language: {repo.language}</p>
            <p>Branches: {repo.branches}</p>
          </li>
        ))}
      </div>
    </>
  );
}