import { useState, useEffect } from 'react'
import './App.css'
import UserProfile from './components/UserCard'
import AudioPlayer from './components/AudioPlayer'
import { getAudio } from './utilities/controllers.mjs'

function App() {
  const [audio, setAudio] = useState(null); //get audio data from third party API

  async function getAudioURL(){
    let res = await getAudio('Hi');
    const audioBlob = new Blob([res], { type: 'audio/mpeg' }); // or 'audio/wav' based on the API response
    const src = URL.createObjectURL(audioBlob);
    // Set the Blob URL in the state
    setAudio(src);
    
  };

useEffect(()=>{
    getAudioURL()
},[])
  
  return (
    <>
      <UserProfile />
      {/* <AudioPlayer src={audio}/> */}
    </>
  )
}



export default App
