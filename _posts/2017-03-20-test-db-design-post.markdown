---
title: Test DB Design Post
date: 2017-03-20 19:03:00 Z
published: false
type: 
description: 
templateversion: 
---

*This post is the first post in a series of posts called ‘Designing and Building Great Dashboards’. The idea of these posts is to introduce some high-level best practices when designing, building and implementing dashboards for your business. Much of what is discussed here is common sense and has been covered by other authors and commentators, however, I thought it would be useful to distill all the good information out there into an easy to follow series of articles that step through the most important elements of successful dashboard design.*
<div class="p_embed p_image_embed"><img class="wp-float-center" src="/uploads/0-awesome-taxi-dashboard-at-singapore-2.jpeg.scaled1000-300x222-2.jpg" alt="Awesome-taxi-dashboard-at-singapore-2" width="500" height="371"></div>

*'Dashboards are not an appropriate venue for artistic impression.' - Stephen Few*
##Introduction
Dashboards are often created on-the-fly with data being added simply because there is some white space not being used. Different people in the company ask for different data to be displayed and soon the dashboard becomes hard to read and full of meaningless non-related information. When this happens, the dashboard is no longer useful.

This article discusses the steps that need to be taken during the design phase in order to create a useful and actionable dashboard.

##Rule 1 - Who are you trying to impress?
*'Does the CFO really need to know the servers are operating at 95% capacity?'*

Think about the audience for the dashboard. The most effective dashboards target a single type of user and just display data specific to that ‘use case’.

Is the dashboard going to be used by the executive team to monitor the company financials or will it be used by the marketing team to monitor daily activities? It’s important to ensure that where possible your dashboard consists of data that's specific to a single audience. Often this step is overlooked and dashboards include a mix of data: Some of which is relevant to one audience and some to another.

