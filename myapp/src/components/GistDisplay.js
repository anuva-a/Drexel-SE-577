import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GistDisplay = () => {
  const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
  const [gistData, setGistData] = useState(null);

  useEffect(() => {
    const fetchGistData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/gists/edd22096496cfd8c072deff5c76a4374',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setGistData(response.data);
      } catch (error) {
        console.error('Error fetching gist data:', error);
      }
    };

    fetchGistData();
  }, []);

  return (
    <div>
      {gistData ? (
        <pre>{gistData.files['helloWorld.py'].content}</pre>
      ) : (
        <p>Loading Gist...</p>
      )}
    </div>
  );
};

export default GistDisplay;

// const accessToken = process.env.GITHUB_ACCESS_TOKEN;