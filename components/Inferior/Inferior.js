export default function Inferior({ localidad, recuento, color }) {
  return (
    <>
      <div className="flex flex-col ml-60 mt-10 gap-5"> 
        <span>{localidad}</span>
        <div className="ml-5 flex flex-col gap-5">
        <span>Cantidad de atentados: {recuento}</span>
        <span>Esta zona es <span className={color=="red"?"text-red-600":color ==="yellow"?"text-yellow-500":"text-green-600"}>{color=="red"?" peligrosa":color ==="yelow"?"insegura":"Segura"}</span> </span>
        </div>
      </div>
    </>
  );
}
