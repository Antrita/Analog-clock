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
       
       
            <div className="hand-wrapper hour-wrapper">
              <div 
                className="hand hour-hand"
                style={{ transform: `rotate(${getRotationDegree('hour')}deg)` }}
              />
            </div>
            
        
            <div className="hand-wrapper minute-wrapper">
              <div 
                className="hand minute-hand"
                style={{ transform: `rotate(${getRotationDegree('minute')}deg)` }}
              />
            </div>
            
           
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
          
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            
            fractionalSecondDigits: 3
          })}
        </div>
      </div>
    </div>
  );
};

export default Clock;
