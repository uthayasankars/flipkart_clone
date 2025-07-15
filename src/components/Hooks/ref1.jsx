import React, { useRef, useState } from 'react';

const AudioPlayer = () => {
  // Refs for audio elements
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  
  // State to track which audio is playing
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handlePlayPause = (audioNum) => {
    const audioRef = audioNum === 1 ? audioRef1 : audioRef2;
    
    if (currentlyPlaying === audioNum) {
      // Pause the currently playing audio
      audioRef.current.pause();
      setCurrentlyPlaying(null);
    } else {
      // Pause any currently playing audio first
      if (currentlyPlaying === 1) audioRef1.current.pause();
      if (currentlyPlaying === 2) audioRef2.current.pause();
      
      // Play the selected audio
      audioRef.current.play();
      setCurrentlyPlaying(audioNum);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Audio Player</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Song 1: Relaxing Music</h3>
        <audio
          ref={audioRef1}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          onEnded={() => setCurrentlyPlaying(null)}
        />
        <button 
          onClick={() => handlePlayPause(1)}
          style={{
            padding: '8px 16px',
            backgroundColor: currentlyPlaying === 1 ? '#ff6b6b' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {currentlyPlaying === 1 ? 'Pause' : 'Play'} Song 1
        </button>
      </div>
      
      <div>
        <h3>Song 2: Upbeat Music</h3>
        <audio
          ref={audioRef2}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          onEnded={() => setCurrentlyPlaying(null)}
        />
        <button 
          onClick={() => handlePlayPause(2)}
          style={{
            padding: '8px 16px',
            backgroundColor: currentlyPlaying === 2 ? '#ff6b6b' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {currentlyPlaying === 2 ? 'Pause' : 'Play'} Song 2
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;