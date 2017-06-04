---
title: 'Guest post: The value of data, Part 1 - Using data as a competitive advantage'
date: 2015-03-17 14:00:00 Z
type: 
assets:
- path: "/uploads/gp_part1.jpg"
- path: "/uploads/gp_leo.jpg"
- path: "/uploads/leo_guest_post.jpg"
Topics:
- guest post
---

**This is a guest post by [Leo Polovets](https://twitter.com/lpolovets), the article was originally published on his blog, [Coding VC](http://codingvc.com/the-value-of-data-part-1-using-data-as-a-competitive-advantage).**

**Leo is a software engineer turned venture capitalist. He was the 2nd non-founding engineer at LinkedIn, where he worked on core products like LinkedIn Groups and LinkedIn Jobs. After LinkedIn, Leo spent 3 years working on payment fraud detection at Google, followed by 4 years at Factual working on large scale-data cleaning and entity resolution. In late 2012, Leo left Factual to start [Susa Ventures](http://www.susaventures.com/), a 4-partner seed fund that's focused on companies building valuable datasets. Leo's writes about startups, data, and investing at [http://codingvc.com/](http://codingvc.com/.).**

---

<br>
Data is incredibly valuable. It helps create superior products, it forms a barrier to entry, and it can be directly monetised. This post is the first in a 3-part series about building companies that leverage the value of data.

In this post, I'm going to talk about how the increasing commoditisation of software and hardware makes data more valuable, and how data can be used to create competitive [moats](http://www.investopedia.com/terms/e/economicmoat.asp).

##Hardware and Software Commoditisation
During my decade of working as a developer I saw some major changes in the software industry:

**LinkedIn in 2003-2005:**

- *Software*: Core pieces of the software stack (web servers, DB connectors, etc.) were free and open source. Almost everything else had to be built from scratch. I remember paying a lot of money for Oracle licenses because MySQL wasn't very mature at the time.
- *Hardware*: Our servers were installed at a nearby [colo](http://en.wikipedia.org/wiki/Colocation_centre). If there was a problem with one of the machines, our IT guy, Ian, had to drive to the colo to physically diagnose the issue.

**Factual in 2009-2012:**

- *Software*: While the core software stack was still free and open source, there were now numerous libraries and frameworks available for things like web caching, HTML parsing, and machine learning algorithms.
- *Hardware*: Just like at LinkedIn, we started out with servers in a colo. However, by the time I left in 2012, a lot of our software was running in Amazon's cloud.

**Today:**

- *Software*: The amount of free, hiqh quality, off-the-shelf software has continued to grow at a staggering pace. You can download plenty of amazing code for free, and pay for SaaS tools when free solutions are insufficient. For less than the annual cost of a developer, you can incorporate technologies like cutting edge [machine learning as a service](http://www.wise.io/), [natural language processing as a service](http://www.alchemyapi.com/), and [language translation as a service](https://cloud.google.com/translate/docs) into your product.
- *Hardware*: Containerisation via tools like [Docker](https://www.docker.com/) means that your software can be deployed to almost any cloud with a few clicks, then monitored with increasingly [sophisticated, yet easy-to-use DevOps tools](https://www.scalyr.com/). It's easier than ever to be a developer and never worry about physically setting up machines. In 2009, you might have gotten funny looks if you were deploying to the cloud; today, you might get funny looks if you're not.
On the software side, developers have gone from writing low-level libraries to using pre-built libraries to using sophisticated, feature-rich APIs. On the hardware side, we've gone from buying machines and storing them a few miles from the office to deploying everything to the cloud.

**The trend is clear:** Both software and hardware infrastructure are becoming more and more commoditised. So what's left if you're trying to build a company with sustainable competitive advantages? **Data**.

##Data Moats
![leo_guest_post](/uploads/leo_guest_post.jpg) 
Large, meaningful datasets are incredibly hard to build, which is part of what makes them so valuable. A recent trend is for tech companies to open-source non-core software because it's good for the community and also good marketing. For example, Netflix has publicly released many of its [infrastructure and monitoring tools](http://netflix.github.io/#repo).

However, while companies will publish some of their code, it's very unusual for them to release their data. That's because while it's possible to replicate software with a strong engineering team, it's very hard to replicate meaningful datasets without large user bases (or very complex web crawling/scraping pipelines). 

>This is an ideal competitive moat: A company can't copy your product without the corresponding dataset, but that dataset can only be built via an existing heavily used product - a catch-22!

Of course, the scarcity of good datasets is just part of their value. The remaining value lies in the hard-to-copy applications that are enabled by large amounts of data. Here are some ways to apply data to create more defensible products:

- **Data helps you provide great content recommendations.** Examples: Google's search relevance, Netflix's movie recs, Amazon's product recs, Facebook's news feed, and OKCupid's personality matching. More data enables better recommendations, and once users become accustomed to great recommendations, they won't want to try competing services.

- **Data helps you provide more accurate ad targeting.** Examples: ads on Google, YouTube, Facebook, and Twitter. Ads are similar to recommendations, but ad targeting is often based on data from many sources instead of just one source. Better ad targeting leads to more revenue, which lets you outspend competitors in areas like product development and customer acquisition.

- **Data helps you optimize pricing and offer pricing transparency.** Examples: Amazon, eBay, almost every adtech company, and the airline industry. Companies that have a lot of historical transaction data can set prices to optimize profit (or revenue, or user happiness), and they can also make price trends more clear to their customers, thereby earning more trust (e.g. Kayak's flight price predictor).

- **Data helps you provide a definitive destination for some type of content.** Examples: Quora for Q&A, Yelp for restaurant reviews, Stack Overflow for tech questions, TripAdvisor for travel reviews, Glassdoor for salary comps, AppAnnie for mobile app stats. The more data and content these companies have, the more trusted they become (at the expense of their competitors). At this point, even if someone makes an amazing restaurant review app, it would be next to impossible to compete with Yelp because Yelp has so many rich reviews (and the new entrant has none).

- **Data helps you provide actionable insights.** Examples: Yelp highlights popular phrases from reviews (like which menu items are popular), [Framed Data](https://www.framed.io/) helps predict which customers are going to churn and what factors make them likely to churn. The more data you have to analyse, the more accurate and useful your insights will be.

- **Data helps you make operations more efficient.** Examples: Amazon's inventory management, BuzzFeed's content curation, Uber's automatic driver dispatching, and [Flexport's](https://www.flexport.com/) logistics streamlining. The more usage data you have, the better you can organise operations around predicted usage patterns.

- **Data helps you provide more accurate models and predictions.** Examples: [Sift Science](https://siftscience.com/) (fraud detection), [BlockScore](https://blockscore.com/) (ID verification), [LendUp](https://www.lendup.com/) (credit scoring), [Climate Corp](http://www.climate.com/) (crop insurance). The more data you have, the more accurate your models will be.

- **Data helps you improve categorisation/tagging/sentiment analysis.** Examples: Facebook (facial recognition), [Atlas Wearables](https://www.atlaswearables.com/) (exercise categorisation). The more data you have, the easier it is to automatically categorise things like images or book plots or website content.

- **Data helps you improve language parsing/semantic analysis.** Examples: Siri, [x.ai](https://x.ai/), [wit.ai](https://wit.ai/), [Casetext](https://casetext.com/). The more training data you have about what people meant when they said or wrote something, the better you can predict what a given piece of text means.

- **Data helps you create better AIs**. Examples: self-driving cars, Wolfram Alpha. More training data makes it possible to train smarter AIs.

In each of these cases, bigger datasets created bigger competitive advantages. At some point, competitors can no longer catch up to you - even if their products are superior - because they don't have the data that you have.

This is by no means an exhaustive list of competitive advantages, and if you have suggestions for other ways that data helps make products more defensible, please share your suggestions in the comments section below.

**Find 'Part 2: How to accumulate data + pitfalls to be aware of' [here](http://codingvc.com/the-value-of-data-part-2-building-valuable-datasets).**<br>
**Find 'Part 3: A catalog of business models where data plays a key role' [here](http://codingvc.com/the-value-of-data-part-3-data-business-models).**
<br>
<br>
<br>
**Liked this article? Find more guest posts here:**
- [Emotion vs data-driven marketing: The biggest challenges](https://www.geckoboard.com/blog/emotion-vs-data-driven-marketing-what-are-some-of-the-biggest-challenges/)
- [Data marketing 101: 5 ways for startups to put their data to work](https://www.geckoboard.com/blog/data-marketing-101-five-ways-for-startups-to-put-their-data-to-work/)
- [Running a data-driven company: Guest post by David White](https://www.geckoboard.com/blog/running-a-data-driven-company-guest-post-by-david-white-1/)
