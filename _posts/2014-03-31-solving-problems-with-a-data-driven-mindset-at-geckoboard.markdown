---
title: Solving problems with a data-driven mindset at Geckoboard
date: 2014-03-31 14:30:00 Z
type: BlogPost
assets:
- path: "/uploads/hero-96.jpg"
  type: BlogAsset
- path: "/uploads/2-librato-geckoboard-script-2.png"
  type: BlogAsset
- path: "/uploads/3-acme-corp-efficiencies-2.png"
  type: BlogAsset
- path: "/uploads/hero-97.jpg"
  type: BlogAsset
- path: "/uploads/0-awma1SpmyEHwkCc4GY9_tgxqkMiKua3-UDghkCZld2Iv4dAku0RUCpSkL7heXX2HEBavEH4D5S7L8uHJeUVjvTBKeWTgjTijXUxqDgYPORexq2szqNp9jpQQMUv4aQ-2.jpg"
  type: BlogAsset
- path: "/uploads/1-q-NAi1-81JMGn9OlU3YQL9eAPyZPIAg2oo6MPJk9H1LX2UWl6RZlTE9d7Gieoq4_tUiJS_guxaFECdZYRXCiS6mgSXMiimNr9JRONgyA2BDX3RdyJBVMBwaJmOCpaA-2.jpg"
  type: BlogAsset
Topics:
- engineering
---

<em>Our Senior Software Developer, <a href="https://twitter.com/ono" target="_blank">Tatsuya Ono</a>, shares his experience on implementing a data-driven development process.</em><br><br>At Geckoboard we make more than 10 million external API calls every day to show real time data on users’ dashboards. We support more than <a href="http://www.geckoboard.com/widget-directory" target="_blank">100+ service providers</a> - each with a different API. They could be using HTTPS, LDAP, REST or SOAP along with OAuth or Basic Auth and each service will have their own response format and data structures. We carefully design and develop our widgets to ensure that accurate and meaningful data is shown across all dashboards.<br><br>
<p dir="ltr"><strong>Tackling API limits</strong></p>

