import { routes } from "../../utils/routes";
import {
  AppRegistration,
  AppRegistrationOutlined,
  History,
  HistoryOutlined,
  Map,
  MapOutlined,
} from "@mui/icons-material";

export const items = [
  {
    name: "Gps Mascotas",
    items: [
      {
        outlineIcon: <MapOutlined />,
        filledIcon: <Map />,
        name: "Busca tú mascota",
        to: routes.map,
      },
      {
        outlineIcon: <HistoryOutlined />,
        filledIcon: <History />,
        name: "Historial",
        to: routes.history,
      },
      {
        outlineIcon: <AppRegistrationOutlined />,
        filledIcon: <AppRegistration />,
        name: "Registra tu mascota",
        to: routes.register,
      },
    ],
  },
];
