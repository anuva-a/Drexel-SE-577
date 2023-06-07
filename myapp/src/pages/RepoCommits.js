import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RepoCommits() {
  const { repoName } = useParams();
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/repositories/${repoName}/commits`)
      .then(response => response.json())
      .then(data => {
        setCommits(data.commits.reverse());
        console.log("data:", data);
      })
      .catch(error => console.error(error));
  }, [repoName]);

  return (
    <>
      <h1>Commits for {repoName}</h1>
      <div>
        {commits.map((commit, index) => (
          <li key={index}>
            <p> <b>Commit {index+1}</b> </p>
            <p> Message: {commit.message}</p>
          </li>
        ))}
      </div>
    </>
  );
}
