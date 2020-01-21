import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Header, Footer } from "../Components/Layouts";
import { Charts, ChartForm } from "../Components";

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
      {value === index && <Box p={3}>{children}</Box>}
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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

export default function Watchlist() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  // const [chartsSteven, setStevenCharts] = useState([]);
  // const [chartsCheten, setChetenCharts] = useState([]);
  // useEffect(() => {
  //   fetch("http://0.0.0.0:8000/charts?username=steventt07").then(response =>
  //     response.json().then(data => {
  //       setStevenCharts(data.charts);
  //     })
  //   );
  // }, []);
  // useEffect(() => {
  //   fetch("http://0.0.0.0:8000/charts?username=cheten1234").then(response =>
  //     response.json().then(data => {
  //       setChetenCharts(data.charts);
  //     })
  //   );
  // }, []);

  return (
    <div className="container">
      <Header />
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            aria-label="full width tabs example"
          >
            <Tab label="Upload" {...a11yProps(1)} />
            <Tab label="Steven Tran" {...a11yProps(0)} />
            <Tab label="Cheten" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* <ChartForm /> */}
            Form
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* <Charts charts={chartsSteven} /> */}
            Steven
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* <Charts charts={chartsCheten} /> */}
            Cheten
          </TabPanel>
        </SwipeableViews>
      </div>
      <Footer />
    </div>
  );
}
