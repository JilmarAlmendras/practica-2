"use client";

import { Card } from "@nextui-org/react";
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
      <Card className="w-[500px] p-4 flex flex-col gap-4">
        <p
          className="text-2xl font-semibold"
          style={style1}
          onClick={handleClick1}
        >
          See the Aura of any unfinished Generator in your vicinity. Anytime
          you’re repairing a Generator, your teammates will see the Aura of both
          you and the Generator you’re repairing. The Guide also has a small
          Tech Radius, which gives teammates a Great Skill Check Bonus and
          reduced repair noise.
        </p>
        <p
          className="text-2xl font-semibold"
          style={style2}
          onClick={handleClick2}
        >
          When you complete a Generator, gain a 5% repair charge for every
          Survivor in your Tech Radius. Those charges will be applied to the
          next Generator you repair.
        </p>
      </Card>
    </div>
  );
}

export default ExerciseThree;
