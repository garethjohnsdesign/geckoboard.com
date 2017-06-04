---
title: 5 Terrible Dashboard Designs and How to Fix Them
date: 2016-03-17 10:00:00 Z
type: 
description: Discover what makes or breaks a data dashboard and how you can design
  an effective dashboard.
templateversion: 
newslettersignup: 'yes'
newslettersignupheader: Can we send you a short bi-weekly email with lessons learned
  from other founders scaling their business?
newslettersignupbutton: Yes, send me their stories
assets:
- path: "/uploads/how-to-fix-dashboard-design.png"
  name: how-to-fix-dashboard-design
- path: "/uploads/marketing-example-dashboard-ideal.png"
  name: marketing-example-dashboard-ideal
- path: "/uploads/1-terrible-dashboard-example.png"
  name: 1-terrible-dashboard-example
- path: "/uploads/2-terrible-dashboard-example-min.png"
  name: 2-terrible-dashboard-example-min
- path: "/uploads/3-terrible-dashboard-example.png"
  name: 3-terrible-dashboard-example
- path: "/uploads/4-terrible-dashboard-example.png"
  name: 4-terrible-dashboard-example
- path: "/uploads/5-terrible-dashboard-example.png"
  name: 5-terrible-dashboard-example
- path: "/uploads/CEO-dashboard-example-4.png"
  name: CEO-dashboard-example-4
Topics:
- Metrics and KPIs
---

Sometimes failures make for better learning. This can definitely be applied to dashboard design where knowing what *not to do* can help prevent us from making common mistakes. Let’s look at five terrible dashboard designs and learn how to avoid replicating them.
##The Ideal Dashboard
Terrible dashboard design is obviously subjective, so it’s worth defining what we consider to be the ideal dashboard from a design perspective. An effective <a href="https://www.geckoboard.com/learn/what-is-a-key-performance-indicator-kpi/" target="_blank">key performance indicator (KPI)</a> dashboard is characterized by glanceability and simplicity, much like a car dashboard. 

When you drive a car, you need a few key indicators (speed, gasoline level, lights, etc.) to be clearly understood within seconds and simple enough that you don’t have to dig out the manual to know what action to take. Failure to design the dashboard with these two characteristics could cause an accident from the driver staring at the dashboard instead of the road.

![ideal-tv-dashboard-example-geckoboard](/uploads/marketing-example-dashboard-ideal.png)
*The ideal TV dashboard clearly displays the most important metrics so you can understand it at a glance and take action.*

**Glanceability** <br>
Anyone walking around the office should be able to see and understand the metrics on a <a href="https://www.geckoboard.com/learn/guides/displaying-your-dashboard-on-a-screen/" target="_blank">TV dashboard</a> at a glance. This means having a large enough font, recognizable visualization, and clear structure.

**Simplicity** <br>
As <a href="http://www.perceptualedge.com/about.php" target="_blank">Stephen Few</a> said, “Dashboards are not an appropriate venue for artistic impression.” Anything that detracts from the metrics themselves should be stripped away from the dashboard. This means using minimal color (both amount of color and number of colors), a plain background, no 3D elements, and no raw data.


##Dashboard Fail Example 1: *All the colors of the rainbow* 

![dashboard-fail-example-1](/uploads/1-terrible-dashboard-example.png)
*Source: <a href="http://www.matillion.com/insight/why-great-dashboard-software-doesnt-always-equal-great-dashboards/" target="_blank">Matillion</a>*

What’s wrong?
- **Not glanceable** - If you were to display this dashboard on a TV, the stacked bar charts may be difficult to understand at a glance. You would need to get up close to dissect the segments and spend time understanding everything. This dashboard relies heavily on legends (for both pie charts and bar/column charts) which adds an additional cognitive barrier.
- **Overuse of color** - The amount of color in this dashboard is distracting and makes it complicated to understand (i.e. the colors represent different items in each widget - with the exception of the top-left widget and bottom-left widget). This creates a huge cognitive barrier for the brain when trying to process the data quickly.
- **Pie charts** - Rarely are <a href="https://www.geckoboard.com/blog/pie-charts/" target="_blank">pie charts</a> a good visualization for data. In this case especially, the large data set (“Contributing Cause” widget) makes the pie chart exceptionally awful since it’s impossible to determine the percentage of each item. Also, since the legend is separate from the visualization, the user has to look back and forth to read the widget. Basically, the only negative design feature not included in this pie chart is 3D.

