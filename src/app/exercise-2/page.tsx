"use client";

import { Button, Card } from "@nextui-org/react";
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
      <Card className={isHidden ? "hidden" : ""}>
        <div className="w-[500px] flex flex-col gap-4 m-2">
          <p className="text-lg font-semibold text-center">DEAD BY DAYLIGHT</p>
          <p className="text-sm">
            The essence of 2v8 has remained the same. A team of 8 Survivors must
            repair 8 of 13 Generators and escape, while a team of 2 Killers try
            their best to amass as many Sacrifices as (in)humanly possible. It’s
            action-packed, it’s chaotic, it’s teamwork manifest.
          </p>
          <p className="text-sm">
            2v8 removes Perks, with both sides using a Class system built around
            a specific playstyle. Hooks are also removed, being replaced with
            Cages – a very similar effect to The Executioners Cage of Atonement
            Power.
          </p>
        </div>
      </Card>
      <Card className="w-[500px] p-2">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-center">SURVIVOR CLASSES</p>
          <p className="text-sm">
            On the Survivor side, the four Classes from the previous iteration
            have returned: Medic, Scout, Guide, and Escapist . Now, they’ll each
            receive a unique Unlock Ability, allowing them to make game-changing
            plays at pivotal moments. These Unlock Abilities come into play
            after you’ve been caged for the first time, granting a benefit that
            lasts for the duration of the game.
          </p>
          <p className="text-sm">
            Each Class also features an Active Ability, which can be used at any
            moment – provided its not on cooldown. Aside from the Class-specific
            benefit, Active Abilities can also be used to stand up from the
            Dying State, should go a long way in mitigating the efficacy of
            slugging. Discover what each Class offers by checking out the list
            below.
          </p>
        </div>
      </Card>
      <Button color="primary" onClick={handleHide}>
        Ocultar
      </Button>
      <Button color="default" onClick={handleShow}>
        Mostrar
      </Button>
    </div>
  );
}

export default ExcerciseTwo;
