const express = require('express');
const yaml = require('yaml');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
const configPath = path.join(__dirname, 'config', 'repositories.yml');
const config = yaml.parse(fs.readFileSync(configPath, 'utf8'));

app.use(cors()); // enable CORS

app.get('/repositories', (req, res) => {
    res.json({ repositories: config.repositories });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
