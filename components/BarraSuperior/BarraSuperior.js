import Logo from "../Logo/Logo";
import React, { FC, useEffect, useState } from "react";
import Localidades from "../../json/Localidades";
import { AutoComplete } from "primereact/autocomplete";

export default function BarraSuperior({
  setCordenada,
  setZoom,
  setColor,
  setLocalidad,
  setRecuento,
}) {
  // se creo esta variable por que no se actualiza el estado en la primera carga por ende no deja que el usuario busque 
  var valor = "";
  const [change, setChange] = useState();
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  // Guarda las variables que son necesarias para pintar el mapa
  if (change != undefined) {
    var valueSelected = Localidades.filter(
      (value) => value.localidad == change
    );
    setLocalidad(valueSelected[0].localidad);
    setCordenada(valueSelected[0].cordenadas);
    setRecuento(valueSelected[0].recuento);
    setColor(valueSelected[0].peligro);
    setZoom(400);
  }

  // busca dentro de la data lo que escribio el usuario
  const search = (event) => {
    const coincidencias = [];
    for (let i = 0; i < Localidades.length; i++) {
      const texto = Localidades[i].localidad;
      const textoMinusculas = texto.toLowerCase();
      const letraMinusculas = valor.toLowerCase();
      for (let j = 0; j < texto.length; j++) {
        if (
          textoMinusculas.substring(j, j + valor.length) === letraMinusculas
        ) {
          coincidencias.push(texto);
        }
      }
    }
    setItems(coincidencias !== "" && coincidencias);
  };

  // console.log(items);

  return (
    <div className="flex items-center justify-between mx-10 mb-10">
      <div className="flex items-center flex-col ml-5">
        <Logo />
        <span>Security Map</span>
      </div>
      <label className="flex items-center bg-white rounded-2xl h-[3em]">
        <AutoComplete
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => {
            valor = e.value;
            setValue(e.value);
          }}
          onSelect={(e) => {
            setChange(e.value);
          }}
        />
        <span className="material-symbols-outlined mx-2">search</span>
      </label>
    </div>
  );
}
