import { useState, useEffect } from 'react';
import './App.css';
import UserCardCollection from './components/UserCardCollection';
import NavBar from './components/NavBar';
import AudioPlayer from './components/AudioPlayer';
import { Routes, Route } from 'react-router-dom';

function App() {
//   const [audio, setAudio] = useState(null); //get audio data from third party API

//   async function getAudioURL(){
//     let res = await getAudio('Hi');
//     const audioBlob = new Blob([res], { type: 'audio/mpeg' }); // or 'audio/wav' based on the API response
//     const src = URL.createObjectURL(audioBlob);
//     // Set the Blob URL in the state
//     setAudio(src);
    
//   };

// useEffect(()=>{
//     getAudioURL()
// },[])
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<UserCardCollection/>}/>
        {/* <AudioPlayer src={audio}/> */}
      </Routes>
    </>
  )
}



export default App
