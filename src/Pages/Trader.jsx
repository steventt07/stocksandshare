import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Header, Footer } from "../Components/Layouts";
import { Trades, Watchlist } from "../Components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    backgroundColor: "purple",
    color: "white"
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function Trader() {
  const [value, setValue] = React.useState(0);
  const [trader, setTrader] = useState("Steven Tran");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // var proxy = "http://127.0.0.1:8000";
  var proxy = "";
  var getTrade1 = "/trade?username=steventt07";
  var getTrade2 = "/trade?username=cheten1234";
  var getTrade3 = "/trade?username=blake1234";
  var getWatchlist1 = "/watchlist?username=steventt07";
  var getWatchlist2 = "/watchlist?username=cheten1234";
  var getWatchlist3 = "/watchlist?username=blake1234";
  const [chartsSteven, setStevenCharts] = useState([]);
  const [chartsCheten, setChetenCharts] = useState([]);
  const [watchlistSteven, setStevenWatchlist] = useState([]);
  const [watchlistCheten, setChetenWatchlist] = useState([]);
  const [chartsBlake, setBlakeCharts] = useState([]);
  const [watchlistBlake, setBlakeWatchlist] = useState([]);
  const [currentChart, setCurrentChart] = useState([]);
  const [currentWatchlist, setCurrentWatchlist] = useState([]);

  useEffect(() => {
    fetch(proxy.concat(getTrade1)).then(response =>
      response.json().then(data => {
        setStevenCharts(data.trade);
        setCurrentChart(data.trade);
      })
    );
  }, []);
  useEffect(() => {
    fetch(proxy.concat(getTrade2)).then(response =>
      response.json().then(data => {
        setChetenCharts(data.trade);
      })
    );
  }, []);
  useEffect(() => {
    fetch(proxy.concat(getTrade3)).then(response =>
      response.json().then(data => {
        setBlakeCharts(data.trade);
      })
    );
  }, []);
  useEffect(() => {
    fetch(proxy.concat(getWatchlist1)).then(response =>
      response.json().then(data => {
        setStevenWatchlist(data.watchlist);
        setCurrentWatchlist(data.watchlist);
      })
    );
  }, []);
  useEffect(() => {
    fetch(proxy.concat(getWatchlist2)).then(response =>
      response.json().then(data => {
        setChetenWatchlist(data.watchlist);
      })
    );
  }, []);
  useEffect(() => {
    fetch(proxy.concat(getWatchlist3)).then(response =>
      response.json().then(data => {
        setBlakeWatchlist(data.watchlist);
      })
    );
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMenuSteven = () => {
    setAnchorEl(null);
    setTrader("Steven Tran");
    setCurrentChart(chartsSteven);
    setCurrentWatchlist(watchlistSteven);
  };

  const handleCloseMenuCheten = () => {
    setAnchorEl(null);
    setTrader("Cheten");
    setCurrentChart(chartsCheten);
    setCurrentWatchlist(watchlistCheten);
  };

  const handleCloseMenuBlake = () => {
    setAnchorEl(null);
    setTrader("Blake");
    setCurrentChart(chartsBlake);
    setCurrentWatchlist(watchlistBlake);
  };

  return (
    <div className="container">
      <Header />
      <div>
        <h2>Traders</h2>
        <h3>Steven Tran - Technical Analysis</h3>
        <h3>Cheten - News/Momentum</h3>
        <h3>Blake Jones</h3>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {trader}
        </Button>
        <br />
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          variant="contained"
          color="#2196f3"
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleCloseMenuSteven}>Steven Tran</MenuItem>
          <MenuItem onClick={handleCloseMenuCheten}>Cheten</MenuItem>
          <MenuItem onClick={handleCloseMenuBlake}>Blake Jones</MenuItem>
        </StyledMenu>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            aria-label="full width tabs example"
          >
            <Tab label="Watchlist" {...a11yProps(0)} />
            <Tab label="Trades" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Watchlist charts={currentWatchlist} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Trades charts={currentChart} />
        </TabPanel>
      </div>
      <Footer />
    </div>
  );
}
