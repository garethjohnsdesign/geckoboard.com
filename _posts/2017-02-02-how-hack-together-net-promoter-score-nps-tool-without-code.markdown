---
title: How to Hack Together a Net Promoter Score Tool Without Writing a Line of Code
date: 2017-02-02 09:00:00 Z
type: 
description: Discover how Nikolay Piriankov, CEO at Taylor & Hart, built an automation
  tool to track their NPS score live on a TV dashboard.
templateversion: 
newslettersignup: 'yes'
newslettersignupheader: Can we send you a short bi-weekly email with lessons learned
  from other founders scaling their business?
newslettersignupbutton: Yes, send me their stories
assets:
- path: "/uploads/taylor-hart-kpi-dashboard.jpg"
  name: taylor-hart-kpi-dashboard
- path: "/uploads/Taylor___Hart-dashboard-widget.jpg"
  name: Taylor___Hart-dashboard-widget
- path: "/uploads/NPS_dashboard_Taylor_and_Hart (1).png"
  name: NPS_dashboard_Taylor_and_Hart (1)
- path: "/uploads/Nikolay_Piriankov_Taylor_and_Hart (1).png"
  name: Nikolay_Piriankov_Taylor_and_Hart (1)
- path: "/uploads/6243040720.jpeg"
  name: '6243040720'
- path: "/uploads/hart-taylor-nps-survey (1).png"
  name: hart-taylor-nps-survey (1)
- path: "/uploads/NPS-score.png"
  name: NPS-score
Topics:
- Metrics and KPIs
---

*Editor’s note: This is a guest post by Nikolay Piriankov, CEO at Taylor & Hart - a London-based luxury online engagement and wedding ring retailer specializing in customized rings.*

This year has been the year of data for us. We’ve gone from almost no data analysis to data-driven decision making across the entire company. A part of this happened because of our time in Techstars.

During week one at Techstars, every team has to decide on the <a href="https://www.geckoboard.com/learn/interviews/the-one-metric-that-matters/" target="_blank">One Metric That Matters (OMTM)</a> for their company and start reporting on it in a Google Sheet. We decided ours was going to be U.S. sales. We started working on executing strategies to grow our U.S. inquiries and sales.

At the beginning of week two, we came into the big room where all the companies worked and found an enormous TV dashboard staring at us. Each company’s OMTM was on the screen and there was no place to hide. Techstars was using <a href="https://www.geckoboard.com/" target="_blank">Geckoboard</a> to display the live metrics and we have been using them ever since, too.

While this initially felt a little scary, I soon discovered just how useful having metrics on a TV screen could be. When things went well, everyone felt great and talked about the numbers. When the line dipped for a week, I had everyone coming at me to discuss ideas on how we could improve.

As the program went on, I quickly realized that while sales was a great metric for us, an e-commerce business, sales volume or revenue did not tell us how great the customer experience was - and this really mattered for us. Buying an engagement ring is an emotional, highly charged experience. We were either going to get it 100% right or we were going to hear about it - somehow we just never had customers in the middle.

##A more useful metric: Net Promoter Score
So I discovered <a href="https://www.geckoboard.com/learn/kpi-examples/marketing-kpis/net-promoter-score-nps/" target="_blank">Net Promoter Score (NPS)</a> as a metric and fell in love with the idea. We would use this metric to not only validate if our service, product, and delivery were appreciated but also as a proxy to understanding how likely we would have repeat purchases and referrals - two things that are critical to our long-term strategy.

What is Net Promoter Score? It’s a customer feedback metric that attempts to understand how many brand ambassadors you have and compares their growth (or decline) over time. 

It is useful to measure company performance in service and quality over time and to understand how likely your existing customer base is to contribute growth in <a href="https://www.geckoboard.com/learn/kpi-examples/marketing-kpis/ltv-cac-ratio/" target="_blank">lifetime value (LTV)</a>.

This image explains it well:
![nps-score](/uploads/NPS-score.png)

Source: <a href="https://bluenose.zendesk.com/hc/en-us/articles/206237926-NPS-Overview" target="_blank">Bluenose</a>

You can read more about NPS and why it is important <a href="https://en.wikipedia.org/wiki/Net_Promoter" target="_blank">here</a>.

I found some tools that could be automated to collect the data, but it felt like their integrations with our existing CRM solutions would be duplicating work we’ve already done. I also felt like the monthly fee was not going to be great value for us in the long term, given the solution appeared to be quite easy to build in-house.

##Building NPS Automation without writing code
So we decided to create an NPS capture, calculation, and reporting flow without writing a single line of code. 

We used the following tools in creating our solution. Some, like Zapier, were used more than once in the data flow:

- Salesforce
- Active Campaign
- Zapier
- Wufoo
- Google Sheets
- Geckoboard

Here’s the seven step flow that works for us:

**Step 1.** A customer places an order on our website and our Salesforce system changes their status to SALE.

**Step 2.** This lead status change triggers a Zapier connection which sends the customer details into an Active Campaign list called CUSTOMERS. The idea here is that we can use this list to send a number of automations, not limited only to the net promoter score one described in this post (referral and repeat purchase e-mails, for example).

**Step 3.** The automation sends out an email to the customer that has the typical Net Promoter Score questionnaire. It looks like this:

