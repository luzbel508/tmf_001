"use client";

import { useEffect, useState } from "react";
import { businessInfo } from "../content/business-info";

const dayOrder = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
] as const;

function timeToMinutes(value: string): number {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function getTodayKey(): string {
  const currentDay = new Date().getDay();
  return dayOrder[currentDay];
}

function isBusinessOpenNow() {
  const todayKey = getTodayKey();
  const todayHours = businessInfo.hours.find((entry) => entry.day === todayKey);

  if (!todayHours || !todayHours.open || !todayHours.close) {
    return false;
  }

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = timeToMinutes(todayHours.open);
  const closeMinutes = timeToMinutes(todayHours.close);

  return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
}

export function OpenClosedBadge() {
  const [status, setStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const syncStatus = () => setStatus(isBusinessOpenNow());
    const initialSync = window.setTimeout(syncStatus, 0);
    const timer = window.setInterval(syncStatus, 30000);

    return () => {
      window.clearTimeout(initialSync);
      window.clearInterval(timer);
    };
  }, []);

  if (status === null) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-cream px-4 py-2 text-sm font-medium text-navy">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-mustard" />
        Comprobando horario...
      </div>
    );
  }

  return (
    <div
      aria-live="polite"
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
        status
          ? "border-green-600/30 bg-green-100 text-green-800"
          : "border-red-600/30 bg-red-100 text-red-800"
      }`}
    >
      <span
        className={`inline-block h-2.5 w-2.5 rounded-full ${
          status ? "bg-green-600" : "bg-red-600"
        }`}
      />
      {status ? "Abierto ahora" : "Cerrado"}
    </div>
  );
}

export default OpenClosedBadge;
