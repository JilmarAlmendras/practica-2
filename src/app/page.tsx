import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <h1 className="text-[60px]">PRACTICA #2</h1>
      <Image
        width={300}
        alt="NextUI hero Image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnk2DhNPM2xyJNhxUCHNM1aiZCavpVrXtzBEwZyGVM_hulbfwsvBewFJ0Tz3xlMFZBB8Y&usqp=CAU"
      />
      <p className="text-lg font-bold">
        Estudiante: <span className="font-normal">Almendras Copa Jilmar</span>
      </p>
      <p className="text-lg font-bold">
        Docente:{" "}
        <span className="font-normal">Vallejos Troncoso Maria Antonieta</span>
      </p>
      <p className="text-lg font-bold">
        Materia: <span className="font-normal">Diseño Web II</span>
      </p>
      <p className="text-lg font-bold">
        Fecha: <span className="font-normal">14/11/2024</span>
      </p>
    </div>
  );
}
