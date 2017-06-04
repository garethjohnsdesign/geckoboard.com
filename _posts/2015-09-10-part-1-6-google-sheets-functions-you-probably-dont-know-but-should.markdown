---
title: 'Part 1: 6 Google Sheets Functions You Probably Don’t Know But Should'
date: 2015-09-10 14:12:00 Z
type: 
featured: 
description: Trying to calculate lots of data? Get more out of Google Sheets by learning
  these three functions.
newslettersignup: 'yes'
newslettersignupheader: Can we send you a short weekly email with lessons learned
  from other founders scaling their business?
newslettersignupbutton: Yes, send me their stories
assets:
- path: "/uploads/google-sheets-hero-1.jpg"
  name: google-sheets-hero-1
- path: "/uploads/Apples & Pears.png"
  name: Apples & Pears
- path: "/uploads/Join Function.png"
  name: Join Function
- path: "/uploads/Index function.png"
  name: Index function
- path: "/uploads/sheets-functions-1.gif"
  name: sheets-functions-1
- path: "/uploads/IMPORTXML Function.png"
  name: IMPORTXML Function
- path: "/uploads/ImportHTML Function.png"
  name: ImportHTML Function
- path: "/uploads/IPORTFEED Function.png"
  name: IPORTFEED Function
- path: "/uploads/IMPORTDATA Function.png"
  name: IMPORTDATA Function
Topics:
- Google Sheets
- Spreadsheets
- Metrics and KPIs
---

We’re big fans of Google Sheets at Geckoboard, that’s why we recently enhanced our own [Google Sheets dashboard integration](https://www.geckoboard.com/blog/feature-announcement-new-and-enhanced-google-sheets-dashboard-integration/). Google Sheets is an incredibly versatile and powerful tool that excels (pun intended) at organizing and calculating data in a spreadsheet format. Being cloud-based, it also offers many possibilities for collaborating, automating data collection, and even for pulling data in from third-party APIs.

If you’re familiar with other spreadsheet tools like Excel, iWork Numbers, Zoho Sheet or Open Office Calc, Google Sheets is extremely easy to pick up. If you’re getting started with Sheets, or just looking to up your spreadsheet game, here are three out of six of our favourite functions that can help you get the most from your data. We’ll also be following up shortly with [three more advanced Google Sheets functions](https://www.geckoboard.com/blog/part-2-6-google-sheets-functions-you-probably-dont-know-but-should/).

## 1. Joining text in Google Sheets

Sometimes it can be handy to use the values in the spreadsheet to construct a piece of text. Perhaps you’d like to summarise some key values or even generate some html. 

By typing **&** you can concatenate cell values with other cells or, using quotes, any other text you wish to insert.

In the example below we’ll use the following formula: 

=A1 & " " & B1 & " and " & A2 & " " & B2

to produce the following text “4 Apples and 5 Pears”

![Apples & Pears](/uploads/Apples & Pears.png)

If you’d like to combine lots of values, the JOIN function is also useful. You specify what character you’d like to add between the values, and the cell values you’d like to join. 

In the example below the formula:

=join(",",A1:A5)

Will join the values to produce:

1,2,3,4,5

![Join Function](/uploads/Join Function.png) 

## 2. INDEX: Return the first or last value in a Google Sheet

Spreadsheets are much easier to work with when you have a fixed data set. However, if you’re adding new data at regular intervals, perhaps a new row every week, there’s often some regular maintenance required to keep your functions working. 

For example, imagine you always want to calculate the change between the bottom cell in your spreadsheet with the previous value. This is surprisingly difficult to do if you want the result to be calculated in the same cell every time. There’s no LAST() function, which would seem useful.

However, there is a solution. In Sheets INDEX() allows you to return the value of a cell by specifying which row and column to look at in the specified array. 

=INDEX(A:A,1,1) for example will always return the first cell in column A.

![Index function](/uploads/Index function.png)

Combining INDEX() with COUNTA() you can also create a formula that will always return the last value in a column. 

=INDEX(A:A,COUNTA(A:A),1)

![sheets-functions-1](/uploads/sheets-functions-1.gif)

You can find more info on this [here](https://support.google.com/docs/answer/3098242?hl=en).

##3. Import data into Google Sheets

One of Google Sheet’s more unexpected features are its import functions. 

These allow it to pull data into your spreadsheet from a variety of sources including XML, HTML, RSS and CSV - perfect for importing lists of blog posts, tweaks, product inventories or data from another service. For example, you can import a list of links from a specified URL with...

=IMPORTXML("https://en.wikipedia.org/wiki/Moon_landing", "//a/@href")

![IMPORTXML Function](/uploads/IMPORTXML Function.png)

Import the contents of a list or table from a specified URL using:

=IMPORTHTML("http://en.wikipedia.org/wiki/Demographics_of_India", "table", 4)

![ImportHTML Function](/uploads/ImportHTML Function.png) 

Import an RSS or Atom feed using:

=IMPORTFEED("http://news.google.com/?output=atom")

![IMPORTFEED Function](/uploads/IPORTFEED Function.png)

Import the contents of a CSV file from a specified URL using:

=IMPORTDATA("http://www.census.gov/2010census/csv/pop_change.csv")

![IMPORTDATA Function](/uploads/IMPORTDATA Function.png) 

Coupled with Google Sheet’s scripting and automation features, Import functions become a very powerful tool for scraping and structuring data from public sources. Use responsibly! 

For some more advanced Google Sheets tips, see [Part 2 of this post](/blog/part-2-6-google-sheets-functions-you-probably-dont-know-but-should/).

##Next Steps

Want to see how these Google Sheets functions can help you build a live TV dashboard? Check out this [example Spreadsheets Dashboard](https://www.geckoboard.com/learn/dashboard-examples/excel-dashboard-example/).

**Ready to use these Google Sheets functions to create your own customized dashboard?** [Try Geckoboard for free](https://www.geckoboard.com/try-geckoboard/) (no credit card required) to create a dashboard today.

<form action="/try-geckoboard/" method="get" class="inline__signup-form">
<input type="email" name="email" placeholder="Enter your email address" />
<button class="btn">Get Started</button>
</form>

P.S. You can also learn more about Google Sheets functions in our support center:

1. [Aggregating Facebook Likes in Google Sheets](https://support.geckoboard.com/hc/en-us/articles/204159578) 
2. [Importing Salesforce data into Google Sheets](https://support.geckoboard.com/hc/en-us/articles/207221527) 
3. [Importing data into Google Sheets using IMPORTXML](https://support.geckoboard.com/hc/en-us/articles/207238327) 
4. [Importing data into Google Sheets using IMPORTHTML](https://support.geckoboard.com/hc/en-us/articles/206260188)
5. [Importing stock prices into Google Sheets using GOOGLEFINANCE](https://support.geckoboard.com/hc/en-us/articles/207337458) 
6. [Creating a countdown timer using Google Sheets](https://support.geckoboard.com/hc/en-us/articles/206883827)
