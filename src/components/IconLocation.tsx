import L from "leaflet";
import locationIcon from "../assets/location.svg";
const IconLocation = new L.Icon({
  iconUrl: locationIcon,
  iconRetinaUrl: locationIcon,
  iconSize: [40, 40],
  className: "leaflet-venue-icon",
});
export default IconLocation;
