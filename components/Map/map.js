import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

export default function Map({ cordenadas, zoom }) {
  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  return (
    <MapContainer
      className="w-full h-[40em]"
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
          pathOptions={fillRedOptions}
          radius={1000}
          stroke={false}
        />
      </LayerGroup>
    </MapContainer>
  );
}
