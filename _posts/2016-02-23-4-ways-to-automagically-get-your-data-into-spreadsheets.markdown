---
title: 4 Ways to Automagically Get Your Data Into Spreadsheets
date: 2016-02-23 09:00:00 Z
type: 
description: Here are four different ways to get almost any data into a spreadsheet.
newslettersignup: 'yes'
newslettersignupheader: Can we send you a short bi-weekly email with lessons learned
  from other founders scaling their business?
newslettersignupbutton: Yes, send me their stories
assets:
- path: "/uploads/data-into-spreadsheets-larger.jpg"
  name: data-into-spreadsheets-larger
- path: "/uploads/supermetrics.png"
  name: supermetrics
- path: "/uploads/spreadsheets-dashboard.png"
  name: spreadsheets-dashboard
Topics:
- Metrics and KPIs
---

Want to monitor your data but limited by in-app options? Maybe your data “lives” in an application that doesn’t offer a dashboard view of the metrics, it’s a difficult format to monitor, or perhaps you want other team members to be able to easily view the raw data without having to login. Regardless, monitoring your data is a hassle and you need a solution pronto.

*...drumroll please...* 

Say hello to the spreadsheet integration. All you have to do is get your data from wherever it lives into an Excel spreadsheet or a Google Sheet. Easy peasy, right? Actually, it is! Here are four different ways to get almost any data into a spreadsheet.
 
##GETTING YOUR DATA INTO SPREADSHEETS
###1. Manual Input
Entering data by hand (typing it in) is likely the most common and least efficient way to get data into a spreadsheet. This method implies you regularly interact with spreadsheets and this is where your data is kept. Manual input is better suited to data that doesn’t update as frequently so we won’t dive into this process here. Instead, we’ll focus on other automated or real-time methods of getting data into spreadsheets.
 
###2. Third-party tools (Excel Spreadsheets or Google Sheets)
A variety of services, add-ons and tools specialize in getting data from your app into spreadsheets.

For example, if you use one of the tools listed below, <a href="https://chrome.google.com/webstore/detail/supermetrics/bnkdidgbiidpnohlnhmkehlimlnfhgce" target="_blank">Supermetrics</a> would allow you to schedule an automatic daily refresh of your data on Google Sheets. With just <a href="http://supermetrics.com/support/supermetrics-for-googledocs/" target="_blank">four quick steps</a>, your data will be in Google Sheets.
1. Install the <a href="https://chrome.google.com/webstore/detail/supermetrics/bnkdidgbiidpnohlnhmkehlimlnfhgce" target="_blank">add-on</a>
2. Choose your data source (see available sources below)
3. Log in to data source and approve permission
4. Start running queries in Google Sheets

It’s great, because loads of tools work with Supermetrics, including:
Bing Ads, Facebook Ads, Facebook Insights, Google Adwords, Google Analytics, Google BigQuery, Google Search Console, Google+, Instagram, LinkedIn, MailChimp, Moz, Pinterest, Reddit, SEMrush, Stripe, Tumblr, Twitter, Vimeo, VKontakte, Yahoo Gemini, YouTube or your own database (MySQL, Oracle, Google Cloud SQL, SQL Server)
![supermetrics](/uploads/supermetrics.png)

In a similar way, if you use Xero for accounting, <a href="http://www.blinkreports.com/" target="_blank">Blink Reports</a> can automatically import your data to Google Sheets. Another third party tool you might find useful is the <a href="https://www.geckoboard.com/blog/get-more-metrics-from-your-google-analytics-data-with-google-sheets/#.Vpj4afFVqzJ" target="_blank">Google Sheets’ add-on for Google Analytics</a>.

Of course, third-party tools are also available for Microsoft Excel. For example, if you use Adobe Analytics, <a href="https://marketing.adobe.com/developer/get-started/partner-api/c-reportbuilder" target="_blank">Report Builder</a> is a plugin that enables you extract your Analytics data from Adobe into Excel. 

An advantage of Google Sheets over Excel is that some of these tools can run in the background even when your spreadsheet isn’t opened.

This is only a short list of some of our favorite third-party tools, so if you’re looking for something specific you may want to do  a quick online search.
 
###3. Import Functions (Google Sheets)
An entire library of <a href="https://www.geckoboard.com/blog/part-1-6-google-sheets-functions-you-probably-dont-know-but-should/" target="_blank">functions in Google Sheets</a> allow you to achieve powerful results without having to write your own script. More specifically, Google Sheets offers five different <a href="https://support.google.com/docs/table/25273?hl=en" target="_blank">import functions</a> (listed below) that allow it to pull data into your spreadsheet from a variety of sources including XML, HTML, RSS and CSV - perfect for importing lists of blog posts, tweaks, product inventories or data from another service. Here are the specific functions along with the type of data they collect:
- `IMPORTDATA(url)` - Imports data at a given url in .csv (comma-separated value) or .tsv (tab-separated value) format
- `IMPORTFEED(url, query, headers, num_items)` - Imports a RSS or ATOM feed.
- `IMPORTHTML(url, query, index)` - Imports data from a table or list within an HTML page.
- `IMPORTRANGE(spreadsheet_key, range_string)` - Imports a range of cells from a specified spreadsheet.
- `IMPORTXML(url, xpath_query)` - Imports data from any of various structured data types including XML, HTML, CSV, TSV, and RSS and ATOM XML feeds.

