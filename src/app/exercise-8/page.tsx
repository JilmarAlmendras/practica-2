"use client";

import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

function ExerciseEight() {
  const [formCreated, setFormCreated] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateForm = () => {
    setFormCreated(true);
    setShowElements(false);
  };

  const handleShowElements = () => {
    setShowElements(true);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Clave:</label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </form>
      )}

      {showElements && formCreated && (
        <div>
          <p>Label: Nombre de Usuario</p>
          <p>Input: {username}</p>
          <p>Label: Clave</p>
          <p>Input: {password}</p>
        </div>
      )}
    </div>
  );
}

export default ExerciseEight;
