import { useState } from "react";
import Map from "../components/Map/index";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import Inferior from "@/components/Inferior/Inferior";

export default function Home() {
  const [cordenada, setCordenada] = useState([4.60971, -74.08175]);
  const [zoom, setZoom] = useState(11);
  const [color, setColor] = useState("white");
  const [localidad, setLocalidad] = useState();
  const [recuento, setRecuento] = useState();

  return (
    <div className="mt-10">
      <div className="mx-20">
        <BarraSuperior
          setCordenada={setCordenada}
          setZoom={setZoom}
          setColor={setColor}
          setLocalidad={setLocalidad}
          setRecuento={setRecuento}
        />
      </div>
      <Map cordenadas={cordenada} zoom={zoom} color={color} localidades={localidad} />
      <div>
        <Inferior localidad={localidad} recuento={recuento} color={color} />
      </div>
      <div>
        <span className="text-xs flex justify-center my-10">
          Esta informacion fue recolectada del año 2022
        </span>
      </div>
      <div className="bg-slate-400 flex items-center gap-10 justify-evenly">
        <div className="flex flex-col my-5">
          <span className="text-xs">
            Esta pagina fue creada por :
          </span>
          <span className="text-xs  mt-3">Kevin Andres Niño Guerrero</span>
        </div>
        <div className="flex flex-col my-5">
          <span className="text-xs flex  ">En colaboracion con :</span>
          <span className="text-xs flex  mt-3">Sebastian David Melo Diaz</span>
          <span className="text-xs flex  mt-3">Oscar Luiz Mendoza Ariza</span>
        </div>
      </div>
    </div>
  );
}
