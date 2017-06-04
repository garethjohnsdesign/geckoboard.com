---
title: Track the Top Five US Ecommerce Brands on Black Friday with our Live Dashboard
date: 2016-11-07 14:01:00 Z
type: 
description: 
templateversion: 
assets:
- path: "/uploads/track-us-ecommerce-black-friday.png"
  name: Track US Ecommerce Companies on Black Friday
- path: "/uploads/supermetrics-google-sheets-and-trends.png"
  name: Supermetrics Google Sheets and Google Trends Integration
Topics:
- Metrics and KPIs
---

According to [Rubicon Project’s Consumer Pulse Survey](http://rubiconproject.com/insights-report/holiday-shopping-habits-2016/), Americans plan to spend an average of $1,175 per person this holiday season, a hefty 12% jump over last year. The same survey also found that Amazon and Walmart are tied as the likely top shopping destination for this audience, with 66% of shoppers planning to use their sites to purchase gifts.

With so much at stake during the 2016 holiday shopping season for the likes of Amazon, Walmart, Best Buy, Macy’s and Target, we thought it’d be interesting to track the key indicators of their success. We’ve put together an epic live dashboard with key performance metrics for the top five US ecommerce companies. The data comes from several sources that will capture the major events as they happen. You can [view the live dashboard here](https://www.geckoboard.com/holiday-season-2016/track-top-5-us-retailers/).

![Track US Ecommerce Companies on Black Friday](/uploads/track-us-ecommerce-black-friday.png) 

To put together this live dashboard, we’ve connected multiple data sources to Geckoboard including Google Trends, Supermetrics, Google Sheets, Pingdom and Twitter. Below you can see a breakdown of how we’ve done this for each visualization.

##Google Search Trend Index

As [44% of online shoppers begin by using a search engine](https://www.nchannel.com/blog/retail-data-ecommerce-statistics/), Google’s likely to be a major battleground for these big five ecommerce companies during the holiday shopping season. For this reason, we’ve visualized search volume over the past 24 hours for each of the five brands, with data being pulled from [Google Trends](https://www.google.com/trends/). The data is presented as an index, which [Google explains](https://support.google.com/trends/answer/4365533?hl=en&ref_topic=4365599) this way: 

>Numbers represent search interest relative to the highest point on the chart for the given region and time. A value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. Likewise a score of 0 means the term was less than 1% as popular as the peak.

We got this data into Geckoboard using our [Google Sheets dashboard integration](https://www.geckoboard.com/spreadsheet-dashboards/). Sheets has mainly been used to store and tidy up the data. We used an awesome plugin, called [Supermetrics](https://supermetrics.com/), to automatically transfer data from the Google Trends API into the spreadsheet. Supermetrics makes it easy to get data from various sources into a spreadsheet for further manipulation. 

Supermetrics has an interface within Google Sheets. All you do is select Google Trends as your data source, and then a list of the search terms you want to pull data for.

![Supermetrics Google Sheets and Google Trends Integration](/uploads/supermetrics-google-sheets-and-trends.png) 

Additional options allow you to pick search data for different time periods, ranging from three hours up to six years ago. Once your Supermetrics query is scheduled, your spreadsheet will automatically populate with new data.

##Uptime and Site Response Time

Site uptime and page response time become a major obsession as ecommerce sites are likely to come under huge pressure in terms of the volume of visitors during the holiday shopping period. As [Sherice Jacob](https://blog.kissmetrics.com/speed-is-a-killer/), Founder of iElectrify says:

>According to surveys done by Akamai and Gomez.com, nearly half of web users expect a site to load in 2 seconds or less, and they tend to abandon a site that isn’t loaded within 3 seconds. 79% of web shoppers who have trouble with website performance say they won’t return to the site to buy again and around 44% of them would tell a friend if they had a poor experience shopping online.

These big ecommerce companies will be hoping their websites are able to cope with the huge influx of traffic in such a short time span since even a few minutes of downtime could cost them millions of dollars in sales. For this reason, we’re visualizing on our dashboard if the website is currently up or down, when the last downtime was, and also website response time for each of the major retailers. We’ve built these widgets using our [pre-built dashboard integration with Pingdom](https://www.geckoboard.com/integrations/pingdom/), an [uptime monitoring service](https://www.pingdom.com/). Should any of the ecommerce websites suffer an outage, you’ll see the green arrow switch to a red down arrow.

##Twitter feed

All the big stories of Black Friday will be talked about using #BlackFriday on Twitter. So at the bottom of the dashboard you’ll see a live feed of tweets that contain “#BlackFriday” to stay up-to-date with the latest happenings. This is being displayed using our pre-built [Twitter search  dashboard integration](https://www.geckoboard.com/integrations/twitter/) with full-width widget.

##Countdown

The first big shopping day of the holiday season will be Black Friday, so we created a countdown timer to show how long ecommerce companies have to get ready for the big day. We built this using a Spreadsheets widget and a neat trick that we’ve written about in [this guide](https://support.geckoboard.com/hc/en-us/articles/206883827).

##Want your own ecommerce dashboard?

Want to track your own [Black Friday and holiday season ecommerce metrics](https://www.geckoboard.com/blog/8-ecommerce-metrics-black-friday-holidays/) on a live TV dashboard in the office? Check out this [live example dashboard](https://www.geckoboard.com/learn/dashboard-examples/holiday-season-ecommerce-dashboard-example/) for inspiration.

<a href="/learn/dashboard-examples/holiday-season-ecommerce-dashboard-example/" class="blog__btn" style="color:#fff;">View Dashboard Example</a>

Once you’re ready to build your own, sign-up for a free 30 day Geckoboard trial (no credit card required) and get your first metrics visualized in minutes:

<form action="/try-geckoboard/" method="get" class="inline__signup-form">
<input type="email" name="email" placeholder="Enter your email address">
<button class="btn">Get Started</button>
</form>
