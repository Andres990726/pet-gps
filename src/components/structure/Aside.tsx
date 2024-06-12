import { Fragment } from "react";
import AsideItem from "./AsideItem";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  IconButton,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useDisclosure } from "../../hooks/useDisclosure";
import { items } from "./Items";

function Aside() {
  const isOpen = useDisclosure((state) => state.isOpen);
  const toggle = useDisclosure((state) => state.toggle);

  return (
    <Paper
      sx={{
        width: isOpen ? "fit-content" : "58px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Stack
        height="68px"
        padding={1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          gap={1}
          display={isOpen ? "flex" : "none"}
        >
          <Typography fontWeight={400} color="primary.main">
            GPS Mascotas
          </Typography>
        </Stack>
        <div>
          <IconButton onClick={toggle}>
            <MenuIcon />
          </IconButton>
        </div>
      </Stack>
      <Divider />
      <List sx={{ flex: 1 }}>
        {items.map((item) => (
          <Fragment key={item.name}>
            {item.items.map((item) => (
              <AsideItem key={item.to} item={item} />
            ))}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default Aside;
