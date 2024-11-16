import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import { userProfiles } from '../utilities/data.mjs';
import fetch from 'node-fetch';
import fs from 'fs';

dotenv.config({path: '../.env'});

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ extended: false }));

const userID = process.env.USER_ID;
const apiKey = process.env.API_KEY;


app.get("/api/audioProfiles", async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.play.ht/api/v2/voices',
    headers: {
      accept: "application/json",
      AUTHORIZATION: `${apiKey}`,
      'X-USER-ID': `${userID}`,
    }
  };
  try {     
    const response = await axios.request(options);
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/stream-audio/:name", async (req, res) => {
  const userName = req.params.name;
  const userProfile = userProfiles.find((profile) => profile.name === userName);

  if (!userProfile) {
    return res.status(404).json({ error: "User not found" });
  }

  const url = "https://api.play.ht/api/v2/tts/stream";

//AXIOS
  const options = {
    headers: {
      accept: "audio/mpeg",
      "content-type": "application/json",
      "X-USER-ID": `${userID}`,
      AUTHORIZATION: `${apiKey}`,
    },
    //responseType: "stream", // Ensure response is treated as a stream
  };

  const body = {
    voice_engine: "Play3.0-mini",
    text: userProfile.textToAudio, // Single text string
    voice: userProfile.voice_sample, // Single voice identifier
    output_format: "mp3",
    sample_rate: "44100",
    speed: 1,
  };

  try {
    // Axios POST request
    const response = await axios.post(url, body, options);

    if (response.status !== 200) {
      return res.status(response.status).json({ error: "Failed to fetch audio" });
    }

    // Stream the audio response directly to the client
    res.setHeader("Content-Type", "audio/mpeg");
    // res.json(response);
    response.data.pipe(res); // Stream audio directly to the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});




//   const options = {
//     method: "POST",
//     headers: {
//       accept: "audio/mpeg",
//       "content-type": "application/json",
//       "X-USER-ID": `${userID}`,
//       AUTHORIZATION: `${apiKey}`,
//     },
//     body: JSON.stringify({
//       voice_engine: "Play3.0-mini",
//       text: userProfile.textToAudio, // Single text string
//       voice: userProfile.voice_sample, // Single voice identifier
//       output_format: "mp3",
//       sample_rate: "44100",
//       speed: 1,
//     }),
//   };
  
//   const response = await fetch(url, options);
//   const readableStream = response.body;
  
//   // Pipe the readable stream to a writable stream, this can be a local file or any other writable stream
//   readableStream.pipe(fs.createWriteStream("./audio.mp3"));
// });




  
  // const options = {
  //         method: "POST",
  //         headers: {
  //           accept: "audio/mpeg",
  //           "content-type": "application/json",
  //           "X-USER-ID": `${userID}`,
  //           AUTHORIZATION: `${apiKey}`,
  //         },
  //         body: JSON.stringify({
  //           voice_engine: "Play3.0-mini",
  //           text: userProfile.textToAudio,
  //           voice: userProfile.voice_sample,
  //           output_format: "mp3",
  //           sample_rate: "44100",
  //           speed: 1,
  //         }),
  //       };
      
  //       try {
  //         const response = await fetch(url, options);
      
  //         if (!response.ok) {
  //           return res.status(response.status).json({ error: "Failed to fetch audio" });
  //         }
      
  //         // Stream the audio response directly to the client
  //         res.setHeader("Content-Type", "audio/mpeg");
  //         response.body.pipe(res);
  //       } catch (error) {
  //         console.error(error);
  //         res.status(500).json({ error: "Internal server error" });
  //       }
  //     });


  
  app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));


//   const options = {
//     method: 'POST',
//     url: 'https://api.play.ht/api/v2/tts/stream',
//     headers: {
//       accept: 'audio/mpeg',
//       'content-type': 'application/json',
//       AUTHORIZATION: `${apiKey}`,
//       'X-USER-ID': `${userID}`,
//     },
//     data: {
//       voice_engine: "Play3.0-mini",
//       text: userProfile.textToAudio,
//       voice: userProfile.voice_sample,
//       output_format: "mp3",
//       sample_rate: "44100",
//       speed: 1,
//     }
//   };

//   await axios
//     .request(options)
//     .then(res => console.log(res.data))
//     .catch(err => console.error(err));
// });


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