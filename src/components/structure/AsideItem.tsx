import { Link } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "../../hooks/useDisclosure";
import { ReactNode } from "react";
interface RouteItem {
  outlineIcon: ReactNode;
  filledIcon: ReactNode;
  name: string;
  to: string;
}
function AsideItem({ item }: { item: RouteItem }) {
  const isOpen = useDisclosure((state) => state.isOpen);
  const location = useLocation();
  const pathname = location.pathname;
  const parts = pathname.split("/").slice(1)[0];
  const selected = parts === item.to.split("/").slice(1)[0];

  return (
    <ListItemButton
      component={Link}
      key={item.to}
      selected={selected}
      to={item.to}
    >
      <ListItemIcon sx={{ color: "primary.main" }}>
        {selected ? item.filledIcon : item.outlineIcon}
      </ListItemIcon>
      <ListItemText
        sx={{
          display: isOpen ? "block" : "none",
          color: selected ? "secondary.main" : "primary.main",
        }}
      >
        {item.name}
      </ListItemText>
    </ListItemButton>
  );
}

export default AsideItem;
