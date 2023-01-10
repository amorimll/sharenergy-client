import Navbar from "./Navbar";
import { Box, LinearProgress, ThemeProvider } from "@mui/material";
import Theme from "./Theme";

const Loading = () => {

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Loading;
