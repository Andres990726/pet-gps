import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import usePosition from "../hooks/usePosition";
export default function MapComponent() {
  const { data, isLoading } = usePosition();

  const [position, setPosition] = useState({
    lat: 2.4578244,
    lng: -76.5930209,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
    );
  }, []);
  console.log(position);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer
        center={[position.lat, position.lng]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            parseFloat(data.feeds[data.feeds.length - 1].field1),
            parseFloat(data.feeds[data.feeds.length - 1].field2),
          ]}
        >
          <Popup>Mascota.</Popup>
        </Marker>
        <Marker position={[position.lat, position.lng]}>
          <Popup>Tu posición.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
