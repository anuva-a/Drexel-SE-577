import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import GistDisplay from './components/GistDisplay';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import RepoList from './pages/RepoList';
import RepoDetails from './pages/RepoDetails';

export default function App() {
  return (
    <><div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="repolist" element={<RepoList />} />
        <Route path="repodetails" element={<RepoDetails />} />
      </Routes>
    </div><div>
        <GistDisplay />
      </div></>
  );
}