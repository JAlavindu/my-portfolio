import React, { useEffect, useState } from "react";

function Typewriter({ text }) {
  const [writer, setWriter] = useState("");
  let textLength = text.length;

  useEffect(() => {
    for (let i = 0; i < textLength; i++) {
      setTimeout(() => {
        setWriter(text.slice(0, i + 1));
      }, 100 * i);
    }
  }, [text, textLength]);

  return (
    <div className="px-2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight min-h-[2em] sm:min-h-0">
        {writer}
        <span className="inline-block w-1 h-[0.9em] bg-primary ml-1 animate-pulse align-middle"></span>
      </h1>
    </div>
  );
}

export default Typewriter;
