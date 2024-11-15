import axios from "axios";

async function getAudio(textToAudio){
    const userID = import.meta.env.VITE_USER_ID;
    const apiKey = import.meta.env.VITE_API_KEY;

        try {
          const response = await axios.post('http://localhost:3000/api/proxy', {
                voice: 's3://voice-cloning-zero-shot/9fc626dc-f6df-4f47-a112-39461e8066aa/oliviaadvertisingsaad/manifest.json',
                output_format: 'mp3',
                text: `${textToAudio}`
          });
          return(response.data);
        } catch (error) {
          console.error(error);
        };
    // const options = {
    //     method: 'POST',
    //     url: 'https://api.play.ht/api/v2/tts/stream',
    //     headers: {
    //         accept: 'audio/mpeg',
    //         'content-type': 'application/json',
    //         AUTHORIZATION: `${apiKey}`,
    //         'X-USER-ID': `${userID}`
    //     },
    //     data: {
    //         voice: 's3://voice-cloning-zero-shot/9fc626dc-f6df-4f47-a112-39461e8066aa/oliviaadvertisingsaad/manifest.json',
    //         output_format: 'mp3',
    //         text: `${textToAudio}`
    //     }
    //   };

    // axios
    //   .request(options)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));
    // try {
    //     const response = await axios.request(options)
    //     return response.data

    // } catch (error) {
    //     console.error('Error getting audio: ', error)
    // }
}


export {getAudio}