"use client";

import { Card } from "@nextui-org/react";
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
      <Card className="w-[500px] p-4 flex flex-col gap-4">
        <a
          className="text-2xl font-semibold text-center"
          href="#"
          style={linkStyle(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          ESCAPIST
        </a>
        <a
          className="text-lg"
          href="#"
          style={linkStyle(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          You don’t have to be the fastest. You just need to be faster than the
          others.
        </a>
        <a
          className="text-lg"
          href="#"
          style={linkStyle(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          See the Aura of all nearby Pallets and Vaults. The Escapist has a
          small Sprint Radius, which grants you a brief Haste boost when you
          sprint. That boost is also given to any teammate that sprints near you
          . Note that this boost causes Exhaustion, but that’s a small price to
          pay for a narrow escape.
        </a>
      </Card>
    </div>
  );
}

export default ExerciseFour;
