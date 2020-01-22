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
    "Downloaded image(binary) from postgres and saved it into local directory",
    "Created flask app for database interaction",
    "Integrated flask with react",
    "Connect React app with local falcon server",
    "Linked up form with POST call in falcon",
    "Display contents from GET call",
    "Integrate database",
    "Switched cloud provider to Digital Ocean (cheaper provider for database), can also scale if needed",
    "Packaged everything (Datbase, Server, Application) in VM",
    "Created SSL for Applcaiton and domain name (stocksandshare.com)",
    "Added logging to gunicorn for performace and debugging purposes",
    "Deployed Falcon server and Postgres database into production",
    "Figured out forwarding of url. so like stocksandshare.com goes to the website, instead of https://stocksandshare.com",
    "Make population of charts and notes dynamic "
  ],
  backlog: [
    "Made sections for charts [watchlist, current_trade, past_trades]",
    "Design local file structure for uploading chart data into the database",
    "Upload 5 charts and analysis",
    "Make design clickable. Click on stock name/symbol display the chart and notes. Will have dates assocaited with the chart and notes",
    "Create alerts for uploading analysis",
    "Create database for traders and users",
    "Create database for comments and notes",
    "Look into website caching to prevent from reloading data from API",
    "Add in authentication ",
    "Look into ngnix rewrite for port forwarding",
    "Identify 100% CPU bug from gunicorn/python process",
    "Add in static traders [Steven, Cheten] and display their analysis",
    "Add functionality for creation of traders",
    "Add functionality for creation of Users and Comments",
    "Add content to Learn page, detailing common terms such as calls, puts, etc",
    "Click on a picture will display a bigger verison of it as the main view",
    "Make website mobile friendly",
    "Update content for about page",
    "Create profiles for Traders",
    "Create profiles for Users",
    "Add in mistakes section user Features",
    "Add in suggestions box website improvement",
    "Get logo for website",
    "Integrate google analytics"
  ],
  phase_1:
    "Create MVP (minimal viable product), where traders can upload their stock anlysis and view them",
  phase_2:
    "Add in user/trader views and update user interface. Also intergrate with broker API to showcase P/L",
  phase_3:
    "Display ranking for most profitable trader, send alerts when a trader uploads a trade/watchlist",
  phase_4: "Scale and profit $$"
};

export default featurePageData;
