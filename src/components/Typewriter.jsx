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
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
        {writer}
      </h1>
    </div>
  );
}

export default Typewriter;
