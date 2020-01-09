import React from "react" 

function Body(){
    const friend1 = "Cameron Dekohary"
    const friend2 = "Alondra Torres"
    const friend3 = "Hanna Banana"
    return(
        <body>
            <img src="amd.png"></img>
            <p>The chart broke the channel, it looks like it's going to test the bottom trendline.</p>
            <p>Trade Checklist
                <ul>
                    <li>Come up with more of a game plan in the trade </li>
                    <li>Set alerts to support/resistance line and based your trade off of that </li>
                    <li>What kind of returns am I looking for this trade</li>
                    <li>What kind of loss am I willing to lose for this trade</li>
                    <li>How long am I planning on taking this trade </li>
                    <li>When would be a good time to average down</li>
                </ul>
                <ul></ul>
                <p>Mindset</p>
                <ul>
                    <li>If you need to watch the price action of the stock, you shouldn’t be in the position </li>
                    <li>If the price action goes past your support line, wait for the test of the supportline and sell there</li>
                    <li>If the price action goes in your direction greater than expected, take some profits and reduce your risk</li>
                </ul>
                <ul></ul>
                <p>Upcoming feature implmentation</p>
                <ul>
                    <li>Made sections for charts [watchlist, current_trade, past_trades] </li>
                    <li>Homepage</li>
                    <li>About </li>
                    <li>Future plans</li>
                    <li>Integrate database</li>
                    <li>Make population of charts and notes dynamic </li>
                    <li>Design local file structure for uploading chart data into the database</li>
                    <li>Upload 5 charts and analysis</li>
                    <li>Make design clickable. Click on stock name/symbol display the chart and notes. Will have dates assocaited with the chart and notes</li>
                    <li>Add in authentication </li>
                    <li>Figure out forwarding of url. so like stocksandshare.com goes to the website, instead of http://stocksandshare.com</li>
                    <li>Create alerts for uploading analysis</li>
                    <li>Create database for traders and users</li>
                    <li>Create database for comments and notes</li>
                </ul>
                <ul></ul>
                <p>Stock analysis guildline</p>
                <ul>
                    <li>It should take 5-10 minutes to fully analyze a chart </li>
                    <li>Draw out support/resistance line </li>
                    <li>Draw out trendlines on the daily, 4 hour, and 15 minutes </li>
                </ul>
                <ul></ul>
                <p>What I've done for this website</p>
                <ul>
                    <li>Created domain name stocksandshare.com from (google domains)</li>
                    <li>Hosted website on Azure(free)</li>
                    <li>Linked gituhb account to CDCI in Azure </li>
                    <li>Added basic homepage to website</li>
                </ul>
                <ul></ul>
            </p>
            <p>Hi {friend1}</p>
            <p>Hi {friend2}</p>
            <p>Hi {friend3}</p>
        </body>
        
    )
}

export default Body