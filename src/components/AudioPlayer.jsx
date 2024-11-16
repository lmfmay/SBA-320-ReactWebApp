import React, { useState, useEffect } from 'react';

function AudioPlayer({url}) {

    const [audio, setAudio] = useState(null);

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
  }, [url]); // Dependency array ensures this runs only when `url` changes

  const playAudio = () => {
    if (audio) audio.play();
  };

  const pauseAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
}

export default AudioPlayer;