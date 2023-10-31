import './styles.css';
import React, { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [selectedColor, setSelectedColor] = useState('aqua');
  const [backgroundColor, setBackgroundColor] = useState('aqua');
  const [boxShadowColor, setBoxShadowColor] = useState('aqua');
  const [timeFormat, setTimeFormat] = useState('full');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setSelectedColor(selectedColor);

    setBackgroundColor(selectedColor);
    setBoxShadowColor(selectedColor);
  };

  const toggleTimeFormat = () => {
    setTimeFormat((prevFormat) => (prevFormat === 'full' ? 'short' : 'full'));
  };

  return (
    <div className="clock">
      <p
        className="time"
        style={{
          backgroundColor,
          boxShadow: `0 0 5px ${boxShadowColor}, 0 0 25px ${boxShadowColor}, 0 0 50px ${boxShadowColor}`,
        }}
        onClick={toggleTimeFormat}
      >
        {timeFormat === 'full'
          ? time.toLocaleTimeString()
          : time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
      <div className="date">
        <p
          className="date-stamp"
          style={{
            backgroundColor,
            boxShadow: `0 0 5px ${boxShadowColor}, 0 0 25px ${boxShadowColor}, 0 0 50px ${boxShadowColor}`,
          }}
        >
          {time.toLocaleDateString()}
        </p>
      </div>

      {/* Color picker */}
      <input
        className="color-picker"
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{ marginTop: '20px' }}
      />
    </div>
  );
}

export default DigitalClock;
