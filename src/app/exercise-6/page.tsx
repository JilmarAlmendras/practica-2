"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

function ExerciseSix() {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(true);
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <ul className="flex flex-col gap-4">
        <li className={`font-bold ${highlight ? "bg-yellow-300" : ""}`}>
          Java
        </li>
        <li className={`font-bold ${highlight ? "bg-yellow-300" : ""}`}>C++</li>
        <li className="font-bold">Python</li>
        <li className="font-bold">JavaScript</li>
        <li className={`font-bold ${highlight ? "bg-yellow-300" : ""}`}>C#</li>
      </ul>
      <Button color="primary" onClick={handleHighlight}>
        Resaltar Lenguajes OO
      </Button>
    </div>
  );
}

export default ExerciseSix;
