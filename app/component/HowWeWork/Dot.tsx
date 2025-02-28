import React from "react";
import { twMerge } from "tailwind-merge";

export function Dot({
  size,
  styles,
}: {
  size: number;
  styles: React.CSSProperties;
}) {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px`, ...styles }}
      className="bg-white rounded-full absolute"
    />
  );
}

export function Dots({
  amount,
  direction,
  className,
}: {
  amount: number;
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <div className={twMerge("absolute top-20 max-xl:top-10", className)}>
      {Array.from({ length: amount }, (_, index) => (
        <Dot
          key={index}
          size={index + 3}
          styles={{
            top: `${index * 6}px`,
            right: `${index * (direction === "right" ? 12 : direction === "left" ? -12 : 0)}px`,
          }}
        />
      ))}
    </div>
  );
}
