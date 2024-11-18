"use client";

import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

function ExerciseEight() {
  const [formCreated, setFormCreated] = useState(false);
  const [showElements, setShowElements] = useState(false);

  const handleCreateForm = () => {
    setFormCreated(true);
    setShowElements(false);
  };

  const handleShowElements = () => {
    setShowElements(true);
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <Button color="primary" onClick={handleCreateForm}>
        Crear Formulario
      </Button>
      <Button color="default" onClick={handleShowElements}>
        Mostrar Elementos del Formulario
      </Button>

      {formCreated && (
        <form>
          <div>
            <label htmlFor="username">Nombre de Usuario:</label>
            <Input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Clave:</label>
            <Input type="password" id="password" name="password" />
          </div>
        </form>
      )}

      {showElements && formCreated && (
        <div>
          <p>Label: Nombre de Usuario</p>
          <p>
            Input: <Input type="text" readOnly />
          </p>
          <p>Label: Clave</p>
          <p>
            Input: <Input type="password" readOnly />
          </p>
        </div>
      )}
    </div>
  );
}

export default ExerciseEight;
