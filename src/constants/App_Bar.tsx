import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

function App_Bar() {
  const clr = "inherit";

  return (
    <AppBar position="static" className="full">
      <Toolbar variant="dense">
        <IconButton edge="start" color={clr} aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" color={clr} component={"div"}>
          Menu
        </Typography>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Dalitso profile Pic"
          src="../assets/anarchy-computer-hacker-hacking-wallpaper-preview.jpg"
        />
      </Toolbar>
    </AppBar>
  );
}

export default App_Bar;
