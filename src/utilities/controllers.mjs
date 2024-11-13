import axios from "axios";

async function getAudio(textToAudio){
    const userID = import.meta.env.VITE_USER_ID;
    const apiKey = import.meta.env.VITE_API_KEY;

    const options = {
        method: 'POST',
        url: 'https://api.play.ht/api/v2/tts/stream',
        headers: {
          accept: 'audio/mpeg',
          'content-type': 'application/json',
          AUTHORIZATION: `${apiKey}`,
          'X-USER-ID': `${userID}`
        },
        data: {
            text: textToAudio,
            voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
            output_format: 'mp3'
        }
      };
      
    try {
        const response = await axios.request(options)
        return response.data

    } catch (error) {
        console.error('Error getting audio: ', error)
    }
}

export {getAudio}