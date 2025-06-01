import { Button } from "@headlessui/react";
import { clsx } from "clsx";
import { RotateCcwIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  refreshButtonStyle,
  rotateAnimation,
  textStyle,
} from "./intervalRefreshButton.css";
import { ROTATING_SECONDS } from "./intervalRefreshButton.service";

interface IntervalRefreshButtonProps {
  className?: string;
  intervalSeconds: number;
  onRefresh: () => void;
}
export function IntervalRefreshButton({
  className,
  intervalSeconds,
  onRefresh,
}: IntervalRefreshButtonProps) {
  const timerRef = useRef<number | null>(null);
  const [seconds, setSeconds] = useState(intervalSeconds);

  // Initialize timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Trigger refresh whenever the `seconds` reach 0.
  // `seconds` can reach 0 by timer or manual click.
  useEffect(() => {
    let timeout: number | null = null;
    if (seconds === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      onRefresh(); // refresh triggers immediately. The other things are purely UI-related.
      timeout = setTimeout(() => {
        setSeconds(intervalSeconds);
        timerRef.current = setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1000);
      }, ROTATING_SECONDS * 1000); // Wait for the rotating animation.
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [seconds, onRefresh, intervalSeconds]);

  return (
    <Button
      className={clsx(refreshButtonStyle, className)}
      onClick={() => setSeconds(0)}
    >
      <RotateCcwIcon
        strokeWidth={1}
        size={30}
        className={clsx(seconds === 0 && rotateAnimation)}
      />
      <span className={textStyle}>{seconds}</span>
    </Button>
  );
}
