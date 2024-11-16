import axios from "axios";


const userID = import.meta.env.VITE_USER_ID;
const apiKey = import.meta.env.VITE_API_KEY;


async function getAudio(){
  let url = 'http://localhost:3000/api/audioProfiles'
  try {
      let res = await axios.get(url)
      return res;
  } catch (error) {
      console.error(error)
  }
}

// async function getAudio(){
//   try {
//     const options = {
//       method: 'GET',
//       url: 'https://api.play.ht/api/v2/voices',
//       headers: {
//         accept: "application/json",
//         AUTHORIZATION: `${apiKey}`,
//         'X-USER-ID': `${userID}`,
//       }
//     };
//     const response = await axios.request(options);
//     return response.data
//   } catch (error) {
//     console.error(error);
//   }
// };

export {getAudio}


        // try {
        //   const response = await axios.post('http://localhost:3000/api/proxy', {
        //         voice: 's3://voice-cloning-zero-shot/9fc626dc-f6df-4f47-a112-39461e8066aa/oliviaadvertisingsaad/manifest.json',
        //         output_format: 'mp3',
        //         text: `${textToAudio}`
        //   });
        //   return(response.data);
        // } catch (error) {
        //   console.error(error);
        // };

        // import axios from 'axios';