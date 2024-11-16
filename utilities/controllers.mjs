import axios from "axios";

async function getAudio(){
  //proxy server created to prevent CORS error. see server/server.mjs for AJAX requests.
  let url = 'http://localhost:3000/api/audioProfiles' 
  try {
      let res = await axios.get(url)
      return res;
  } catch (error) {
      console.error(error)
  }
}

export {getAudio}
