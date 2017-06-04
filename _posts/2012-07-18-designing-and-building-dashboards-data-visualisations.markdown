---
title: Designing and Building Great Dashboards - Data Visualizations
date: 2012-07-18 07:56:00 Z
type: BlogPost
description: The best way to approach dashboard design is to keep it simple. Learn
  how with these effective data visualizations.
newslettersignup: 'yes'
newslettersignupheader: Can we send you a short weekly email with lessons learned
  from other founders scaling their business?
newslettersignupbutton: Yes, send me their stories
assets:
- path: "/uploads/hero6-17.jpg"
  type: BlogAsset
- path: "/uploads/number-and-secondary-stat.png"
  type: Number and secondary stat
- path: "/uploads/bar-chart-vertical.png"
  type: Bar chart vertical
- path: "/uploads/bullet-graph-2.png"
  type: Bullet graph
- path: "/uploads/bar-chart-horizontal.png"
  type: bar chart horizontal
- path: "/uploads/3-screen-shot-2012-07-18-at-10.10.12-300x87-2.png"
  type: BlogAsset
- path: "/uploads/sparkline.png"
  type: Sparkline
- path: "/uploads/6-screen-shot-2012-07-18-at-10.01.50-2.png"
  type: BlogAsset
- path: "/uploads/bar-chart-vertical-2.png"
  name: bar-chart-vertical
- path: "/uploads/line-chart.png"
  name: line-chart
- path: "/uploads/bullet-graph.png"
  name: bullet-graph
- path: "/uploads/pie-chart.png"
  name: pie-chart
- path: "/uploads/CEO-dashboard-example-3.png"
  name: CEO-dashboard-example-3
Topics:
- Metrics and KPIs
---

