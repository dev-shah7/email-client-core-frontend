import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Box
        component="main"
        sx={{
          p: 3,
          backgroundColor: "background.default",
          minHeight: `calc(100vh - 64px)`,
          mt: "64px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default App;