<p dir="ltr"><span>One of the challenges we face is that some APIs perform rate limiting (e.g. </span><a href="https://support.twitter.com/articles/160385-twitter-api-limits" target="_blank"><span>Twitter</span></a><span>). Many service providers have limitations to their API usage to prevent malicious users from making a large number of requests. Fortunately for us, most service providers understand that we’re not malicious and Geckoboard being able to access their API is valuable to their users so we often get a looser rate limit. Of course we still have a responsibility not to flood their API with requests and make sure we’re using it as efficiently as possible.</span></p>
<strong>Understanding the problem</strong>
<p dir="ltr"><span>One day, our support team received emails from a number of customers saying that some widgets were not updating properly at a specific time of the day. On further investigation we found that these widgets were making API calls to one specific service provider (let's call them Acme corp for the purpose of this post). Our suspicion was that the errors were caused by an API rate limit being reached. </span></p>
<p dir="ltr"><span>We monitor our API calls with </span><a href="https://metrics.librato.com/" target="_blank"><span>Librato</span></a><span> through </span><a href="https://github.com/etsy/statsd" target="_blank"><span>Statsd</span></a><span>. The data from Librato (see image below) showed us that our suspicion was correct.</span></p>
<p dir="ltr"><img src="/uploads/0-awma1SpmyEHwkCc4GY9_tgxqkMiKua3-UDghkCZld2Iv4dAku0RUCpSkL7heXX2HEBavEH4D5S7L8uHJeUVjvTBKeWTgjTijXUxqDgYPORexq2szqNp9jpQQMUv4aQ-2.jpg" alt="errors" width="624px;" height="239px;"><span></span></p>
<p dir="ltr"><span>Acme Corp, it turned out, is based in the San Francisco Bay Area. Like many of our partners their API rate limit is reset at the same time each day. We were reaching this limit late in their day (PST) meaning errors for our customers in Europe were ocurring between 6am and 7am UTC (PST is 8 hours behind UTC).</span></p>
<strong>Discussing a solution</strong>
<p dir="ltr"><span>The next step was for the team to discuss the problem and find a solution. Here are the actions we came up with:</span></p>
<ol>
<li dir="ltr">
<p dir="ltr"><span>Reduce the number of API calls by increasing the time between widget reloads</span></p>
</li>
<li dir="ltr">
<p dir="ltr"><span>Talk to Acme corp and ask them to increase our rate limit</span></p>
</li>
<li dir="ltr">
<p dir="ltr"><span>Improve our widget code to make fewer API calls</span></p>
</li>
</ol>
<p dir="ltr"><span>The first step was a very temporary solution until we could work on the other actions (increasing the refresh time would be detrimental to customer experience).</span></p>
<p dir="ltr"><span>Our next step was to negotiate with Acme corp over the rate limit. They kindly offered to increase the limit by 50 percent, but they also wanted us to reduce unnecessary API calls (which we intended to do as a third action anyway).</span></p>
<p dir="ltr"><span>For these widgets, the user can select the time period of the data to be displayed. If a user wants today's data we have to update the widget more frequently. If a user wants yesterday's data, we only have to update the data once in a day. Unfortunately we were making the same number of API calls whether the user was requesting data for today or yesterday. Regardless of the user’s configuration, our system updated the data in same cycle and made same number of API calls for those widgets. Our solution was to cache data for widgets whose configuration didn’t mean that the data need to be fetched all of the time. </span></p>
<strong>Getting the metrics</strong>
<p dir="ltr"><span>Prior to joining Geckoboard I would’ve started working on the code straight away. But at Geckoboard we have a slightly different culture: we’re data-driven</span><span>, and we want to be convinced that we’re taking the right approach by using data. In this case, we wanted to know how many API calls could be cached.</span></p>
<p dir="ltr"><span>I updated our library to count API calls grouped by the date range (i.e. what time period this widget covered) of the data.</span></p>
<p dir="ltr"><img src="/uploads/1-q-NAi1-81JMGn9OlU3YQL9eAPyZPIAg2oo6MPJk9H1LX2UWl6RZlTE9d7Gieoq4_tUiJS_guxaFECdZYRXCiS6mgSXMiimNr9JRONgyA2BDX3RdyJBVMBwaJmOCpaA-2.jpg" alt="cachable" width="624px;" height="236px;"><span></span></p>
<p dir="ltr"><span>From this graph we learnt that nearly 50 to 55 percent of API calls could be reduced simply by caching the result for a longer period.</span></p>
<strong>Focusing on the solution</strong>
<p dir="ltr"><span>We found that we needed to fix several different codebases. At first, we needed to tweak a library for widgets to cache API responses in an easy way. Then we had to update the code for each widget, which took a bit of time. A few different developers had to be involved to do this.</span></p>
<p dir="ltr"><span>Although the graph on Librato gives us great information, it’s not easy to judge if we actually achieved our desired goal. We wanted to share a goal within the team that was easy, clear and intuitive. We needed to focus on this goal and that's where Geckoboard helped. I created a little script which exported data from Librato, aggregated it and then pushed the data to a dashboard.</span></p>
<p dir="ltr"> </p>
<div><img src="/uploads/2-librato-geckoboard-script-2.png" alt="librato-geckoboard-script" width="536"></div>
<div></div>
<p dir="ltr"> </p>
<p dir="ltr"><span>It shows some simple numbers that immediately tell us if we achieved our goal or not. Normally we tend to forget about the purpose of what we’re working towards, and are satisfied with delivering some functionality or a hotfix. This dashboard helps to prevent us falling into this particular pitfall.</span></p>
<strong>Achieving our goal</strong>
<p dir="ltr"><span>After I set up the dashboard, our integration team started working on the fix, however things were more complicated than we thought. The data processed by Acme Corp, it turned out, would suffer from unpredictable time lags. That, coupled with the fact that their API doesn't reveal the status of their data processing, confuses matters</span></p>
<p>The cache strategy we planned was not able to work out as we expected. Nevertheless, we continued to tweak our approach whilst opening a dialogue with Acme corp around how we can help improve things from both sides, a process helped by sharing the dashboard we made showing the efficiencies we’d made.</p>
<p dir="ltr"><img src="/uploads/3-acme-corp-efficiencies-2.png" alt="acme-corp-efficiencies" width="533"></p>
<strong>Implementing a data-driven culture</strong>
<p dir="ltr"><span>In software development, the need for data, analytics and data insights are like the need for an accurate map for someone driving a car. We know that no matter how quickly you try to drive, it's impossible to reach your destination if you're driving in the wrong direction. But we (as developers) sometimes forget that and go down a blind alley - wasting time and money.</span></p>
<p dir="ltr"><span>When we started this process, I was uncomfortable spending time not coding. It took dicipline to take the time to set up the necessary tools for this process, and I found myself initially choosing the wrong metrics. I felt unease at the thought that I may have been creating an inaccurate map for myself (which might be worse than not having a map at all)... But a couple of months later I suddenly noticed that things got better. We’ve got a good set of tools/services and libraries to communicate our data with, and gradually we learnt how to choose the right metrics and communicate these to the team. Now I can get the metrics I want quickly, and I rarely find myself choosing the wrong metrics.</span></p>
<p dir="ltr"><span>So don't worry if you're just getting started with updating your processes - take it from us it’s perfectly normal. Try and apply the data-driven mindset to three or four sprints: analyse the problem you're tackling and share a clear goal. You and your team will soon enjoy the benefits of data-driven culture.</span></p>
<p dir="ltr"> </p>
<p dir="ltr">Got any questions around data-driven development? Don't hesitate to contact us at <a href="mailto:support@geckoboard.com">support@geckoboard.com</a> or leave a comment below.</p>
<span id="docs-internal-guid-a1b50793-d5c4-ab2f-c09e-ec5ed6d7524e"><br><span></span></span>
