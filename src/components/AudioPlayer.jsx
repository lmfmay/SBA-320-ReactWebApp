import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function AudioPlayer({name}) {

// let url = `http://localhost:3000/stream-audio/${name}`;
//     // async function getAudio(){
//     //     try {
//     //         let url = `http://localhost:3000/stream-audio/${name}`;
//     //         let res = await axios.get(url)
//     //         return res.data;
//     //     } catch (error) {
//     //         console.error(error)
//     //     }
//     // }

//   return (
//     <div>
//       <audio controls>
//         <source src={url} type="audio/mpeg"/>
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }

function AudioPlayer({url}) {
    // const [audio] = useState(new Audio(url));
  
    // useEffect(() => {
    //   // Clean up the audio element when the component unmounts
    //   return () => {
    //     audio.pause();
    //     audio.currentTime = 0;
    //   };
    // }, [audio]);
  
        const [audio] = useState(new Audio(url));
        const playAudio = () => {
            audio.play();
          };

          const pauseAudio = () => {
            audio.pause();
            audio.currentTime = 0;
          }; 
          
        return (
          <div>
            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
          </div>
        );
      }

export default AudioPlayer;

