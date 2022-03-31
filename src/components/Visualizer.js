
import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

function Visualizer({ songData, playerData }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    // basic setup
    const WIDTH = 300;
    const HEIGHT = 150;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    
    const audio = new Audio(require(
      `../music/${songData.song.mp3Path}.mp3`));
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

  }, [playerData.isPlaying, songData.song.mp3Path]);     
                    
  return (
    <div>
      <canvas ref={canvasRef}>
      </canvas>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    songData: state.song,
    playerData: state.player
  }
}

export default connect(
  mapStateToProps)
(Visualizer);