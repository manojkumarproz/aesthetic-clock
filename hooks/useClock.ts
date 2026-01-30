import { useEffect, useState } from "react";

export function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return time;
}