How to fix it:
- **Change the visualizations** to more clearly articulate the most important metric. Each visualization should help answer the question ‘What action needs to be taken?’ Make sure the visualization is large enough to be seen at a glance (this includes text widgets and labels). Adding goals and targets to the visualizations, would also make it more actionable as there is no context for KPIs currently.
- **Reduce the number and amount of color** to only the absolutely necessary. A helpful approach is to reduce the colors to green for ‘good’, blue or yellow for ‘average / in progress’, and red for ‘bad’. But remember that good/average/bad indicators don’t replace goals and benchmarks.
- **Replace the pie charts** with an alternative visualization. Generally, bar or column charts work well. Ideally, you’d use a single color for all series to remove the cognitive barrier of color for viewers too.

##Dashboard Fail Example 2: *3D hurts my eyes and brain!* 

![dashboard-fail-example-2](/uploads/2-terrible-dashboard-example-min.png)
*Source: <a href="http://www.dashboardinsight.com/dashboards/tactical/perpetuum-money-maker.aspx" target="_blank">Dashboard Insight</a>*

What’s wrong?
- **3D visualizations** - This added texture throughout the dashboard detracts from the key metrics and make the overall appearance very busy and difficult to process in a glance. Ultimately, 3D visualizations can distort the reality of numbers and lead to slow processing of data or misinterpretation.
- **Distracting borders and background** - The unnecessary color and patterns used in the background and borders obscure the actual data. <a href="http://www.infovis-wiki.net/index.php/Data-Ink_Ratio" target="_blank">Edward Tufte</a> said it best regarding data to ink ratios, “Above all else show the data.” 
- **Lack of filtered data** - This dashboard has too much raw data and too much detail, particularly the embedded spreadsheet section. You would have to spend time staring at the raw data to understand what’s going on.
- **Insufficient labels and context** - What's the visualization on the bottom left? What do the red tabs mean next to the gauges? What are the 3s at the top? What do the maps show? Also, the detail is poor. The gauges don't show numbers. They're all dumbed down to not actually show you the number which would be simpler and more precise.

How to fix it:
- **Simplify the background** by removing all 3D effects and excessive color variations. Why are there lines in the background? It just distracts from what really matters: the data.
- **Remove raw data** and replace with only filtered, key metrics. An effective TV dashboard should never display an embedded spreadsheet. Pick the most important metrics from the spreadsheet and display them using a graph, bar, or column visualization. Perhaps even a single number widget with a goal or sparkline would be sufficient. Eliminate any unnecessary icons (e.g. 3s at the top).
- **Make visualizations clear and precise.** Use numbers for the gauge including a goal. The background of the line graph widget ‘EUR USD’ can be simplified to draw attention to the line itself (once again focusing on the metrics, not the visualization itself).
- **Properly label widgets** to provide the necessary context for each metric, ensuring the viewer quickly knows what they’re looking at.


##Dashboard Fail Example 3: *Anyone got some glasses I can borrow?*

![dashboard-fail-example-3](/uploads/3-terrible-dashboard-example.png)
*Source: Exen*

What’s wrong?
- **Confusing colors** - The plain background is quite helpful as it makes the visualizations stand out, however the subtle variation in shade (e.g. right two widgets) actually makes it more difficult to segment the legend. The middle two widgets display at least five new colors - lacking consistency and simplicity.
- **Pie charts** - Once again, <a href="https://www.geckoboard.com/blog/pie-charts/" target="_blank">pie charts</a> are a poor choice for data visualization. In this instance, the percentage is shown directly on the pie chart - which helps, but the user still has to look back and forth across the visualization to read the legend.
- **Font too small** - The labels would be quite difficult to read from a distance.

How to fix it:
- **Use color intentionally.** Avoid subtle variations in shade since they’re more difficult to distinguish from a distance (e.g. widgets on the right). Eliminate unnecessary color (e.g. blue lozenges in the bottom middle widget). While using red, yellow, and green in the ‘Key Fee Earner Measures’ section is a good start, using up/down icons or goals/benchmarks would be even better (especially for color blind individuals). 
- **Replace the pie charts** with an alternative visualization (bar or column charts work well).
- **Increase font size** so the labels are clearly visible when displayed on a TV dashboard.


##Dashboard Fail Example 4: *What should I focus on here?* 

![dashboard-fail-example-4](/uploads/4-terrible-dashboard-example.png)
*Source: <a href="https://blog.pivotal.io/pivotal-cloud-foundry/features/the-stoplights-metrics-dashboard-for-cloud-foundry-go-or-no-go" target="_blank">Pivotal</a>*