_This is the second post in the series 'Designing and Building Great Dashboards'. The first post – [6 Golden Rules of Dashboard Design](https://www.geckoboard.com/blog/building-great-dashboards-6-golden-rules-to-successful-dashboard-design) – introduced some high level [dashboard design rules](https://www.geckoboard.com/learn/what-is-a-data-dashboard/). In this post, we explain the importance of relevant data visualizations and why keeping it simple is the best way of approaching the design and development of your dashboard._

<h3>Dashboard designers are like kids in Candy Stores</h3>
There are many ways of presenting data. From the very basic tabular format to the highly elaborate radar graph format, it seems we are continually searching for new ways of visualizing data. And, like the proverbial 'kid in a candy store', the dashboard designer often appears to have got so excited with the many ways of presenting their data, that they have lost sight of the objective of the dashboard they are designing.
<p>Microsoft Excel has over 70 different data visualizations - do we really need stacked 3-D cones?</p>
<p>With so much choice on the market, it is no wonder that most dashboards you see have been totally over-designed and are horrible to look at.</p>
>Dashboards are not an appropriate venue for artistic impression - [Stephen Few](http://www.perceptualedge.com/)

<p>The importance of Stephen Few's quote should never be underestimated.  A Dashboard's primary purpose is to provide relevant and timely information to its audience and should never be used by the developer or designer as a method of displaying technical or artistic capability.</p>
<p>At the very heart of good dashboard design there are a finite number of appropriate data visualizations. This blog post discusses those visualizations and describes appropriate situations for their use.</p>
<h3>Keep it Simple</h3>
If you take one thing away from this article, it should be this one: **Keep it simple!** 

A well-designed dashboard should focus on the message that the dashboard is trying to convey. Any component or visualization that is not directly contributing to the message should be removed.
<p>This includes:</p>
<ul>
<ul>
<li>
<strong>Logos</strong> - In some instances logo's are required, but does the Operations Manager really need to be reminded of the company he is working for?</li>
</ul>
</ul>
<ul>
<ul>
<li>
<strong>Navigation</strong> - If you need to include navigation options on your dashboard, have you really designed the dashboard correctly?</li>
</ul>
</ul>
<ul>
<ul>
<li>
<strong>Non-essential text</strong> - Keep labelling and instructions to an absolute minimum</li>
</ul>
</ul>
<ul>
<ul>
<li>
<strong>Too much color</strong> - Use subtle shades of the same color when presenting multiple data series. Don't force the user to wear sun-glasses to read your dashboard!</li>
</ul>
</ul>
<ul>
<ul>
<li>
<strong>3-Dimensional objects</strong> - We've never seen a dashboard where 3-D enhances the message. Avoid at all cost.</li>
</ul>
</ul>
<ul>
<ul>
<li>
<strong>Horizontal or vertical guide lines</strong> - In some instances guide lines are useful, but overusing them detracts from the data</li>
</ul>
</ul>
<ul>
<ul>
<li>
<strong>Too much detail</strong>  - Displaying revenue in the format $1,254,345.67 to the CEO - surely he simply wants to see $1.25m?</li>
</ul>
</ul>
<h3>A brief overview of useful data visualizations</h3>
<h2>Number + Secondary Stat</h2>
<img class="wp-float-left" title="Number&amp;Secondary Stat" src="/uploads/number-and-secondary-stat.png" alt="" width="235" height="205">

This is perhaps the simplest way of displaying a single metric. No fancy graphic, just the metric. Exceedingly simple and very impactful. By displaying a secondary number you provide some context, so the user knows if the number is good or bad.
<p>In this example we can see that we have 520 people in trial and that this is up 0.58% on the previous period.</p>
<p><strong>When to Use: </strong><em>When displaying a single measure.</em></p>
<p><strong>When not to Use: </strong><em>To display multiple related measures. </em></p>
<p><strong>Top Tip:</strong> <em>Always show a comparative value. This provides the user with context (is the number good or bad). In this example the comparative value is expressed as a percentage of a previous period's measure, however it could be an absolute number and it could also be compared to a target or forecast.</em></p>
<h2>Bar Charts</h2>
<img class="wp-float-left" title="Horizontal Bar" src="/uploads/bar-chart-horizontal.png" alt="" width="300" height="128">

The bar chart is one of the best ways of visualizing single (or multiple) series of data. And yet, because it's such a simple solution, many people either overlook it in favour of something more elaborate or implement it in such a way as to reduce its impact (for example making it 3-dimensional). In the example above, the bar chart is displaying 'top products this week' using a horizontal layout. It's instantly clear that Sproket A is the best seller and that Sproket E sold fewest. Nothing detracts from the important message.

<p><strong>When to Use: </strong><em>When displaying data over a number of related series (Time, Region, Product)</em></p>
<p><strong>When not to Use: </strong><em>When you have more than 1 series of data that have no relationship to each other.</em></p>
<p><strong>Top Tip:</strong> <em>Keep the colour for each series the same. Use subtle shades of the same colour to represent different data series. Do NOT be tempted to use 3-D!</em></p>
<h2>Line Charts</h2>
![line-chart](/uploads/line-chart.png) 

Line charts are excellent at showing the relationship of a set of data when measured against a series of values. The line 'ties' the current value with the previous and so in a scenario where you want to show how a value has changed over time, the line chart is the only serious option. Line charts can show a number of data-sets across the same series. For example a line chart is ideal for showing stock price over time where you can also show multiple stock prices and see how they compare to each other over time.
<p><strong>When to Use: </strong><em>When displaying data over a number of related series where it's important to show the relationship between data in the same series (most typically this is 'time')</em></p>
<p><strong>When not to Use: </strong><em>In a situation where you want to draw attention to the individual values for each period' a line graph can often hide this.</em></p>
<p><strong>Top Tip:</strong> <em>Keep the colour for each series the same. Use subtle shades of the same colour to represent different data series. Do NOT be tempted to use 3-D!</em></p>
<h2>Sparklines</h2>
<img class="wp-float-left" title="Sparkline" src="/uploads/sparkline.png" alt="" width="235" height="204">

Sparklines are an incredibly simple yet powerful way of visualizing data trends in as small a space as possible.
<p>The example above shows the trend of unique website visitors over the last 30-days. You can immediately see that the trend is upward - especially over the last week or so. You can also see a pattern in weekly visits, with a drop off in uniques over the weekends.</p>
<p>Sparklines should not include unnecessary detail - for example X and Y axis labels and keys. They should simply be used to display trends in related data.</p>
<p><strong>When to Use: </strong><em>To display the trend of a single set of data</em></p>
<p><strong>When not to Use: </strong><em>When more detail is needed. When the requirement is to show trends for multiple series of data. </em></p>
<p><strong>Top Tip:</strong> <em>Great for showing trends over website visitors, pageviews, average time on site, revenue, costs, sales etc.</em></p>

For more on the inventor of sparklines – Edward Tufte - [visit his Wikipedia entry](http://en.wikipedia.org/wiki/Edward_Tufte).

<h2>Bullet graphs</h2>
![5-screen-shot-2012-07-18-at-09.37.161-300x65-2](/uploads/bullet-graph-2.png)

The bullet graph is a fantastic visualization for showing multiple relationships between a set of data in as small a space as possible.
<p>The bullet graph above shows Year To Date Revenue in $000's. Point A shows current YTD rev ($120k), Point B shows Target (£225k) and Point C shows Forecasted ($230k). The different coloured sections in the graph (Red/Orange/Green) represent 'Poor, Average and Good' revenue figures.</p>
<p>As you can see, the bullet graph really does show a lot of data in a small space and is perfectly suited to displaying many different data types including:</p>
<ul>
<ul>
<li>Financial (revenues, cost and profit)</li>
</ul>
</ul>
<ul>
<ul>
<li>Headcount (actual, target, forecast)</li>
</ul>
</ul>
<ul>
<ul>
<li>Customer engagement metrics (actual, target, forecast)</li>
</ul>
</ul>
<p><strong>When to Use: </strong><em>When you need to display multiple data points in as small a space as possible</em></p>
<p><strong>When not to Use: </strong><em>Not appropriate for series of data</em></p>
<p><strong>Top Tip:</strong> <em>The bullet graph is a perfect visualization for any data which has an actual value, a target value and a forecasted value.</em></p>
<p>For more information on bullet graphs - Check out Stephen Few's <a href="http://www.perceptualedge.com/search.php?query=bullet+graph">Blog</a></p>

<h2>Pie Charts</h2>
![pie-chart](/uploads/pie-chart.png) 

The traditional Pie chart is often the most abused and misused data visualization technique. The two most common scenarios are:

1) Making the chart 3-Dimensional

2) The sum of the slices does not equal 100%.</p>
<p>However, even when a pie chart is used as intended (such as the example here) it is often still not the most relevant visualization. In this example, we can only really guess which of June and August is the greater value.
<p>In this scenario a simple bar chart would have been more appropriate.</p>
<p><strong>When to Use: </strong><em>If you must use a pie chart, then it's most appropriate to use when the sum of the parts equal 100%</em></p>
**When not to Use:** [*Here's why you shouldn't really use pie charts most of the time.*](https://www.geckoboard.com/blog/pie-charts/)
<p><strong>Top Tip:</strong> <em>In most circumstances a bar chart is more relevant. However, if you must use a pie-chart, keep the number of items to less than five and do not over-use color. And, please, no 3-D!</em></p>

<h3>In Summary</h3>
This is by no means a definitive guide to data visualizations. Many visualizations are not included in the article (scatter charts, bubble graphs, stacked line and bar charts, combination charts, meters and gauges to name but a few). However, almost every dashboard requirement can be satisfied by using the visualizations presented above.
<p>Dashboard design is not about using as many different visualizations as possible, it's about conveying the right message to the right people at the right time and anything that interferes with this objective should play no part in your dashboard.</p>
<p>In the next article in this series, we'll give you <a href="https://www.geckoboard.com/blog/designing-and-building-great-dashboards-an-example/">a dashboard example</a>, by creating a hypothetical dashboard based on the points we've covered in this post and the previous post on <a href="https://www.geckoboard.com/blog/building-great-dashboards-6-golden-rules-to-successful-dashboard-design/">building dashboards</a>.</p>

**Want to start visualizing your key metrics all in one place?** [Try Geckoboard](https://www.geckoboard.com/try-geckoboard/) today for free (no credit card required).

<form action="/try-geckoboard/" method="get" class="inline__signup-form">
<input type="email" name="email" placeholder="Enter your email address" />
<button class="btn">Get Started</button>
</form>

![ceo-dashboard-example](/uploads/CEO-dashboard-example-3.png)
**Related Posts:**

- [5 Terrible Dashboard Designs and How to Fix Them](https://www.geckoboard.com/blog/5-terrible-dashboard-designs-and-how-to-fix-them)
- [How to Visualize Your Sales Metrics: 6 Sales Dashboard Examples](https://www.geckoboard.com/blog/how-to-visualize-your-sales-metrics-6-example-sales-dashboards)
- [4 Essential Steps to Designing a Dashboard That Inspires Action](https://www.geckoboard.com/blog/4-essential-steps-to-designing-a-dashboard-that-inspires-action)
- [Dashboard Design: What Makes an Effective KPI Dashboard?](https://www.geckoboard.com/blog/dashboard-design-what-makes-an-effective-kpi-dashboard)
