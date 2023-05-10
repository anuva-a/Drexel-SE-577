import * as React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

export default function Home() {
  return (
    <>
      <h1>View my repositories here</h1>
      <div className="Navigation_tab">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/repolist">RepoList</Link>
        </button>
        <button>
          <Link to="/repodetails">RepoDetails</Link>
        </button>
      </div>
    </>
  );
}