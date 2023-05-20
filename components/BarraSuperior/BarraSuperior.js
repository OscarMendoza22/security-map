import Logo from "../Logo/Logo";
import React, { FC, useState } from "react";
import Autocomplete from "react-autocomplete-select";

const   data = [
  { localidad: "USAQUÉN", peligro: "yellow", cordenadas:[4.7485, -74.0312], recuento: 9229 },
  { localidad: "CHAPINERO", peligro: "yellow", cordenadas:[4.6569, -74.0467], recuento: 12023 },
  { localidad: "SANTA FE", peligro: "yellow", cordenadas:[4.5963,	-74.0298], recuento: 7643 },
  { localidad: "SAN CRISTÓBAL", peligro: "Green", cordenadas:[4.5463000000000005,	-74.0883], recuento: 3656 },
  { localidad: "USME", peligro: "Green", cordenadas:[4.4766,	-74.1033], recuento: 3021 },
  { localidad: "TUNJUELITO", peligro: "Green", cordenadas:[4.5875,	-74.1407], recuento: 2753 },
  { localidad: "BOSA", peligro: "Green", cordenadas:[4.6305,-74.1945], recuento: 6773 },
  { localidad: "KENNEDY", peligro: "red", cordenadas:[4.6268,-74.1573], recuento: 14366 },
  { localidad: "FONTIBÓN", peligro: "yellow", cordenadas:[4.6832,	-74.1479], recuento: 9209 },
  { localidad: "ENGATIVÁ", peligro: "yellow", cordenadas:[4.6832,	-74.1479], recuento: 13669 },
  { localidad: "SUBA", peligro: "red", cordenadas:[4.7652, -74.0824], recuento: 14584 },
  { localidad: "BARRIOS UNIDOS", peligro: "Green", cordenadas:[4.6664, -74.084], recuento: 5398 },
  { localidad: "TEUSAQUILLO", peligro: "yellow", cordenadas:[4.6448, -74.0938], recuento: 7949 },
  { localidad: "LOS MARTIRES", peligro: "Green", cordenadas:[4.603, -74.0913], recuento: 5705 },
  { localidad: "ANTONIO NARIÑO", peligro: "Green", cordenadas:[4.5486, -74.1009], recuento: 2716 },
  { localidad: "PUENTE ARANDA", peligro: "Green", cordenadas:[4.6149000000000004, -74.1227], recuento: 6643 },
  { localidad: "CANDELARIA", peligro: "Green", cordenadas:[4.5939, -74.0739], recuento: 1339 },
  { localidad: "RAFAEL URIBE URIBE", peligro: "Green", cordenadas:[4.5653, -74.1164], recuento: 4488 },
  { localidad: "CIUDAD BOLÍVAR", peligro: "Green", cordenadas:[4.5066, -74.1539], recuento: 5574 },
]

export default function BarraSuperior({
  setCordenada,
  setZoom,
  setColor,
  setLocalidad,
  setRecuento
}) {

  const [change, setChange] = useState();

  if (change != undefined) {
    setLocalidad(change.localidad)
    setCordenada(change.cordenadas);
    setRecuento(change.recuento)
    setColor(change.peligro);
    setZoom(400);
  }

  return (
    <div className="flex items-center justify-between mx-10 mb-10">
      <div className="flex items-center flex-col ml-5">
        <Logo />
        <span>Security Map</span>
      </div>
      <AutocompletePrueba setChange={setChange} />
    </div>
  );
}

const AutocompletePrueba = ({ setChange }) => {
  const inputRef = React.useRef();
  return (
    <>
      <Autocomplete
        inputRef={inputRef}
        searchPattern={"containsString"}
        placeholder={"Buscar"}
        maxOptionsLimit={5}
        getItemValue={(item) => {
          return `${item.localidad}`;
        }}
        optionsJSX={(value) => <li>{value}</li>}
        itemsData={data}
        onChange={(item) => {
          setChange(data.find((el) => el.localidad == item));
        }}
        inputJSX={(props) => (
          <label className="flex items-center bg-white rounded-2xl h-[3em]">
            <input
              {...props}
              required
              id="inputEnter"
              className="inputClass rounded-2xl ml-1 h-10 outline-none pl-2"
            />
            <span className="material-symbols-outlined mx-2">search</span>
          </label>
        )}
        globalStyle="
          .___optionsDiv___ {
          z-index:5000;
          margin-top: 1em;
          border-radius: 6px !important;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          }
          .___optionsDiv___ div{
          padding: 0;
          border-bottom: 0;
          background: transparent
          }
          .___optionsDiv___ div:hover {
          background-color: white; 
          font-weight: 700;
          font-size: 20px;
          }
          .___optionsDiv___ li {
          list-style: none; 
          padding: 2px 20px;
          font-size: 15px;
          color: var(--avia-grey-dark);
          }
          .___optionsDiv___ div:nth-child(1)::before {
           content: '';
           width: 0;
           height: 0;
           border-right: 10px solid transparent;
           border-top: 10px solid transparent;
           border-left: 10px solid transparent;
           border-bottom: 10px solid rgba(255, 255, 255, 0.8);
           position: absolute;
           top: -20px;
           left: 10px;
          }
          .___optionsDiv___ div:nth-child(1) {
           padding-top: 10px;
           border-top-left-radius: 6px 6px;
           border-top-right-radius: 6px 6px;
          }
          .___optionsDiv___ div:last-child {
           border-bottom-left-radius: 6px 6px;
           border-bottom-right-radius: 6px 6px;
           padding-bottom: 10px;
          }
          .autocomplete-active {
           background-color: rgba(146, 138, 138, 0.8) !important; 
           font-weight: 700;
           font-size: 20px;
          }
          "
      />
    </>
  );
};
