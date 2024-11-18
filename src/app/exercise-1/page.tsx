"use client";

import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";

function ExerciseOne() {
  const [visible, setVisible] = useState(true);
  const [slide, setSlide] = useState(true);

  const handleFadeIn = () => {
    setVisible(true);
  };

  const handleFadeOut = () => {
    setVisible(false);
  };

  const handleSlideUp = () => {
    setSlide(false);
  };

  const handleSlideDown = () => {
    setSlide(true);
  };

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="gallery flex gap-4">
        <Image
          src="https://via.placeholder.com/150"
          alt="Placeholder 1"
          className={`transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          } ${slide ? "h-auto" : "h-0 overflow-hidden"}`}
        />
        <Image
          src="https://via.placeholder.com/150"
          alt="Placeholder 2"
          className={`transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          } ${slide ? "h-auto" : "h-0 overflow-hidden"}`}
        />
        <Image
          src="https://via.placeholder.com/150"
          alt="Placeholder 3"
          className={`transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          } ${slide ? "h-auto" : "h-0 overflow-hidden"}`}
        />
      </div>
      <div className="buttons flex gap-4">
        <Button color="primary" variant="shadow" onClick={handleFadeIn}>
          Fade In
        </Button>
        <Button color="primary" variant="shadow" onClick={handleFadeOut}>
          Fade Out
        </Button>
        <Button color="primary" variant="shadow" onClick={handleSlideUp}>
          Slide Up
        </Button>
        <Button color="primary" variant="shadow" onClick={handleSlideDown}>
          Slide Down
        </Button>
        <Button color="primary" variant="shadow" onClick={handleToggle}>
          Toggle
        </Button>
      </div>
    </div>
  );
}

export default ExerciseOne;
