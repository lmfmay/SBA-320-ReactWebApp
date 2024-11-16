import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

//configs
dotenv.config({path: '../.env'});

const app = express();
const PORT = 3000;

//middleware
app.use(cors())
app.use(express.json({ extended: false }));

//.env variables
const userID = process.env.USER_ID;
const apiKey = process.env.API_KEY;

//Routes
  //get list of prebuilt voices from PlayHT API
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

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));