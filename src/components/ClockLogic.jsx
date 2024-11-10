import { useState, useEffect } from 'react';

export const useClockLogic = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1); // Update every millisecond for smooth movement

    return () => clearInterval(timer);
  }, []);

  const getRotationDegree = (type) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    switch (type) {
      case 'hour':
        return ((hours % 12) * 30) + (minutes / 2) + (seconds / 120);
      case 'minute':
        return (minutes * 6) + (seconds / 10) + (milliseconds / 10000);
      case 'second':
        return (seconds * 6) + (milliseconds / 166.67);
      default:
        return 0;
    }
  };

  return { time, getRotationDegree };
};