import BarraSuperior from "../components/BarraSuperior/BarraSuperior";
import Map from "../components/Map/index";

export default function Home() {
  const cordenadas = [4.60971, -74.08175];

  return (
    <div className="my-10">
      <div className="mx-5">
        <BarraSuperior />
      </div>
      <Map cordenadas={cordenadas} />
    </div>
  );
}
