---
title: 'Guest post: Log, analyse and share with Geckoboard'
date: 2014-07-01 11:37:00 Z
type: 
assets:
- path: "/uploads/logentries.jpg"
- path: "/uploads/trevor_parsons.jpg"
- path: "/uploads/logentries_3.png"
- path: "/uploads/logentries_1.png"
- path: "/uploads/logentries_2.png"
Topics:
- guest post
---

**[Logentries](https://logentries.com/), a log management and analytics company that helps you centralise, search and analyse your logs, kept getting requests for a way of sharing the analytics. [Trevor Parsons](https://twitter.com/trevparsons), Co-founder of Logentries, decided to make use of our flexible custom API in order to meet his customers' needs.**
</br>
</br>
**Below, Parsons explains how you get a search function from your Logentries dashboard onto your Geckoboard in 3 easy steps using a custom widget.**
</br>
</br>
</br>
One of our most common feature requests has been for the ability to share the analytics that Logentries provides through a centralized operations dashboard. The request usually comes in the form of, “Wow I’m loving this analysis, how do I show this data alongside all my other KPIs on the big screen in our office?”
</br>
</br>
One of the leading drivers for this, in my opinion, is that people are adding more and more useful information into their machine-generated log events. No longer are logs simply used by a small number of developers to debug critical issues. Today, logs are used for a much wider set of scenarios from performance troubleshooting to business analytics. The userbase is much broder as well and ranges from devops, to support, to product and marketing, and even our own sales team.
</br>
</br>
A customer recently explained to me, “If someone wants it on a screen in here, it needs to go into the logs first.” We realize that not everyone is so log focused and more often than not you're likely to also be collecting data from other tools and data sources that you want visualize in an operations dashboard in the office.
</br>
</br>
This is where an integration with Geckoboard makes so much sense. Geckoboard integrates with over 100 third party services (they also provide a developer API in case your service is not already listed), so that you can collect and visualize all your key metrics in once place. Very cool.
</br>
</br>
So how does this all work, you ask?
</br>
</br>
Log management technologies today not only allow you to search across your log data, but also allow you to identify the key pieces of information in each log event. Then they work with that data so that you can perform statistical analysis on it, visualize it, look at trends etc. For example, if you have a field named ‘response_time’ in your logs, which relates to the time it takes for your service to return a web page to your user, you can identify that field and analyze it over time. That way you can use your logs to understand trends across your systems - i.e. using your “logs as data.” You can do the same for any numeric field contained in your logs, such as transaction value, number of times a button was clicked etc. so that you can analyze your logs for all sorts of useful things.
</br>
</br>
In fact, you're really only limited by the type of information you add into your logs. And as a result we are seeing more and more organizations adding information beyond system information that now include feature usage info, signup and conversion information, business transaction information etc.
</br>
</br>
If you want to analyze this information and then add it to your Geckoboard dashboard you can do so in three easy steps:
</br>
</br>
**1. Run a Logentries search function on your data and save it:** Logentries provides a number of search functions that allow you to easily slice and dice your data. E.g. Run thing such as ‘Average’, ‘Sum', ‘Count’, ‘GroupBy’, ‘Count Unique' to show the average response time over the last 24hrs or the sum of all sales transactions for the past week. You can then save any search functions that you use on your data so that they are easily accessible for any of your team members in the future.
</br>
</br>
![logentries_1](/uploads/logentries_1.png) 
</br>
**2. Add the function to the Logentries Dashboard:** Logentries also provides a dashboard view, which allows you to visualize all your search functions in one place. You can add a refresh period so that all your data is updated periodically, which is especially useful if you want to display this dashboard on one of those big screens in the office for example.
</br>
</br>
![logentries_2](/uploads/logentries_2.png) 
**3. Export it into Geckoboard:** If you want to show this information in the context of other data sources and KPIs you can easily add it to Geckoboard. Simply select your visualized search function and then select ‘Share to Geckoboard.' Then in your Geckoboard account, create a custom widget and add the URL provided. Your data will now also appear on your Geckoboard dashboard alongside all your other key systems and business data - for more detailed instructions check out our docs [here](https://logentries.com/doc/shareable-dashboards/).
</br>
</br>
![logentries_3](/uploads/logentries_3.png) 
</br>
(****Please note that this wasn't built by Geckoboard, and therefore we're not able to offer direct support if you wish to implement it.***)
</br>
</br>
As always we’d love to get your feedback on how useful this is for you so don’t be afraid to give it a shot and let us know (note you can sign up for both [Logentries](https://logentries.com/) and Geckoboard for free to try them out).
