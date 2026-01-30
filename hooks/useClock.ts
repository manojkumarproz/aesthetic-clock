import { useEffect, useState } from "react";

export function useClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return time;
}
