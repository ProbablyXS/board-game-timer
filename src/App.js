import './App.css';
import sound from './assets/sound/01.wav';
import { useState, useEffect } from 'react';

function App() {
  const initValue = 10;
  const [second, setSecond] = useState(initValue);
  const [started, setStarted] = useState(false);

  const audio = new Audio(sound);

  // Reset timer to initial value
  const resetValue = () => {
    setSecond(initValue);
  };

  // Everytime started changes
  useEffect(() => {

    // If started
    if (started) {

      setTimeout(() => { setSecond(currSec => currSec - 1) }, 1000);
      return;
    }

    // If not started
    resetValue();

  }, [started]);



  // Everytime second changes
  useEffect(() => {

    // If count reaches 0
    if (second < 1) {
      setStarted(false);
      return
    }

    if (second < 6) {
      audio.play();
    }

    // Countdown
    if (started) {
      const myTimeout = setTimeout(() => { setSecond(currSec => currSec - 1) }, 1000);
      return () => clearTimeout(myTimeout);
    }

  }, [second])




  return (
    <div className="App">
      <h1>{second}</h1>
      <div className="buttons">
        <button onClick={() => setStarted(!started)}>{started ? 'Stop' : 'Start'}</button>
        <button onClick={() => resetValue()}>Reset</button>
      </div>
    </div>
  );
}

export default App;