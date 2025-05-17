import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SelectSmall from "./components/SelectSmall";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#06080C" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Tactic Sans",
              display: "flex",
              alignItems: "center",
              fontStyle: "italic",
              fontWeight: "900",
              lineHeight: "100%",
              fontSize: "32px",
              letterSpacing: "0%",
              flexGrow: 1,
            }}
          >
            Match Tracker
            <SelectSmall />
          </Typography>

          <Button
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "white",
              backgroundColor: "red",
            }}
          >
            Обновить
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
