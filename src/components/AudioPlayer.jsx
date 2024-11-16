import React, { useState, useEffect } from 'react';

function AudioPlayer({ url }) {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
      // Create a new Audio object whenever the URL changes
      const newAudio = new Audio(url);
      setAudio(newAudio);
  
      // Cleanup the previous Audio object to avoid memory leaks
      return () => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      };
    }, [url]); // Runs when url changes
  
    const toggleAudio = () => {
      if (audio) {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    return (
      <div>
        <button onClick={toggleAudio}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
  
  export default AudioPlayer;