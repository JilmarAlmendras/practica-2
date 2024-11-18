"use client";

import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";
import "./page.css";

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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7tf1NT8YAMt8yXYloni0TAlQw2YyY4w1zg&s"
          alt="Placeholder 1"
          className={`${visible ? "fade-in" : "fade-out"} ${
            slide ? "slide-down" : "slide-up"
          }`}
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7tf1NT8YAMt8yXYloni0TAlQw2YyY4w1zg&s"
          alt="Placeholder 2"
          className={`${visible ? "fade-in" : "fade-out"} ${
            slide ? "slide-down" : "slide-up"
          }`}
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7tf1NT8YAMt8yXYloni0TAlQw2YyY4w1zg&s"
          alt="Placeholder 3"
          className={`${visible ? "fade-in" : "fade-out"} ${
            slide ? "slide-down" : "slide-up"
          }`}
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
