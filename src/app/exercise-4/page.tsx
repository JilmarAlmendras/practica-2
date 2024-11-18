"use client";

import React, { useState } from "react";

function ExerciseFour() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = (index: number) => ({
    backgroundColor: hoveredLink === index ? "yellow" : "transparent",
    padding: "5px",
    textDecoration: "none",
    color: "black",
  });

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <a
        className="text-2xl font-semibold"
        href="#"
        style={linkStyle(0)}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        Hipervínculo 1
      </a>
      <a
        className="text-2xl font-semibold"
        href="#"
        style={linkStyle(1)}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        Hipervínculo 2
      </a>
      <a
        className="text-2xl font-semibold"
        href="#"
        style={linkStyle(2)}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        Hipervínculo 3
      </a>
    </div>
  );
}

export default ExerciseFour;
