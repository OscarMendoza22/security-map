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

export default function Map({ cordenadas, zoom, color }) {
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
