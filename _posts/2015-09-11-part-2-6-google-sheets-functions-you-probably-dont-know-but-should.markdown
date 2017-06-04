---
title: 'Part 2: 6 Google Sheets Functions You Probably Don’t Know But Should'
date: 2015-09-11 07:47:00 Z
type: 
featured: 
description: Improve your data calculation skills by learning three of the more advanced
  Google Sheets functions.
newslettersignup: 'yes'
newslettersignupheader: Can we send you a short weekly email with lessons learned
  from other founders scaling their business?
newslettersignupbutton: Yes, send me their stories
assets:
- path: "/uploads/google-sheets-hero.jpg"
  name: google-sheets-hero
- path: "/uploads/CountIF Example.png"
  name: CountIF Example
- path: "/uploads/SumIF Example.png"
  name: SumIF Example
- path: "/uploads/Pivot Table Example 1.png"
  name: Pivot Table Example 1
- path: "/uploads/Pivot Table Example 2.png"
  name: Pivot Table Example 2
- path: "/uploads/VLookup Example.png"
  name: VLookup Example
Topics:
- Google Sheets
- Spreadsheets
- Metrics and KPIs
---

As we mentioned in [Part 1 of this post](https://www.geckoboard.com/blog/part-1-6-google-sheets-functions-you-probably-dont-know-but-should/), we’re big fans of Google Sheets at Geckoboard. This is why [we recently enhanced our own Google Sheets dashboard integration](https://www.geckoboard.com/blog/feature-announcement-new-and-enhanced-google-sheets-dashboard-integration/). Now you’ve mastered three of the more basic Google Sheets functions, using Part 1 of this post, it’s time to move on and take a look at the next three, more advanced Google Sheets functions.

##4. VLookup & HLookup in Google Sheets

Google Sheet’s lookup functions are best explained with an example. In a nutshell, they let you search for a match for a specific word and then read a value from a corresponding row or column. This can be really handy if you have different sets of data for the same objects in your spreadsheet, for example, several rows of data about an individual product, person, or project. 

In the example below, imagine you want to track the change in numbers of Apples, Oranges and Pears between January and February. The order of the fruits, and what fruits are available change each month so a simple fixed cell subtraction won’t work. 

Instead, with VLOOKUP() you can tell Google Sheets to look vertically through a set of data until it finds a match for the word you’re searching for and then read horizontally to find the corresponding value in an adjacent column. VLookup stands for Vertical Lookup because it looks vertically for the word then horizontally for the value while HLookup stands for Horizontal Lookup because it looks horizontally for the word and then vertically for the value.

Let’s start with a VLookup using the below table and using the formula:

=VLOOKUP(F2,$A$2:$B$6,2,false) 

Within the brackets, “F2” is telling the VLookup to find the value “Apples”, which you find in cell F2. Because it’s a VLookup, the section of the formula “$A$2:$B$6” is telling Google sheets to look vertically in the January data (cells A2 to B6) for the value Apple. The “2” in the formula is telling the VLookup that, when it finds “Apple”, it should look in the second column for the value. The “false” is telling it that, if it doesn’t find the value, it shouldn’t do anything. Ultimately, this formula is looking for Apples in the January data set and then returns the value, 1003, in the second column.

To calculate the change, the lookup for February needs to be subtracted from the lookup for January, so we add to the formula as below:

=VLOOKUP(F2,$C$2:$D$6,2,false)-VLOOKUP(F2,$A$2:$B$6,2,false)

The second part of this formula is the same as above, but now we’re adding the February data and telling Google Sheets to subtract the January data from it. So, by taking the same formula as January and changing “$A$2:$B$6” for “$C$2:$D$6”, we’re telling Google Sheets to do the same VLookup, but for February. This is saying: Look at how many apples were purchased in February (785) and subtract how many apples were purchased in January (1003), returning a value of -218.

![VLookup Example](/uploads/VLookup Example.png) 

Similarly, HLOOKUP() performs the same function but reads across and then looks down once it has a match. More information on both functions can be found here:

1. [VLookup in Google Sheets](https://support.google.com/docs/answer/3093318) 
2. [HLookup in Google Sheets](https://support.google.com/docs/answer/3093375)
<br /><br />

##5. CountIF & SumIF in Google Sheets

SUMIF() and COUNTIF() are a bit easier to get your head around than lookups. If the logic statement in the CountIF or SumIF formula is true, Google Sheets can either count the number of instances or sum the corresponding value.

In the example below, you can count the number of Apples sold with a formula like: 

=COUNTIF(B2:B10,"Apple")

We’re saying: Count the number of instances of the word “Apple” in cells B2 to B10.

![CountIF Example](/uploads/CountIF Example.png)

You can also sum the total weight of Apples sold using the SumIF function.

=SUMIF(B2:B10,"Apple",C2:C10)

We’re telling Google Sheets to look for mentions of the word “Apple” in column B and calculate the total values of the corresponding cells in column C.

![SumIF Example](/uploads/SumIF Example.png)

##6. Pivot Tables in Google Sheets

Pivot Tables are one of the most powerful features in any spreadsheet application and Google Sheet’s implementation is particularly good. You can open a pivot table by selecting the data you want to use and then clicking Data >> Pivot Table.

Pivot Table reports make it really easy to bucket, filter, sort and summarise your data via a UI rather than a complex formula. As an example, with pivot tables you can do the same thing we just did with CountIF and SumIF for all fruit without having to use any formula. Beyond counting and summing, it’s also easy to calculate other values such as averages and variances as you can see in the example below. You can also take a look at the actual Google Sheet we've been using [here](https://docs.google.com/spreadsheets/d/1LSOo4hAfvgsQ9caowj_sJgCZKTEGkEVqqIWFIs-y5Xo/edit?usp=sharing).

![Pivot Table Example 1](/uploads/Pivot Table Example 1.png)

You can also use Pivot Tables to restructure your data. Below, the invoice number is shown in the first column with a column for each fruit type. Each cell then shows the number of each type in each order.

![Pivot Table Example 2](/uploads/Pivot Table Example 2.png)

These examples just touch upon what you can do with Pivot Tables. You can find [a lot more help for pivot tables in Google Sheets support center](https://support.google.com/docs/answer/1272898?hl=en).

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
