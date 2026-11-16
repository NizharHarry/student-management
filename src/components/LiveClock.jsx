
import { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const formattedDate = time.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="clock-card">
      <div className="clock-icon">◷</div>

      <div className="clock-information">
        <span className="clock-label">WAKTU SEKARANG</span>
        <h2 className="clock-time">{formattedTime}</h2>
        <p className="clock-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default LiveClock;
