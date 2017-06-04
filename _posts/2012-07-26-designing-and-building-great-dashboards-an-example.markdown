---
title: Designing and Building Great Dashboards - An Example
date: 2012-07-26 10:19:00 Z
tags:
- dashboard
- design
- example
type: BlogPost
description: In this example, you'll see firsthand how to create a dashboard from
  start to finish using the six golden rules of dashboard design.
assets:
- path: "/uploads/hero8-1.jpg"
  type: BlogAsset
- path: "/uploads/1-screen-shot-2012-07-26-at-11.03.41-300x223-2.png"
  type: BlogAsset
- path: "/uploads/0-dashboard_example-300x208-2.jpg"
  type: BlogAsset
---

<p>Over the last couple of weeks I've published a series of articles called 'Designing and Building Great Dashboards. The <a href="https://www.geckoboard.com/blog/building-great-dashboards-6-golden-rules-to-successful-dashboard-design/">first post</a> in the series introduced 6 Golden Rules of Dashboard design and in the <a href="https://www.geckoboard.com/blog/designing-and-building-dashboards-data-visualisations/">second post</a> in the series I discussed the use of good data visualizations. In this post I use the rules and tips from the previous posts in this series to create a dashboard.</p>

<h2> </h2>
<h2>The Brief</h2>
The CEO of WidgetsRUs.com currently receives a weekly management report that gives an insight into the performance of the business. The report includes details on website usage, customer engagement, financials and some operational data like project status reports. This pack is produced in excel and sent via email. This process takes 2 to 3 hours per week. My brief was to create a dashboard to replace this process. I also took this as an opportunity to streamline the report and include only the most relevant information.<br>
<h2> </h2>
<h2>Step 1 - Dashboard Design</h2>
<h3>Rule 1 - Who are you trying to impress</h3>
It’s clear the requirement has come from the CEO, but I arrange a quick meeting to understand if the dashboard will be used by anyone else in the company.
<p>As well as the CEO, the CMO and the CFO attend the meeting. I’ve also get some useful insight that should help me address the other [Golden Rules of Dashboard Design](/blog/building-great-dashboards-6-golden-rules-to-successful-dashboard-design/).</p>
<h3> </h3>
<h3>Rule 2 - Select the right type of dashboard</h3>
The requirement is for an 'Executive Dashboard' – showing high level KPI’s (Key Performance Indicators). The curent excel report includes information that is not relevant for this audience (operational metrics) and so I take a  decision to remove this from the dashboard. If operational metrics are required, then I will recommend that another dashboard is created that focused exclusively on this sort of data.<br>

