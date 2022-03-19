import './App.css';
import sound from './assets/sound/01.wav';
import { useState, useEffect } from 'react';

function App() {
  const initValue = 10;
  const [second, setSecond] = useState(initValue);
  const [started, setStarted] = useState(false);

  const audio = new Audio(sound);

  const resetValue=() => {
    setSecond(initValue);
  };

  const resetAll=() => {
    setStarted(false);
    setSecond(initValue);
  };

  useEffect(() => {

    if (started) {
      if (second > 0) {
        setTimeout(() => { setSecond(second - 1); }, 1000);
      }
      else {
        resetValue();
      }

      if (second <= 5) {
        //audio.play();
      }
    }

    else{
      resetValue();
    }

  });

  return (
    <div className="App">
      <h1>{second}</h1>
      <button onClick={() => setStarted(!started)}>{started?'stop':'start'}</button>
      <button onClick={() => resetValue()}>reset</button>
    </div>
  );
}

export default App;