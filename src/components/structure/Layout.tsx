import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";
import Aside from "./Aside";
import Header from "./Header";

const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
}));

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(1.5),
  overflow: "hidden",
  display: "grid",
}));

const SubContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  display: "grid",
}));

function Layout() {
  return (
    <RootContainer>
      <Aside />
      <Box
        sx={{
          overflow: "hidden",
          display: "grid",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <Header />
        <Container>
          <SubContainer>
            <Outlet />
          </SubContainer>
        </Container>
      </Box>
    </RootContainer>
  );
}

export default Layout;
