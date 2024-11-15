import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config({path: '../.env'});

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ extended: false }));

const userID = process.env.USER_ID;
const apiKey = process.env.API_KEY;

// Proxy route to handle API requests
// app.post('/api/proxy', async (req, res) => {
//     try {
//       const response = await axios.post('https://api.play.ht/api/v2/tts/stream', req.body, {
//         headers: {
//             accept: 'audio/mpeg',
//             'content-type': 'application/json',
//             AUTHORIZATION: `${apiKey}`,
//             'X-USER-ID': `${userID}`
//         }
//       });
//       res.send(response.data); // Forward the response data back to your React app
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error forwarding request');
//     }
//   });


  app.get("/stream-audio", async (req, res) => {
    const url = "https://api.play.ht/api/v2/tts/stream";
    const options = {
      method: "POST",
      headers: {
        accept: "audio/mpeg",
        "content-type": "application/json",
        "X-USER-ID": `${userID}`,
        AUTHORIZATION: `${apiKey}`,
      },
      body: JSON.stringify({
        voice_engine: "Play3.0-mini",
        text: "Hey, this is Jennifer from Play. Please hold on a moment...",
        voice: "s3://voice-cloning-zero-shot/manifest.json",
        output_format: "mp3",
        sample_rate: "44100",
        speed: 1,
      }),
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch audio" });
      }
  
      // Stream the audio response directly to the client
      res.setHeader("Content-Type", "audio/mpeg");
      response.body.pipe(res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));