![taylor-hart-NPS-survey](/uploads/hart-taylor-nps-survey (1).png)

**Step 4.** If the customer does not click on any of the links in the e-mail within 4 days, they get an additional reminder. This increased the response rate from 20% to 45%.

**Step 5.** Each number, when clicked, sends the customer to a Wufoo form where we ask other questions about their experience. This gives us a chance to understand why the NPS score was so high or low. On this form, the NPS number gets filled into the form via a hidden field. We do this by having a different URL for each number 0 to 10.

**Step 6.** The completed Wufoo form Zaps into a Google Sheet where we apply a formula (see below) on the raw data, for each month, to work out the monthly and rolling 90 days net promoter score. This was the tricky part because the data would just build up and we needed a way to segment it into months to track monthly performance, and perhaps an average of the last 90 days.

Here is our 90 day formula from our <a href="https://docs.google.com/spreadsheets/d/1f12Bb9ZUg_i7teOtskO7cZRNpPAEQ9dRIOUjySasxeE/edit#gid=1705926010" target="_blank">Google Sheet</a> (feel free to create a copy of this template spreadsheet to begin tracking your NPS):

`=100*((countifs(NPS2!C:C,">8",NPS2!F:F,"<="&D6,NPS2!F:F,">="&(D6-90))-countifs(NPS2!C:C,"<7",NPS2!F:F,"<="&D6,NPS2!F:F,">="&(D6-90)))/countifs(NPS2!F:F,"<="&D6,NPS2!F:F,">="&(D6-90)))`

- **NPS2** is the sheet where the raw data comes from.
- **Column C** is the NPS number.
- **Column F** is the month number.
- **D6** is today’s date. This is needed so the formula only works on the data points in the time period today minus 90 days.

As you can probably guess from this formula, all scores 0-6 are considered the same, all 7s and 8s are treated the same and all 9s and 10s, the same. To understand this imagine the following three scenarios:
- Everyone gives us a score of a number between 0 and 6. We would have a score of **-100.**
- Everyone gives us a score of a 7 or 8. We would have a score of **0.**
- Everyone gives us a score of 9 or 10. We would have a Net Promoter Score of **100.**

Our current score hovers above 80. We’re really pleased with that and now our goal is to keep it at this level since it means we get mostly 9s and 10s (‘promoters’).

**Step 7.** Hidden fields in the Wufoo form coming all the way from Salesforce also allow us to segment this data by consultant and this has allowed us to now also use NPS as a performance metric in the sales team on an individual basis. 

##Refining the automation flow
After some time doing the above process, we started noticing that a lot more people clicked on the e-mail survey than those who completed the form. In fact, only about a third of the people who clicked on a score completed the full questionnaire.

We decided to keep the Wufoo form for more detailed feedback but stopped relying on it to send our NPS data through to the Google Sheet. 

With a bit of hacking on Zapier, we found that Active Campaign has a Zapier integration which used a link CLICK as a trigger. FANTASTIC! Now all a customer would need to do was click on the number and we captured the data, regardless of how many went on to complete the form on the next page.

We disabled the Active Campaign > Wufoo > Google Sheets integration and instead made any click in the Active Campaign e-mail send the URL of the click directly to the Google Sheet, where we extract the number from the URL for NPS processing.

Once we got our monthly NPS data, we connected our Geckoboard to the Google Sheet and *badabing-badaboom* - we have a live NPS-to-TV-dashboard system that works PERFECTLY.

![nps-geckoboard-visualization](/uploads/Taylor___Hart-dashboard-widget.jpg)

To recap, we used the following flow and tools:

*Sales are updated in Salesforce > Zapier > Active Campaign NPS email automation > Zapier > Google Sheets data crunching > Geckoboard data visualization* (with a Wufoo form in the middle as the landing page for when customers click on the number in the e-mail).

Or if you don’t use the exact stack as ours, here’s the generic flow:

***CRM > EMAIL AUTOMATION > GOOGLE SHEETS > DATA VISUALIZATION***

I hope this guide has been useful and will inspire you to start tracking your own customer’s NPS. Remember, you can track NPS at various stages. We track NPS when an order is placed and also when the customer receives the product. 

![taylor-hart-dashboard](/uploads/NPS_dashboard_Taylor_and_Hart (1).png)

More than one NPS data point for the same person allows you to see if you have over- or under-delivered on an earlier promise to the customer. Ideally, you would like to see your NPS increase on the second customer interaction, and over time.

##Getting your NPS score on a TV dashboard

Your net promoter score is a powerful metric for improving the customer experience. And it’s even more impactful when your team can see live updates on a TV dashboard. Want to create this NPS automation for your team?

**Try Geckoboard for free for 30 days - no credit card required.**

<form action="/try-geckoboard/" method="get" class="inline__signup-form">
<input type="email" name="email" placeholder="Enter your email address">
<button class="btn">Get Started</button>
</form>


####About the author:

*Nikolay Piriankov is the CEO at <a href="https://taylorandhart.com/us/" target="_blank">Taylor & Hart</a> - an online retailer of custom designed engagement rings and jewellery. Having completed Techstars in Boston in 2016, Nikolay is working on solutions that leverage technology to change the engagement ring shopping experience to be more affordable and allow people to express themselves better through a unique design and product.*
