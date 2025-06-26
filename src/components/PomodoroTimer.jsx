import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import '../../src/components/PomodoroTimer.css';
import DogAnimation from '../assets/Images/dog/Dog.gif';
import soundUrl from '../assets/Images/mp3/ding.mp3';

function PomodoroTimer() {
  const [time, setTime] = useState(1500); // 25 min par défaut
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [reward, setReward] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => setTime((t) => t - 1), 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      new Howl({ src: [soundUrl] }).play();
      setSessions((s) => s + 1);
      setReward(true);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const format = (t) => {
    const minutes = String(Math.floor(t / 60)).padStart(2, '0');
    const seconds = String(t % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(1500);
    setReward(false);
  };

  return (
    <div className="timer-page">
      <div className="timer-container">
        <h2>{format(time)}</h2>

        <input
          type="range"
          min="60"
          max="1500"
          step="60"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          disabled={isActive}
        />

        <div className="timer-buttons">
          <button onClick={() => setIsActive(true)}>Démarrer</button>
          <button onClick={() => setIsActive(false)}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>

        {reward && (
          <img
            src={DogAnimation}
            alt="Chien content"
            className="dog-animation"
            onAnimationEnd={() => setTimeout(() => setReward(false), 2000)}
          />
        )}

        <p>Sessions terminées : {sessions} 🍩</p>
      </div>
    </div>
  );
}

export default PomodoroTimer;
