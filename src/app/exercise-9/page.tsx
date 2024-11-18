"use client";

import { Card, Input } from "@nextui-org/react";
import React, { useState } from "react";

function ExerciseNine() {
  const [inputStyle1, setInputStyle1] = useState({ color: "blue" });
  const [inputStyle2, setInputStyle2] = useState({ color: "blue" });

  const handleFocus1 = () => {
    setInputStyle1({ color: "red" });
  };

  const handleBlur1 = () => {
    setInputStyle1({ color: "blue" });
  };

  const handleFocus2 = () => {
    setInputStyle2({ color: "red" });
  };

  const handleBlur2 = () => {
    setInputStyle2({ color: "blue" });
  };

  return (
    <div className="w-full flex gap-4 justify-center items-center">
      <Card className="w-[500px] flex gap-4 p-7">
        <Input
          width={200}
          type="text"
          defaultValue="Contenido 1"
          style={inputStyle1}
          onFocus={handleFocus1}
          onBlur={handleBlur1}
        />
        <Input
          type="text"
          defaultValue="Contenido 2"
          style={inputStyle2}
          onFocus={handleFocus2}
          onBlur={handleBlur2}
        />
      </Card>
    </div>
  );
}

export default ExerciseNine;