_See more focused example dashboards for [Marketing](https://www.geckoboard.com/learn/dashboard-examples/marketing-dashboard-example/ "Marketing dashboard example"), [Sales](https://www.geckoboard.com/learn/dashboard-examples/sales-dashboard-example/ "Sales dashboard example"), [Support](https://www.geckoboard.com/learn/dashboard-examples/support-dashboard-example/ "Support dashboard example") and [Dev Ops](https://www.geckoboard.com/learn/dashboard-examples/dev-ops-dashboard-example/ "Dev Ops dashboard example")_
<h3>Rule 3 - Group data logically - Use space wisely</h3>
The executive dashboard has 2 main 'groups of data'
<p>1. Customer Acquisition and Engagement</p>
<p>2. Financials</p>
<p>I will ensure that these sets of data are grouped logically</p>
<h3> </h3>
<h3>Rule 4 - Make the data relevant to the audience</h3>
My audience for this dashboard is the executive team. The dashboard will present a company wide snap-shot of the Key Performance Indicators. If the audience had included department heads then the scope of the dashboard may have been different.<br>
<h3> </h3>
<h3>Rule 5 - Don't clutter your dashboard - Present the most important metrics only</h3>
<p>I've decided to strip back on some of the requirements that the executive team mentioned (purely because in my experience a fair few of the ideas were 'nice to haves' as opposed to 'must haves'). I also make this decision to ensure the dashboard is not cluttered. I want to ensure that when the team see the dashboard they have a good 'Birds eye' view of their business. If any further analytics are required, then that is a separate requirement and will require another solution.</p>
<p> </p>
<h3>Rule 6 - How often does the data really need to be refreshed</h3>
The executive team meet on a weekly basis, so I know at the very least the data should be refreshed weekly. However I check with the technical team and they confirm that they could provide daily extracts from their CRM and financial systems - which is great.<br>
<h2> </h2>
<h2>Step 2 - Dashboard Build</h2>
<img class="wp-float-left" title="Dashboard_example" src="/uploads/0-dashboard_example-300x208-2.jpg" alt="" width="300" height="208">I mock-up my first visual of the dashboard - This is based on quite a few scrappy drawings from my first meeting with the board. But I'm happy that this dashboard will meet their requirements.
<p>I now need to decide on the most appropriate visualisations for each metric.<br> </p>
<p> </p>
<h3>Website Statistics - Visitor Count</h3>
Visitor count lends itself perfectly to a number and secondary stat (or a sparkline) - At a glance we are able to see if the traffic is 'good' or 'bad'. I also think that 'Time on Site' would be a useful engagement metric and decide to add this to the dashboard.<br>
<h3> </h3>
<h3>Funnel Visualisation</h3>
Although the standard funnel visualisations look pretty, because they are not drawn to scale, they are not very useful, however, when drawn to scale it can be a powerful visualisation. I decide to see what it would look like when drawn to scale and include this in my design.<br>
<h3> </h3>
<h3>Happinex Index</h3>
By combining various engagement measures, WidgetsRUs have created an in-house measure of customers happiness. This is a fantastic idea and is crying out to be represented by another Sparkline.<br>
<h3> </h3>
<h3>Traffic - Volume and Source</h3>
Initially, the executive team wanted to display this as a series of Pie-Charts, one for each month. However after some discussion it was agreed that Pie-charts are not the best way of showing series of data and so we agreed to go with a standard (and often under-used) bar chart.<br>
<h3> </h3>
<h3>Financial Information</h3>
In my experience financial information is often displayed incorrectly. It's either presented as a series of numbers (which makes comparison hard) or in some inappropriate visualisation (like a 3-D bar chart). The best visualisation I have ever seen for financials is the Bullet Graph (designed by Stephen Few - check out the <a href="http://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf" target="_blank">bullet graph spec</a> on Stephen's Blog). I decide my dashboard will include a Bullet Graph.<br>
<h2> </h2>
<h2>The Finished Dashboard</h2>
Using Geckoboard I was able to build this dashboard in about 2 hours:
<p><img class="wp-float-center" title="WidgetsRUs Example Dashboard" src="/uploads/1-screen-shot-2012-07-26-at-11.03.41-300x223-2.png" alt="" width="300" height="223"></p>

Want to create your own live TV dashboard to keep your team goal-focused and motivated? <a href="https://www.geckoboard.com/try-geckoboard/" target="_blank">Start a free Geckoboard trial</a> to get started (no credit card required).

<form action="/try-geckoboard/" method="get" class="inline__signup-form">
<input type="email" name="email" placeholder="Enter your email address" />
<button class="btn">Get Started</button>
</form>

**Related Posts:**

- [5 Terrible Dashboard Designs and How to Fix Them](https://www.geckoboard.com/blog/5-terrible-dashboard-designs-and-how-to-fix-them)
- [How to Visualize Your Sales Metrics: 6 Sales Dashboard Examples](https://www.geckoboard.com/blog/how-to-visualize-your-sales-metrics-6-example-sales-dashboards)
- [4 Essential Steps to Designing a Dashboard That Inspires Action](https://www.geckoboard.com/blog/4-essential-steps-to-designing-a-dashboard-that-inspires-action)
- [Dashboard Design: What Makes an Effective KPI Dashboard?](https://www.geckoboard.com/blog/dashboard-design-what-makes-an-effective-kpi-dashboard)
