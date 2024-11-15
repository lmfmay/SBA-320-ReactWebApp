import React, { useState, useEffect } from 'react';

function AudioPlayer({ src }) {
  const [audio] = useState(new Audio(src));

  useEffect(() => {
    audio.load(); // Load the audio when the component mounts
  }, []);

  return (
    <div>
      <audio controls>
        <source src={src} type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;