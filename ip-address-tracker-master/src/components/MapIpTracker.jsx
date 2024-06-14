import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import iconLocation from "../assets/images/icon-location.svg";
import "leaflet/dist/leaflet.css";

const MapIpTracker = () => {
  const customIcon = new Icon({
    iconUrl: iconLocation,
    iconSize: [35, 45],
  });

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoomControl={false}
        zoom={15}
        style={{ minHeight: "70vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={customIcon}></Marker>
      </MapContainer>
    </>
  );
};

export default MapIpTracker;
