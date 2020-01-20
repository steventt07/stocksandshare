import React from "../../../node_modules/react";
import "../../index.css";
import { Link } from "../../../node_modules/react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Header() {
  const classes = useStyles();
  let styles = {
    "text-decoration": "none",
    color: "#000000"
  };
  let home_styles = {
    "text-decoration": "none",
    color: "#FFFFFF",
    padding: "0",
    "margin-left": "10px"
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Link style={styles} to="/about">
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={styles} to="/feature">
              Feature
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={styles} to="/trader">
              Trader
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={styles} to="/learn">
              Learn
            </Link>
          </MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          <Link style={home_styles} to="/">
            Stocks and Share
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
