"use client";

import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

interface CountdownBannerProps {
  deadline: Date;
  message: string;
}

function getTimeLeft(deadline: Date) {
  const diff = deadline.getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, minutes, seconds };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="min-w-[2ch] text-center text-base font-bold tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wide opacity-75">
        {label}
      </span>
    </div>
  );
}

export default function CountdownBanner({
  deadline,
  message,
}: CountdownBannerProps) {
  const [timeLeft, setTimeLeft] = useState(null as ReturnType<typeof getTimeLeft>);

  useEffect(() => {
    // Set initial value on client only (fixes hydration mismatch)
    setTimeLeft(getTimeLeft(deadline));
    const id = setInterval(() => setTimeLeft(getTimeLeft(deadline)), 1000);
    return () => clearInterval(id);
  }, [deadline]);

  if (!timeLeft) return null;

  return (
    <div className="bg-emerald-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-2.5 sm:flex-row sm:justify-center sm:gap-4">
        <div className="flex items-center gap-1.5 text-sm font-medium text-center leading-snug">
          <Timer className="h-4 w-4 shrink-0 opacity-80" />
          <span>{message}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {timeLeft.days > 0 && (
            <>
              <Digit value={timeLeft.days} label="Tage" />
              <span className="text-emerald-300 font-bold self-start mt-0.5">:</span>
            </>
          )}
          <Digit value={timeLeft.hours} label="Std" />
          <span className="text-emerald-300 font-bold self-start mt-0.5">:</span>
          <Digit value={timeLeft.minutes} label="Min" />
          <span className="text-emerald-300 font-bold self-start mt-0.5">:</span>
          <Digit value={timeLeft.seconds} label="Sek" />
        </div>
      </div>
    </div>
  );
}
