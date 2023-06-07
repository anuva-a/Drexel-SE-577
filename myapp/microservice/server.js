require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // enable CORS

const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

app.get('/repositories', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/users/anuva-a/repos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const repositories = response.data.map(repo => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      branches: repo.branches,
      url: repo.url,
    }));

    res.json({ repositories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
});

app.get('/repositories/:repoName/commits', async (req, res) => {
  try {
    const { repoName } = req.params;
    const response = await axios.get(`https://api.github.com/repos/anuva-a/${repoName}/commits`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const commits = response.data.map(commit => ({
      message: commit.commit.message,
    }));

    res.json({ commits });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch commits' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
