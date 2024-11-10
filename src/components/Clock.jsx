import React from 'react';
import { useClockLogic } from './ClockLogic';
import './Clock.css';
import defaultBg from '../assets/images/Sky.webp';

const Clock = ({ bgImage = defaultBg }) => {
  const { time, getRotationDegree } = useClockLogic();

  return (
    <div className="clock-container">
      <div className="clock-frame">
        <div className="clock-face">
          <img 
            src={bgImage} 
            alt="Clock Face" 
            className="clock-background"
          />
          
          <div className="hands-container">
            {/* Hour Hand */}
            <div className="hand-wrapper hour-wrapper">
              <div 
                className="hand hour-hand"
                style={{ transform: `rotate(${getRotationDegree('hour')}deg)` }}
              />
            </div>
            
            {/* Minute Hand */}
            <div className="hand-wrapper minute-wrapper">
              <div 
                className="hand minute-hand"
                style={{ transform: `rotate(${getRotationDegree('minute')}deg)` }}
              />
            </div>
            
            {/* Second Hand */}
            <div className="hand-wrapper second-wrapper">
              <div 
                className="hand second-hand"
                style={{ transform: `rotate(${getRotationDegree('second')}deg)` }}
              />
            </div>

            <div className="center-dot" />
          </div>
        </div>
      </div>

      <div className="digital-time">
        <div className="time-display">
          {/* Display time in digital format */}
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            // fractionalSecondDigits might not be widely supported, be mindful of it
            fractionalSecondDigits: 3
          })}
        </div>
      </div>
    </div>
  );
};

export default Clock;
