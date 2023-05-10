const express = require('express');
const yaml = require('yaml');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const config = yaml.parse(fs.readFileSync('/Users/anuva/Documents/Academic terms/Spring 2022-23/SE 577/Drexel-SE-577/myapp/src/microservice/config/repositories.yml', 'utf8'));

app.use(cors()); // enable CORS

app.get('/repositories', (req, res) => {
    res.json({ repositories: config.repositories });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
