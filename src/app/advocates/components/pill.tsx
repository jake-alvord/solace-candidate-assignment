import React from "react";

export function Pill({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-emerald-600 py-1 px-3 ml-1 mt-1">
      <p className="text-sm text-bold break-normal">{text}</p>
    </div>
  );
}
