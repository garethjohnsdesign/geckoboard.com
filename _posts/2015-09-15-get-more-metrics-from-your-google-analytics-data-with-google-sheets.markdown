---
title: Get more Metrics from your Google Analytics Data with Google Sheets
date: 2015-09-15 11:13:00 Z
type: 
featured: 
assets:
- path: "/uploads/google-sheets-column-1.png"
  name: google-sheets-column-1
- path: "/uploads/GoogleAnalyticsSheetsGetStarted.png"
  name: Google Analytics and Google Sheets Get Started
- path: "/uploads/Google Analytics Addon 1.png"
  name: Google Analytics Addon 1
- path: "/uploads/Google Analytics Addon 2.png"
  name: Google Analytics Addon 2
- path: "/uploads/Google Analytics Addon 3.png"
  name: Google Analytics Addon 3
- path: "/uploads/Google Analytics Addon 4.png"
  name: Google Analytics Addon 4
- path: "/uploads/Google Analytics Addon 5.png"
  name: Google Analytics Addon 5
- path: "/uploads/Google Analytics Addon 6.png"
  name: Google Analytics Addon 6
Topics:
- Google Sheets
- Google Analytics
- Spreadsheets
---

Google Analytics is a great tool for tracking and analysing your most important website data. However, sometimes it can be a little fiddly to use their interface for deeper dives or complex calculations. Conveniently, though, the team at Google have built a handy tool to pull your Google Analytics data straight into Google Sheets, where you can manipulate it to your heart’s content in the familiar surroundings of a spreadsheet. This approach can also be used to manipulate your Google Analytics data, or create combinational metrics using other data sources before pulling it into your Geckoboard via [our enhanced Google Sheets dashboard](https://www.geckoboard.com/blog/feature-announcement-new-and-enhanced-google-sheets-dashboard-integration/). Let’s take a little look at how the Google Analytics and Sheets integration works.

##Step 1: Install the add-on

Simply go to this link:

https://chrome.google.com/webstore/detail/google-analytics/fefimfimnhjjkomigakinmjileehfopp

Then install the add-on by hitting the blue “+FREE” button in the top right-hand corner. This will then install the add-on and ask you to connect your Google Analytics account before opening a new Google Sheet for you to get started.

##Step 2: Create a new report

Once you’ve installed the add-on and the Google Sheet has opened, hit Add-ons > Google Analytics > Create new report to get started.

![Google Analytics and Google Sheets Get Started](/uploads/GoogleAnalyticsSheetsGetStarted.png)

From this basic setup screen you specify the account, property and view that you want to pull data from. You can then select the metrics you’re interested in, and any dimensions that you’d like them broken down by. 

![Google Analytics Addon 1](/uploads/Google Analytics Addon 1.png) 

For example, setting the metric as ‘Users’ and the dimension as ‘Date’ will return a table containing daily user data, like so:

![Google Analytics Addon 2](/uploads/Google Analytics Addon 2.png) 

You can return multiple metrics broken down by multiple dimensions in a single report if you’d like, but we’re going to keep things simple for now.

##Example use - total users across web properties

Let’s say you’re managing a couple of web properties, and you’d like to see the total number of users you’re serving over time. You can’t do this in Google Analytics itself since it can only show reports for a particular property/view combo. However, we can use our handy Google Sheets add-on to do this simple calculation.

I created a couple of reports that pull back the same metric (‘Users’) sliced by the same dimension (‘Date’) from two different web properties. My fictional websites are called “Metrix Foods” and “Metrix Drinks”. The add-on works by storing the report configurations as columns in the ‘Report configuration’ sheet. From here you can tweak various parameters, and access parameters that aren’t available in the initial setup interface (more about those [here](https://developers.google.com/analytics/solutions/google-analytics-spreadsheet-add-on)). For example, we can now see that the time period is set to the last 7 days by default. I’m going to leave this as it is for now (row 7), but you can easily tweak it to your specific needs.

![Google Analytics Addon 3](/uploads/Google Analytics Addon 3.png) 

Now let’s run those reports! Hit Add-ons > Google Analytics > Run reports and sit back as your data wings its way from one Google server to another.

You’ll now have two extra worksheets, conveniently named after your reports.

![Google Analytics Addon 4](/uploads/Google Analytics Addon 4.png) 

Open one of these up and take a look. There’s an overview section at the top which contains a little metadata about the report itself, but the good stuff starts below that. Behold, your Google Analytics data!

![Google Analytics Addon 5](/uploads/Google Analytics Addon 5.png) 

Now we’ve got the individual user numbers for each site, we just need to sum them together. Make a new sheet and pop ‘Date’ into A1 and ‘Total users’ into B1. The dates for the two reports are identical, so now we can copy them out of the first worksheet. In A2, write ‘='Metrix foods'!A16’ (where ‘Metrix foods’ is replaced by the title of your first worksheet), hit enter, and then drag this down so that it’s pulling back all the dates from that report.

Finally, in B2, write ‘='Metrix foods!B16+'Metrix drinks!B16’ (substituting the worksheet names for your own), hit enter, and drag down to match the length of the dates column. Voila - your total users are summed across two sites!

![Google Analytics Addon 6](/uploads/Google Analytics Addon 6.png) 

You could now chart this data in Google Sheets, or use it to create a widget using [Geckoboard’s enhanced Google Sheets integration](https://www.geckoboard.com/blog/feature-announcement-new-and-enhanced-google-sheets-dashboard-integration/). What’s more, you can even schedule the report to run automatically, meaning that your data will always be fresh in Google Sheets and on your Geckoboard. Just hit Add-ons > Google Analytics > Schedule reports to set it up.

I hope that this simple example has shown you the potential of this fantastic add-on. Having access to key data from Google Analytics in the familiar setting of a spreadsheet is a powerful tool to have in your KPI dashboard arsenal!
