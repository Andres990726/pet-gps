import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MapComponent from "./components/MapComponent";
import Layout from "./components/structure/Layout";
import { routes } from "./utils/routes";
import MapHistory from "./components/MapHistory";

const privateRoutes = [
  {
    element: <Layout />,
    children: [
      { path: routes.map, element: <MapComponent /> },
      { path: routes.history, element: <MapHistory /> },
      { path: routes.register, element: <MapComponent /> },
      { path: "*", element: <Navigate to={routes.map} /> },
    ],
  },
];

function Routes() {
  const router = createBrowserRouter(privateRoutes);
  return <RouterProvider router={router} />;
}

export default Routes;
