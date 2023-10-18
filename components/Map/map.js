import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L, { map } from "leaflet";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import Localidades from "../../json/Localidades"

export default function Map({ cordenadas, zoom, color, localidades }) {


  const localidadSelected = Localidades.filter(
    (Localidades) => Localidades.localidad == localidades
  );


    //  map = L.map('map').setView(cordenadas);
    // Resto de tu código



  //   var greenIcon = L.icon({
  //     iconUrl: 'leaf-green.png',
  //     shadowUrl: 'leaf-shadow.png',
  
  //     iconSize:     [38, 95], // size of the icon
  //     shadowSize:   [50, 64], // size of the shadow
  //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //     shadowAnchor: [4, 62],  // the same for the shadow
  //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  // });



    // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");








//     const customIcon = L.icon({
//       iconUrl:
//         "images/cai.png", // Ruta a la imagen del icono
//       iconSize: [38, 95], // size of the icon
//       shadowSize: [50, 64], // size of the shadow
//       iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//       shadowAnchor: [4, 62], // the same for the shadow
//       popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
//     });



//     { localidades != undefined &&
//         localidadSelected.map((element) => {
//           element.cais.map((el) => {
//             // Crea un marcador en las coordenadas especificadas con el icono personalizado
//             // console.log(el.geo_point_2d)
//             console.log(el)
//             L.marker(el.geo_point_2d, {icon: customIcon}).Layer.addTo(map);
//             // console.log(marker)
//             // Agrega el marcador al mapa
//           });
//         });
//     }


// console.log(L.version)

  // // Resto de tu código
  // map.setView(cordenadas);

  // L.marker([4.733411000817852, -74.09653800062756], { icon: customIcon }).addTo(
  //   map
  // );

  // marker.addTo(mapa);

  // {localidades != undefined &&
  //   localidadSelected.map((element) => (
  //     <>
  //       {element.cais.map((el) => (
  //         <>
  //           <Circle
  //             center={el.geo_point_2d}
  //             pathOptions={colorbase}
  //             radius={3000}
  //             stroke={false}
  //           />
  //           ;
  //         </>
  //       ))}
  //     </>
  //   ))}

  const fillOptions = { fillColor: color };

  return (
    <MapContainer
      className="w-full h-[50em]"
      center={cordenadas}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle
          center={cordenadas}
          pathOptions={fillOptions}
          radius={5000}
          stroke={false}
        />
      </LayerGroup>
    </MapContainer>
  );
}
