
import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import useAudio from './useAudio';

function Visualizer({ songData }) {
  const [playing, toggle] = useAudio();
  const canvasRef = useRef(null);
  useEffect(() => {
    // basic setup
    const WIDTH = 300;
    const HEIGHT = 150;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    
    const audio = new Audio(require(`../music/${songData.song.mp3Path}.mp3`));
    let audioCtx = new AudioContext();

    // create audio context when button play is clicked
    // toggle for start visualizing
    document.getElementById('play-button').addEventListener('click', () => {
      audioCtx.resume();
      toggle();
    });
    
    const analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

    function draw() {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
    
      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      let barWidth = (WIDTH / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
      for(let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;
        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);
        x += barWidth + 1;
      }
    };

    draw(); 

    // if we play song, it visualize it
    playing ? audio.play() : audio.pause()

  }, [playing, songData.song.mp3Path]);     
                    
  return (
    <div>
      <canvas ref={canvasRef}>
      </canvas>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    songData: state.song
  }
}

export default connect(mapStateToProps)(Visualizer);