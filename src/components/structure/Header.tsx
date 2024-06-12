import { AppBar, Toolbar, styled, Stack } from "@mui/material";
import Session from "./Session";

const MuiAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: "84px",
  marginLeft: "1px",
}));

function Header() {
  return (
    <MuiAppBar position="static">
      <Toolbar
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <div></div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
            gap: 2,
          }}
        >
          <Session />
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
}

export default Header;
