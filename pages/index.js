import { useState } from "react";
import Map from "../components/Map/index";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";


export default function Home() {
  const [cordenada, setCordenada] = useState([4.60971, -74.08175]);
  const [zoom, setZoom] = useState(11);

  return (
    <div className="my-10">
      <div className="mx-5">
        <BarraSuperior setCordenada={setCordenada} setZoom={setZoom} />
      </div>
      <Map cordenadas={cordenada} zoom={zoom}/>
    </div>
  );
}
