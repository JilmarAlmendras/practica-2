"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

function ExcerciseTwo() {
  const [isHidden, setIsHidden] = useState(false);

  const handleHide = () => {
    setIsHidden(true);
  };

  const handleShow = () => {
    setIsHidden(false);
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <ul className={isHidden ? "hidden" : ""}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
      </ul>
      <Button onClick={handleHide}>Ocultar</Button>
      <Button onClick={handleShow}>Mostrar</Button>
    </div>
  );
}

export default ExcerciseTwo;
