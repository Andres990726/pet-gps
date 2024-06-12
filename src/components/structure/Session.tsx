import { Avatar, Stack, Typography } from "@mui/material";

function Session() {
  return (
    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
      <Stack>
        <Typography color="text.secondary">Usuario</Typography>
      </Stack>
      <Avatar sx={{ backgroundColor: "secondary.main" }} />
    </Stack>
  );
}

export default Session;