What’s wrong?
- **Too much data, too close together** - this dashboard doesn’t have enough room to breathe, giving users data overload. It’s also poorly structured, making it difficult to navigate.
- **Variation in font sizes** - there doesn’t appear to be any hierarchy to the extreme range in font sizes. How are you supposed to know what a number is/means if you can’t read the label?
- **Metrics hard to interpret** - the widget size for each metric varies arbitrarily, making it more difficult to process. Are some numbers more important than others? Better/worse than others? Why?

How to fix it?
- **Create '<a href="https://en.wikipedia.org/wiki/White_space_(visual_arts)" target="_blank">white space</a>'** (or blank space) between widgets. This makes the data easier to read and digest. Eliminate some of the data so only the most important metrics are shown. Remember, when all metrics are present, none are important.
- **Make font size consistent and large enough** so the labels are clearly visible when displayed on a TV dashboard.
- **Intentionally size widgets** so 1) each widget is legible from a distance — some widgets with more data may need to be larger — and 2) the most important metric is largest. Every element of design matters - including size.
- **Reduce amount of color** to increase contrast, making the data actionable. While using red, yellow, and green is a good start, using up/down icons would make it easier to digest (less color) and better for color blindness. Honestly, green might not even be necessary. It might be easier to spot issues if only problems were highlighted so the user would know exactly when and what action to take. By having so many blocks of color the entire dashboard is noisier than it needs to be. 


##Dashboard Fail Example 5: *Is this a St. Patrick’s Day dashboard?*

![dashboard-fail-example-5](/uploads/5-terrible-dashboard-example.png)
*Source: <a href="http://www.virtualiseme.net.au/index.php/vrops-cluster-dashboard-step-by-step-how-too/" target="_blank">Virtualise Me</a>*

What’s wrong?
- **Too much color** (but not too many colors) - the entire widget doesn’t need to be colored since that actually detracts from the metric itself.
- **Too much data, too close together** - once again this dashboard doesn’t have enough room to breathe. It’s too compact, making it difficult to understand.
- **Lack of clear visualizations** - from a glance, this dashboard appears to only have blocks of color. 
- **Font too small** - the labels aren’t legible and even the metrics are quite small.

How to fix it:
- **Reduce amount of color.** While using red, yellow, and green is a good start, using up/down icons or goals/benchmarks would make it easier to digest (less color) and better for color blindness.
- **Create '<a href="https://en.wikipedia.org/wiki/White_space_(visual_arts)" target="_blank">white space</a>'** (or blank space) between widgets. This makes the data easier to read and digest. Display only the most important metrics.
- **Choose the best visualizations** to convey the metrics in context. The point is to help the user understand what action needs to be taken. Has the target been reached? Is this in critical condition? How does this metric compare to last month? This is just a wall of numbers. Mixing it up with some visualizations such as bar graphs, column graphs and line charts will make it a lot less intimidating than a wall of numbers. One way to add more context is to show secondary statistics or goals that indicate what’s normal and/or if there is a problem.
- **Make font size consistent and large enough** so the labels and metrics are clearly visible when displayed on a TV dashboard.


##Summing it up
Creating an effective dashboard is a process. And you rarely get it right on the first try. But by learning from dashboard fails along the way, you can [gradually improve your own dashboards](https://www.geckoboard.com/blog/how-to-use-iterative-design-to-keep-your-dashboard-relevant/) and [make your data actionable](https://www.geckoboard.com/blog/4-essential-steps-to-designing-a-dashboard-that-inspires-action/). One of the biggest fails in each of these dashboard examples is trying too hard, i.e. overcompensating with color, complexity, and confusing visualizations. 

Dashboard design doesn’t have to be a painful process. When you create a dashboard, your primary focus should be on [displaying the right data](https://www.geckoboard.com/learn/dashboard-examples/#.VurvzZMrLVo) and getting those metrics to the right people. Think of the user and try to remove cognitive barriers. The result will be a glanceable, simple dashboard that empowers your team to take action.

**Don’t have a TV dashboard yet?** Try Geckoboard for free and create your own glanceable dashboard.

<form action="/try-geckoboard/" method="get" class="inline__signup-form">
<input type="email" name="email" placeholder="Enter your email address">
<button class="btn">Get Started</button>
</form>

![ceo-dashboard-example](/uploads/CEO-dashboard-example-4.png)
