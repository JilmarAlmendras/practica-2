"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

function ExerciseSeven() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleAddClass = () => {
    setIsHighlighted(true);
  };

  const handleRemoveClass = () => {
    setIsHighlighted(false);
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-4">
        <p className={isHighlighted ? "bg-yellow-300" : ""}>Párrafo 1</p>
        <p className={isHighlighted ? "bg-yellow-300" : ""}>Párrafo 2</p>
        <p className={isHighlighted ? "bg-yellow-300" : ""}>Párrafo 3</p>
      </div>
      <div className="flex gap-2">
        <Button color="primary" onClick={handleAddClass}>
          Asociar Clase
        </Button>
        <Button color="danger" onClick={handleRemoveClass}>
          Desasociar Clase
        </Button>
      </div>
    </div>
  );
}

export default ExerciseSeven;
