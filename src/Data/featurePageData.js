const featurePageData = {
  complete_task: [
    "Created domain name stocksandshare.com from (google domains)",
    "Hosted website on Azure(free)",
    "Linked gituhb account to CDCI in Azure ",
    "Added basic homepage to website",
    "Set up postgres server from Azure",
    "Added links in nav bar for nagivation",
    "Added Home, About, Feature, and Trader pages",
    "Setup local postgre server",
    "Setup local python falcon server",
    "Connected postgres with falcon server",
    "Uploaded image(binary) file to postgre",
    "Downloaded image(binary) from postgres and saved it into local directory"
  ],
  backlog: [
    "Made sections for charts [watchlist, current_trade, past_trades]",
    "Integrate database",
    "Make population of charts and notes dynamic ",
    "Design local file structure for uploading chart data into the database",
    "Upload 5 charts and analysis",
    "Make design clickable. Click on stock name/symbol display the chart and notes. Will have dates assocaited with the chart and notes",
    "Add in authentication ",
    "Figure out forwarding of url. so like stocksandshare.com goes to the website, instead of http://stocksandshare.com",
    "Create alerts for uploading analysis",
    "Create database for traders and users",
    "Create database for comments and notes",
    "Create flask app for database interaction",
    "Integrate flask with react",
    "Create API spec for flask app",
    "Connect React app with local falcon server",
    "Create forms that template stock upload",
    "Linked up form with POST call in falcon",
    "Display contents from GET call",
    "Package everything in VM",
    "Deploy Falcon server and Postgres database into production",
    "Look into website caching to prevent from reloading data from API"
  ],
  phase_1:
    "Create MVP (minimal viable product) , where traders can upload their stock anlysis and view them",
  phase_2:
    "Add in user/trader views and update user interface. Also intergrate with broker API to showcase P/L",
  phase_3:
    "Display ranking for most profitable trader, send alerts when a trader uploads a trade/watchlist",
  phase_4: "Scale and profit $$"
};

export default featurePageData;
