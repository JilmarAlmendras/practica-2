"use client";

import React, { useState } from "react";

function ExerciseThree() {
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({});

  const handleClick1 = () => {
    setStyle1({
      color: "white",
      backgroundColor: "blue",
      fontFamily: "Arial, sans-serif",
    });
  };

  const handleClick2 = () => {
    setStyle2({
      color: "white",
      backgroundColor: "green",
      fontFamily: "Courier New, monospace",
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <h1
        className="text-2xl font-semibold"
        style={style1}
        onClick={handleClick1}
      >
        Título 1
      </h1>
      <h1
        className="text-2xl font-semibold"
        style={style2}
        onClick={handleClick2}
      >
        Título 2
      </h1>
    </div>
  );
}

export default ExerciseThree;
