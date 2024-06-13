import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import usePosition from "../hooks/usePosition";
import IconLocation from "./IconLocation";
export default function MapHistory() {
  const { data, isLoading } = usePosition();

  if (isLoading) return <p>Loading...</p>;
  return (
    <MapContainer
      center={[
        parseFloat(data?.feeds[data.feeds.length - 1].field1 ?? "0"),
        parseFloat(data?.feeds[data.feeds.length - 1].field2 ?? "0"),
      ]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.feeds.map((feed) => (
        <Marker
          icon={IconLocation}
          position={[parseFloat(feed.field1), parseFloat(feed.field2)]}
        >
          <Popup>{feed.created_at}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
