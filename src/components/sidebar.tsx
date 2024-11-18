"use client";

import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const links = [
    {
      href: "/exercise-1",
      src: "/number-one.png",
      alt: "Ejercicio 1",
      activeSrc: "/number-1.png",
    },
    {
      href: "/exercise-2",
      src: "/number-two.png",
      alt: "Ejercicio 2",
      activeSrc: "/number-2.png",
    },
    {
      href: "/exercise-3",
      src: "/number-three.png",
      alt: "Ejercicio 3",
      activeSrc: "/number-3.png",
    },
    {
      href: "/exercise-4",
      src: "/number-four.png",
      alt: "Ejercicio 4",
      activeSrc: "/number-4.png",
    },
    {
      href: "/exercise-5",
      src: "/number-five.png",
      alt: "Ejercicio 5",
      activeSrc: "/number-5.png",
    },
    {
      href: "/exercise-6",
      src: "/number-six.png",
      alt: "Ejercicio 6",
      activeSrc: "/number-6.png",
    },
    {
      href: "/exercise-7",
      src: "/number-seven.png",
      alt: "Ejercicio 7",
      activeSrc: "/number-7.png",
    },
    {
      href: "/exercise-8",
      src: "/number-eight.png",
      alt: "Ejercicio 8",
      activeSrc: "/number-8.png",
    },
    {
      href: "/exercise-9",
      src: "/number-nine.png",
      alt: "Ejercicio 9",
      activeSrc: "/number-9.png",
    },
  ];

  return (
    <div className="flex items-start gap-3 p-3 min-h-screen">
      <div className="flex flex-col gap-3 w-[100px]">
        <div className="flex gap-3 items-center">
          <Link href="/">
            <Image alt="NextUI hero Image" src="/app-development.png" />
          </Link>
        </div>

        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Link href={link.href} onClick={() => handleClick(index)}>
              <Image
                alt={link.alt}
                src={activeIndex === index ? link.activeSrc : link.src}
              />
            </Link>
            <p className="text-[12px]">{link.alt}</p>
          </div>
        ))}
      </div>

      <div className="h-full w-[2px] border-l-2 border-gray-800 border-dashed"></div>
    </div>
  );
}

export default Sidebar;
