import { useState } from "react";
import Map from "../components/Map/index";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import Inferior from "@/components/Inferior/Inferior";


export default function Home() {
  const [cordenada, setCordenada] = useState([4.60971, -74.08175]);
  const [zoom, setZoom] = useState(11);
  const [color, setColor] = useState("white");
  const [localidad, setLocalidad] = useState()
  const [recuento, setRecuento] = useState()

  return (
    <div className="my-10">
      <div className="mx-5">
        <BarraSuperior setCordenada={setCordenada} setZoom={setZoom} setColor={setColor} setLocalidad={setLocalidad} setRecuento={setRecuento}/>
      </div>
      <Map cordenadas={cordenada} zoom={zoom} color={color}/>
      <div>
        <Inferior localidad={localidad} recuento={recuento} color={color}/>
      </div>
    </div>
  );
}
