import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const FeaturePage = () => {
  return (
    <div>
      <Header />
      <h2>Feature Page</h2>
      <p>Upcoming feature implmentation</p>
      <ul>
        <li>
          Made sections for charts [watchlist, current_trade, past_trades]{" "}
        </li>
        <li>Integrate database</li>
        <li>Make population of charts and notes dynamic </li>
        <li>
          Design local file structure for uploading chart data into the database
        </li>
        <li>Upload 5 charts and analysis</li>
        <li>
          Make design clickable. Click on stock name/symbol display the chart
          and notes. Will have dates assocaited with the chart and notes
        </li>
        <li>Add in authentication </li>
        <li>
          Figure out forwarding of url. so like stocksandshare.com goes to the
          website, instead of http://stocksandshare.com
        </li>
        <li>Create alerts for uploading analysis</li>
        <li>Create database for traders and users</li>
        <li>Create database for comments and notes</li>
        <li>Create flask app for database interaction</li>
        <li>Integrate flask with react</li>
        <li>Create API spec for flask app</li>
        <li>Connect React app with local falcon server</li>
        <li>Create forms that template stock upload</li>
        <li>Linked up form with POST call in falcon</li>
        <li>Display contents from GET call</li>
        <li>Package everything in VM</li>
        <li>Deploy Falcon server and Postgres database into production</li>
        <li>
          Look into website caching to prevent from reloading data from API
        </li>
      </ul>
      <p>What I've done for this website</p>
      <ul>
        <li>Created domain name stocksandshare.com from (google domains)</li>
        <li>Hosted website on Azure(free)</li>
        <li>Linked gituhb account to CDCI in Azure </li>
        <li>Added basic homepage to website</li>
        <li>Set up postgres server from Azure</li>
        <li>Added links in nav bar for nagivation</li>
        <li>Added Home, About, Feature, and Trader pages</li>
        <li>Setup local postgre server</li>
        <li>Setup local python falcon server</li>
        <li>Connected postgres with falcon server</li>
        <li>Uploaded image(binary) file to postgre</li>
        <li>
          Downloaded image(binary) from postgres and saved it into local
          directory
        </li>
        <li></li>
      </ul>
      <Footer />
    </div>
  );
};

export default FeaturePage;
