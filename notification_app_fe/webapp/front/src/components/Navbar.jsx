import { AppBar, Toolbar, Button } from "@mui/material";

 function Navbar({ setView }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => setView("all")}>
          All Notifications
        </Button>
        <Button color="inherit" onClick={() => setView("priority")}>
          Priority
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;