import Logo from "../Logo/Logo";
import React, { FC, useState } from "react";
import Autocomplete from "react-autocomplete-select";

const data = [
  { localidad: "Engativa", peligro: "rojo" },
  { localidad: "Usaquen", peligro: "rojo" },
  { localidad: "Suba", peligro: "rojo" },
  { localidad: "Fontibon", peligro: "rojo" },
  { localidad: "Kennedy", peligro: "rojo" },
  { localidad: "Bosa", peligro: "rojo" },
  { localidad: "Tunjelito", peligro: "rojo" },
  { localidad: "Ciudad Bolivar", peligro: "rojo" },
  { localidad: "Puente Aranda", peligro: "rojo" },
  { localidad: "Teusaquillo", peligro: "rojo" },
  { localidad: "Barrios Unidos", peligro: "rojo" },
  { localidad: "Chapinero", peligro: "rojo" },
  { localidad: "Los Martires", peligro: "rojo" },
  { localidad: "Candelaria", peligro: "rojo" },
  { localidad: "Santa fe", peligro: "rojo" },
  { localidad: "San Cristobal", peligro: "rojo" },
  { localidad: "Sumapaz", peligro: "rojo" },
  { localidad: "Usme", peligro: "rojo" },
  { localidad: "Rafael Uribe", peligro: "rojo" },
  { localidad: "Antonio Nariño", peligro: "rojo" },
  { localidad: "Antonio Nariño", peligro: "rojo" },
];

export default function BarraSuperior({ setCordenada, setZoom }) {
  const [change, setChange] = useState();

  console.log(change)

  return (
    <div className="flex items-center justify-between mx-10 mb-10">
      <div className="flex items-center flex-col ml-5">
        <Logo />
        <span>Security Map</span>
      </div>
      <AutocompletePrueba setChange={setChange}/>
      {/* <div className="flex items-center bg-white rounded-2xl h-[3em] w-[40%]">
        <input
          type="text"
          id="busqueda"
          placeholder="Busca tu localidad o barrio"
          className="w-full rounded-2xl ml-1 h-10 outline-none pl-2"
        />
        <span className="material-symbols-outlined mx-2">search</span>
      </div> */}
    </div>
  );
}

const AutocompletePrueba = ({ setChange }) => {
  const inputRef = React.useRef();

  let arr = [];

  // tripAdvisorDestinations.forEach((destino, i) => {
  //   arr[i] = {
  //     localidad: `${destino.destinationName} (${destino.timeZone})`,
  //     peligro: destino.destinationId,
  //   };
  // });

  return (
    <>
      <Autocomplete
        inputRef={inputRef}
        // defaultInputValue={"Bogotá (BOG), Colombia (CO)"}
        searchPattern={"containsString"}
        placeholder={"Buscar"}
        maxOptionsLimit={5}
        getItemValue={(item) => {
          return `${item.localidad}`;
        }}
        optionsJSX={(value) =>(<li>{value}</li>)}
        itemsData={data}
        
        onChange={(item) => {

          setChange( data.find((el) => el.localidad == item));
        }}
        inputJSX={(props) => (
          <label className="flex items-center bg-white rounded-2xl h-[3em]">
            <input
              {...props}
              required
              id="inputEnter"
              className="inputClass w-full rounded-2xl ml-1 h-10 outline-none pl-2"
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
