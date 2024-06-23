import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useSelector } from "react-redux";
import iconLocation from "../assets/images/icon-location.svg";
import "leaflet/dist/leaflet.css";
import Spinner from "./Spinner";

const MapIpTracker = () => {
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);
  const { item: infoIp, status } = useSelector((state) => state.ip);

  const customIcon = new Icon({
    iconUrl: iconLocation,
    iconSize: [35, 45],
  });

  useEffect(() => {
    if (status === "success" && infoIp.location) {
      setCoordinates([infoIp.location.lat, infoIp.location.lng]);
    }
  }, [status, infoIp]);

  return (
    <>
      {status === "pending" || status === "rejected" ? (
        <Spinner />
      ) : (
        <MapContainer
          center={coordinates}
          key={coordinates}
          zoomControl={false}
          zoom={16}
          style={{ minHeight: "65vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates} icon={customIcon}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default MapIpTracker;
