import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Header, Footer } from "../Components/Layouts";
import { Charts } from "../Components";

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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function Trader() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var proxy = "http://127.0.0.1:8000";
  var getUser1 = "/charts?username=steventt07";
  var getUser2 = "/charts?username=cheten1234";
  const [chartsSteven, setStevenCharts] = useState([]);
  const [chartsCheten, setChetenCharts] = useState([]);

  useEffect(() => {
    fetch(proxy.concat(getUser1)).then(response =>
      response.json().then(data => {
        setStevenCharts(data.charts);
      })
    );
  }, []);
  useEffect(() => {
    fetch(proxy.concat(getUser2)).then(response =>
      response.json().then(data => {
        setChetenCharts(data.charts);
      })
    );
  }, []);

  return (
    <div className="container">
      <Header />
      <div>
        <h2>Traders</h2>
        <h3>Steven Tran - Technical Analysis</h3>
        <h3>Cheten - News/Momentum</h3>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            aria-label="full width tabs example"
          >
            <Tab label="Steven Tran" {...a11yProps(0)} />
            <Tab label="Cheten" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Charts charts={chartsSteven} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Charts charts={chartsCheten} />
        </TabPanel>
      </div>
      <Footer />
    </div>
  );
}
