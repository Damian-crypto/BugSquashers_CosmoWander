import React, { useEffect, useState } from 'react';

function CountdownTimer() {
  const [countdown, setCountdown] = useState(''); // State to hold the countdown value

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date('Jan 5, 2024 15:37:25').getTime();

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the countdown value
      const countdownValue = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Update the countdown state
      setCountdown(countdownValue);

      // If the count down is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setCountdown('EXPIRED');
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-gray-50 rounded-lg shadow-lg px-8 py-6">
        <div className="flex flex-col gap-4 items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-700">Your next trip will start</h3>
          <span id="countdown" className="text-2xl font-semibold text-gray-700">
            {countdown}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;