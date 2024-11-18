"use client";

import { Button, Card } from "@nextui-org/react";
import React, { useState } from "react";

function ExerciseFive() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  const modifyItem = (index: number) => {
    const newItems = items.map((item, i) =>
      i === index ? `Modifiecado ${item}` : item
    );
    setItems(newItems);
  };

  return (
    <div className="w-full flex gap-6 justify-center items-center">
      <Card className="w-[500px] gap-4 p-3">
        <ul className="flex flex-col gap-5 items-center">
          {items.map((item, index) => (
            <li className="flex gap-4 items-center" key={index}>
              {item}{" "}
              <Button
                color="primary"
                variant="ghost"
                onClick={() => modifyItem(index)}
              >
                Modificar
              </Button>
            </li>
          ))}
        </ul>
      </Card>
      <div className="flex flex-col gap-4">
        <Button color="primary" onClick={addItem}>
          Agregar item
        </Button>
        <Button color="default" onClick={removeItem}>
          Remover item
        </Button>
      </div>
    </div>
  );
}

export default ExerciseFive;
