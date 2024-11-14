import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({path: '../.env'})

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ extended: false }));

const userID = process.env.USER_ID;
const apiKey = process.env.API_KEY;

// Proxy route to handle API requests
app.post('/api/proxy', async (req, res) => {
    try {
      const response = await axios.post('https://api.play.ht/api/v2/tts/stream', req.body, {
        headers: {
            accept: 'audio/mpeg',
            'content-type': 'application/json',
            AUTHORIZATION: `${apiKey}`,
            'X-USER-ID': `${userID}`
        }
      });
      res.send(response.data); // Forward the response data back to your React app
    } catch (error) {
      console.error(error);
      res.status(500).send('Error forwarding request');
    }
  });
  
  app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));