Using these functions, you can easily scrape data from web pages, feeds and files. Also, a built in <a href="https://support.google.com/docs/answer/3093281?hl=en" target="_blank">finance function</a> enables you to pull back market data.

Here are a few separate articles from our Customer Success team explaining how to use these functions to import different data sets into Google Sheets, which I think are super useful:
- <a href="https://support.geckoboard.com/hc/en-us/articles/207238327-Using-the-Google-Sheets-ImportXML-function-to-display-data-in-Geckoboard" target="_blank">Using Google Sheets’ IMPORTXML function</a>
- <a href="https://support.geckoboard.com/hc/en-us/articles/206260188-Using-the-Google-Sheets-ImportHTML-function-to-display-data-in-Geckoboard" target="_blank">Using Google Sheets’ IMPORTHTML function</a>
- <a href="https://support.geckoboard.com/hc/en-us/articles/216438097-Using-Google-Sheets-IMPORTDATA-function-to-display-CSV-data-in-Geckoboard" target="_blank">Using Google Sheets’ IMPORTDATA function to display CSV data</a>
- <a href="https://support.geckoboard.com/hc/en-us/articles/208314537-Creating-a-weather-widget-using-Google-Sheets" target="_blank">Creating a weather widget using Google Sheets</a>
- <a href="https://support.geckoboard.com/hc/en-us/articles/206883827-Creating-a-Countdown-Timer-using-Google-Sheets" target="_blank">Creating a Countdown Timer using Google Sheets</a>
- <a href="https://support.geckoboard.com/hc/en-us/articles/207337458-Using-Google-Sheets-GOOGLEFINANCE-function-to-display-market-data-in-Geckoboard" target="_blank">Using Google Sheets' GOOGLEFINANCE function to display market data</a>
 
If you have other favorite import functions in Google Sheets we’d love to hear about them in the comments.

###4. Scripting (Google Sheets)
Scripting (or in non-technical terms - writing a short bit of custom code) is a very powerful way to get data into Google Sheets. It’s basically an easier way to write large spreadsheet formulas and functions. <a href="https://developers.google.com/apps-script/overview" target="_blank">Google Apps Script</a> is a cloud based scripting language that provides easy ways to automate tasks across Google products and other services.

These scripts can run in the background, can be automated via triggers and have a <a href="http://stackoverflow.com/questions/tagged/google-apps-script" target="_blank">community-based support model</a>. The following example demonstrates use of this method to get Discourse data into Google Sheets.

At Geckoboard, we use <a href="http://www.discourse.org/" target="_blank">Discourse</a> for our <a href="https://community.geckoboard.com/" target="_blank">Developer Community</a> and have a dashboard widget to show the number of new topics created “Today”. We built that particular dashboard widget using a combination of Google Apps Scripts and our Spreadsheets integration. 

**Here are the 5 steps we took:**
 
1. Created a new Google Sheets' Spreadsheet
2. Created a new script for our Spreadsheet (Tools > Script editor) and copy and pasted <a href="https://gist.github.com/chrislkeller/5719258" target="_blank">chrislkeller's ImportJSON functions</a> (to be able to import the output of Discourse’s API which is JSON).
3. Looked in <a href="https://meta.discourse.org/t/discourse-api-documentation/22706" target="_blank">Discourse's API documentation</a> for a call that returned the latest topics created in the Community (which turns out to be <a href="https://community.geckoboard.com/latest.json" target="_blank">https://community.geckoboard.com/latest.json</a>)
4. Added a new function in our script to call the endpoint identified on step 3 and update cell A1 with the response.
5. Finally, added a <a href="https://developers.google.com/apps-script/guides/sheets#triggers" target="_blank">trigger</a> to run the function myFunction every hour.
 
With the data already in Google Sheets, it was simply a matter of using <a href="https://support.google.com/docs/table/25273?hl=en" target="_blank">Google Sheets standard functions</a> to identify the rows containing topics created Today and count them.  

Google offers a variety of resources to help you make the most of Google Sheets using Google Apps Scripts. You might find some of <a href="https://sites.google.com/site/scriptsexamples/home" target="_blank">their examples</a> useful to get your data into Google Sheets.
##Making your data actionable
Now that you’ve seen first hand how [useful](https://www.geckoboard.com/blog/part-1-6-google-sheets-functions-you-probably-dont-know-but-should/) and [powerful Google Sheets](https://www.geckoboard.com/blog/part-2-6-google-sheets-functions-you-probably-dont-know-but-should/) and Excel can be for importing data from other sources, it’s time to make your data actionable! Importing your data into spreadsheets will help you get the right metrics in front of the right people via a <a href="https://www.geckoboard.com/learn/guides/displaying-your-dashboard-on-a-screen" target="_blank">TV dashboard</a>. And that’s where the magical action happens.

Need some dashboard inspiration? Check out this [example Spreadsheets Dashboard](https://www.geckoboard.com/learn/dashboard-examples/excel-dashboard-example/). 

![spreadsheet-dashboard-example](/uploads/spreadsheets-dashboard.png)

**Trying to figure out which key performance indicators (KPIs) to track? [Learn more about KPIs.](https://www.geckoboard.com/learn/what-is-a-key-performance-indicator-kpi/)**
