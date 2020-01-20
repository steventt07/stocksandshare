import React from "../../../node_modules/react";
import "../../index.css";
import { Link } from "../../../node_modules/react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    color: "#FFFFFF",
    padding: "5px"
    // "margin-left": "10px"
  };
  let home_styles = {
    "text-decoration": "none",
    color: "#FFFFFF",
    padding: "0",
    "margin-left": "10px"

    // "margin-left": "10px"
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link style={home_styles} to="/">
            Stocks and Share
          </Link>
        </Typography>
        <Link style={styles} to="/about">
          About
        </Link>
        <Link style={styles} to="/feature">
          Feature
        </Link>
        <Link style={styles} to="/trader">
          Trader
        </Link>
        <Link style={styles} to="/learn">
          Learn
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
