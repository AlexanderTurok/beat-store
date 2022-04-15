
import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

function Visualizer({ playerData }) {
  const canvasRef = useRef(null);

  const WIDTH = 300;
  const HEIGHT = 150;

  useEffect(() => {
    // canvas setup
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    
    const audio = new Audio(require(
      `../../music/${playerData.currentSong.mp3Path}.mp3`));
    let audioCtx = new AudioContext();
    
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
    playerData.isPlaying ? audio.play() : audio.pause()

  }, [playerData.isPlaying, playerData.currentSong.mp3Path]);     
                    
  return (
    <canvas ref={canvasRef} />
  );
}

const mapStateToProps = (state) => {
  return {
    playerData: state.player
  }
}

export default connect(
  mapStateToProps)
(Visualizer);