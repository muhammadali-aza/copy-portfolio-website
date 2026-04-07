import React, { useState, useEffect } from "react";

export default function TypeEffect() {
  const words = ["Web Designer.", "AI Developer.", "Team Lead."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const typingSpeed = 500 / words[index].length;
    const erasingSpeed = 300 / words[index].length;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div className="flex items-center gap-0">
      {/* Text */}
      <span className="text-[#FF014F] font-bold text-[54px] lg:text-[47px] antialiased leading-tight">
        {words[index].substring(0, subIndex)}
      </span>

      {/* Cursor */}
      <span
        className="inline-block w-[4px] bg-white animate-pulse ml-0 sm:height-[5px]"
        style={{ height: "4.2em" }}
      ></span>
    </div>
  );
}