Example dashboards: [Marketing](https://www.geckoboard.com/learn/dashboard-examples/marketing-dashboard-example/ "Marketing dashboard example") | [Sales](https://www.geckoboard.com/learn/dashboard-examples/sales-dashboard-example/ "Sales dashboard example") | [Support](https://www.geckoboard.com/learn/dashboard-examples/support-dashboard-example/ "Support dashboard example") | [Dev Ops](https://www.geckoboard.com/learn/dashboard-examples/dev-ops-dashboard-example/ "Dev Ops dashboard example")

##Rule 2 - Select the right type of dashboard
There are 3 common types of dashboard, each performing a specific purpose. 

The types of dashboard are:
1. Operational
2. Strategic / Executive
3. Analytical

**Operational Dashboards**
These dashboards display data that facilitate the operational side of a business. For example, in a business with a website, it’s important to ensure that your website remains up and running, so you would monitor server up-time and utilisation. In a business with an inside sales function, you may want to create a dedicated [sales dashboard](/sales-dashboards/) that displays number of calls made and number of appointments booked.

Think of an operational dashboard as monitoring the nerve centre of your operation. Operational dashboards often require real-time or near real-time data

**Strategic / Executive Dashboards**
Strategic dashboards will typically provide the [KPIs](/learn/what-is-a-key-performance-indicator-kpi/) (Key Performance Indicators) that a companies executive team track on a periodic (daily, weekly or monthly basis). A strategic dashboard should provide the executive team with a high-level overview of the state of the business together with the opportunities the business faces.

This data could be:

+ Periodic revenue (vs prior period)
+ Costs (vs prior period)
+ Headcount (by department)
+ Sales pipeline

**Analytical Dashboards**
An analytical dashboard could display operational or strategic data. However, this type of dashboard will offer drill-down functionality - allowing the user to explore more of the data and get different insights. Often dashboards include this functionality when it is not required. Do not simply provide this functionality because you can.

Bear in mind that different user groups may require a different type of dashboard. The marketing manager may need both a Strategic and Operational view of their data. Where possible create two separate dashboards.

##Rule 3 - Group data logically - Use space wisely##
A well-designed dashboard will ensure that data is displayed in logical groups. For example, if a dashboard includes Financial KPIs and Sales Pipeline, ensure that the financial data is displayed next to each other, with the Sales Pipeline data displayed together in a separate logical group.

Grouping is often by department or functional area and can include:

- Product (Inventory, development)
- Sales/Marketing
- Finance (Actuals and forecasts)
- People

Often the most important real-estate on a dashboard (top left-hand corner) is reserved for a company logo or a navigation tool. This is not good dashboard practice as the part of the screen is the most important part of your dashboard (this is because most western languages read from top to bottom and from left to right - hence our eye will start it’s journey when discovering something new at the top left-hand corner.

##Rule 4 - Make the data relevant to the audience##
An Executive dashboard can have a number of different audiences. Ensure that the data you display is relevant to the users. Think about the scope and reach of your data:

+ The whole company
+ By Department
+ Individuals
+ Suppliers

Ensure that you understand exactly who the intended audience is and the scope of their requirements. In a small organization, the Executive dashboard is likely to include KPI data across all departments. However, in a larger company, each department may have their own Executive dashboard.
<div class="p_embed p_image_embed"><img class="wp-float-center" src="/uploads/1-dashboard-conversation3.jpeg.scaled1000-300x141-2.jpg" alt="Dashboard-conversation3" width="500" height="236"></div>
Gaining agreement on dashboard components from non-related parties is doomed to fail.

##Rule 5 - Don’t clutter your dashboard - Present the most important metrics only
Dashboards are often cluttered. Cluttered displays deflect the focus from the important messages. Some are cluttered with useful and relevant information and some are cluttered with useless and irrelevant information. Neither of these situations are desirable.

Each dashboard type may require different amounts of data (for example an Executive dashboard may only need 6 numbers, whereas an Operational dashboard may need upwards of 20) There is no hard and fast rule to follow here, except ensuring that everything you display is relevant and meaningful to the audience. Do not add a graph or text simply because you can.

![marketing-dashboard-lg-1114](/uploads/marketing-dashboard-lg-1114.png) 

_One of the dashboards we monitor internally at Geckoboard - showing only information that the user deems important._

##Rule 6 - How often does the data really need to be refreshed?
Ensuring that your dashboard data is being refreshed at the right intervals saves time during development (why go through the pain of sourcing real-time data, when all you need is a weekly feed) and can ensure optimal performance once the dashboard is live.

Examples of refresh rates on dashboards include:
+ Real-time (or near real-time)
+ Daily, weekly, monthly

As a rule of thumb, operational dashboards require data in real-time or near real-time, whereas executive/strategic dashboards require data refreshed on a less frequent basis.

<h2>Summary</h2>
By following the simple steps explained above, your dashboard will be well designed and only contain relevant data that will generate the insights that you need.

In the <a href="https://www.geckoboard.com/blog/designing-and-building-dashboards-data-visualisations/">next blog post in the series</a>, I'll be going into detail on types of data visualizations together with which ones to use and when. I’ll also be looking at the elements of successful (and less than successful) data visualizations.

<p><b>Ready to start visualizing your key metrics on a live TV dashboard?</b></p>

<form action="/try-geckoboard/" method="get" class="inline__signup-form">
<input type="email" name="email" placeholder="Enter your email address" />
<button class="btn">Start Free Trial</button>
</form>

####Related Posts:
- [Designing and Building Dashboards: The Ultimate Guide to Data Visualizations, Part 1](https://www.geckoboard.com/blog/designing-and-building-dashboards-the-ultimate-guide-to-data-visualizations-part-1)
- [Designing and Building Dashboards: The Ultimate Guide to Data Visualizations, Part 2](https://www.geckoboard.com/blog/designing-and-building-dashboards-the-ultimate-guide-to-data-visualizations-part-2)
- [Dashboard Design: What Makes an Effective KPI Dashboard?](https://www.geckoboard.com/blog/dashboard-design-what-makes-an-effective-kpi-dashboard/)
- [5 Terrible Dashboard Designs and How to Fix Them](https://www.geckoboard.com/blog/5-terrible-dashboard-designs-and-how-to-fix-them/)
