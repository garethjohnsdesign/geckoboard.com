---
title: 3 Google Sheets Functions That Will Make Your Life Easier
date: 2016-07-05 15:39:00 Z
type: 
description: 
templateversion: 
newslettersignup: 'yes'
newslettersignupheader: Can we send you a short bi-weekly email with lessons learned
  from other founders scaling their business?
newslettersignupbutton: Yes, send me their stories
assets:
- path: "/uploads/google-sheets-post-header.jpg"
  name: Google Sheets Post Header
- path: "/uploads/Google-sheet-IFERROR-function.png"
  name: Google Sheets IFERROR Function
- path: "/uploads/Google-Sheets-DATEDIF-Function.png"
  name: Google Sheets DATEDIF Function
Topics:
- Metrics and KPIs
---

If you work with numbers or any kind of data sets, you know how much time, energy, and frustration spreadsheet functions can save you. Bye bye manual, tedious calculations! Using the right function for a calculation is a game changer. That’s why we previously covered several different Google Sheets functions you probably don’t know but should (see [part one](https://www.geckoboard.com/blog/part-1-6-google-sheets-functions-you-probably-dont-know-but-should/) and [part two](https://www.geckoboard.com/blog/part-2-6-google-sheets-functions-you-probably-dont-know-but-should/)). 

Continuing in our efforts to help you become a Google Sheets wiz, we’re sharing three more functions you can start using today. We’ll discuss and show examples of the functions for error handling, IF statements, and working with dates.

And we promise, these functions will make your life easier when it comes to dealing with lots of data in a spreadsheet.

##1. Google Sheets IFERROR function

If you’ve been using spreadsheets for any serious amount of time, you’re bound to have encountered cell errors. These errors occur when you try to do a calculation that the spreadsheet can’t handle and they can be a real pain.

Sometimes it’s just an issue of style. Rather than displaying an ugly error in your data, you’d rather show a blank or a zero. The bigger problem though is when errors prevent subsequent calculations from working.

Some errors like #DIV/0!, which happen if you try and divide a number by zero, aren’t easily avoidable. Others like #VALUE!, which occur when you try and perform a mathematical operation like multiplication or division using a cell that contains text, can often be circumvented by cleaning up your data first. However, that’s not always possible. 

The solution is to use Google’s [IFERROR() function](https://support.google.com/docs/answer/3093304?hl=en). It checks a value for errors, and if it encounters one it replaces the value with whatever you specify. If it doesn’t detect an error it just returns the original value.

Here’s an example: 

|         | 3/1/2016 | 4/1/2016 | MoM Change |
|---------|----------|----------|------------|
| Apples  | 3838     | 1402     | -63.47%    |
| Oranges | 9589     | 3916     | -59.16%    |
| Pears   | 4660     | 5980     | 28.33%     |
| Kiwis   | 0        | 1230     | #DIV/0!    |

The ‘MoM Change’ column for Kiwis contains the calculation: (C5/B5) - 1. This returns #DIV/0 because no Kiwis were sold in March. We can replace #DIV/0 with ‘N/A’ by updating the formula to =IFERROR((C5/B5 - 1),"N/A"). IFERROR checks the value for (C5/B5) -1, sees that the result is an error because you’re trying to divide by zero, and so returns “N/A”.

![Google Sheets IFERROR Function](/uploads/Google-sheet-IFERROR-function.png)

##2. Google Sheets IF statements

[IFERROR](https://support.google.com/docs/answer/3093364?hl=en&ref_topic=3105413) is just the tip of the iceberg when it comes to what’s possible with Google Sheet’s Logical Functions. There’s also AND, FALSE, NOT, OR, and TRUE functions. IF is the most useful of these.

IF evaluates a logical expression and returns a different value depending on whether it’s TRUE or FALSE. 

The possibilities of this are endless, but here are some examples of what you can achieve.

####IF statement to determine pass or fail

Imagine you have a series of test results and you want to classify them as pass or fail depending on whether they score higher than 80%. All you need to do is write:

=IF(B1>0.8, “Pass”, “Fail”)

| Name  | Score | Pass / Fail |
|-------|-------|-------------|
| Tom   | 90%   | Pass        |
| Ben   | 59%   | Fail        |
| Sally | 79%   | Fail        |
| Freya | 91%   | Pass        |
| Jake  | 75%   | Fail        |
| Katy  | 81%   | Pass        |

Here’s a list of the various conditions you can test:

|        |                                 |
|--------|---------------------------------|
| A > B  | A is greater than B             |
| A < B  | A is less than B                |
| A >= B | A is greater than or equal to B |
| A <= B | A is less than or equal to B    |
| A = B  | A equals B                      |
| A <> B | A does not equal B              |

####IF statement to calculate Net Promoter Score (NPS)[Net Promoter Score (NPS)](https://www.geckoboard.com/learn/kpi-examples/marketing-kpis/net-promoter-score-nps/)

In a slightly more complex example, imagine we want to use Google Sheets to calculate a [Net Promoter Score (NPS)](https://www.geckoboard.com/learn/kpi-examples/marketing-kpis/net-promoter-score-nps/). 

NPS is a method to measure customer loyalty and product/service virality. Customers are asked to score from 0 to 10 how likely they would be to recommend your company/product/service to a friend or colleague. The score is then worked out by subtracting the number of detractors from promoters and dividing that by the total number of respondents. Detractors are classified as anyone who gives you a rating of 6 or less and promoters as anyone with a score of 9 or 10.   

To do this in your spreadsheet, you need to convert the scores to the right categories like we did with our pass or fail example. However, because there are three categories (Detractor, Promoter and Passive) instead of just two, it’s not possible with a single IF statement. 

We need to nest a second IF statement inside the first to get the result we want. The first statement checks if the number is 6 or less. If it’s true it returns “Detractor”, if it’s false then it performs the second check and based on whether that’s true or false returns “Promoter” or “Passive”. 

=if(B2<=6,"Detractor",if(B2>=9,"Promoter","Passive"))

If you need to split further you can keep nesting IF statements within each other.

####IF statement to group countries into regions

Imagine you want to label certain countries as being part of a region. 

Here’s an example using an OR statement within the IF to assign values that are “USA” or “Canada” as “Domestic”. Anything that doesn’t match is assigned “Rest of World”. 

=if(OR(A2="USA",A2="Canada"),"Domestic", "Rest of World")

##3. Google Sheets DATEDIF Function

Calculating the number of days between two dates can be a pain. Maybe you need to know the number of days between now and a launch, or a daily rate of change. 

Google’s [DATEDIF()](https://support.google.com/docs/answer/6055612?hl=en) function makes life much simpler. Provide it with a Start Date, End Date and Unit (e.g Y for year, M for month, D for day) and it will tell you the quantity (of years, months, or days) between them.  

Combining with the [NOW() function](https://support.google.com/docs/answer/3092981?hl=en) which returns the current date and time, it’s easy to show the number of days between now and a specified date in the future: 
=datedif(now(),B2,"d")

These two functions are particularly helpful for [creating a countdown visualization](https://support.geckoboard.com/hc/en-us/articles/206883827-Creating-a-Countdown-Timer-using-Google-Sheets).

Similar to NOW() there’s also TODAY() which returns just the date rather than date and time. 
Some other useful date functions include: 
1. WEEKNUM() returns what week of the year it is when provided with a date
2. WEEKDAY() returns what day of the week it is as a number

![Google Sheets DATEDIF Function](/uploads/Google-Sheets-DATEDIF-Function.png)

Now your data can function at new heights (pun intended) with your newfound Google Sheets expertise. Life just got a little easier.

####Want to visualize your spreadsheet data? 
Check out our [Google Sheets dashboard integration](https://www.geckoboard.com/integrations/google-sheets/) or view this [live spreadsheet dashboard example](https://www.geckoboard.com/learn/dashboard-examples/excel-dashboard-example).

<a href="https://www.geckoboard.com/learn/dashboard-examples/excel-dashboard-example" class="blog__btn" style="color:#fff;">View a Spreadsheet Dashboard Example</a>

**Learn more about Google Sheets Functions:**
- [6 Google Sheets Functions You Probably Don’t Know But Should, Part 1](https://www.geckoboard.com/blog/part-1-6-google-sheets-functions-you-probably-dont-know-but-should/)
- [6 Google Sheets Functions You Probably Don’t Know But Should, Part 2](https://www.geckoboard.com/blog/part-2-6-google-sheets-functions-you-probably-dont-know-but-should/)
- [Aggregating Facebook Likes in Google Sheets](https://support.geckoboard.com/hc/en-us/articles/204159578)
- [Importing Salesforce data into Google Sheets](https://support.geckoboard.com/hc/en-us/articles/207221527)
- [Importing data into Google Sheets using IMPORTXML](https://support.geckoboard.com/hc/en-us/articles/207238327)
- [Importing data into Google Sheets using IMPORTHTML](https://support.geckoboard.com/hc/en-us/articles/206260188)
- [Importing stock prices into Google Sheets using GOOGLEFINANCE](https://support.geckoboard.com/hc/en-us/articles/207337458)
- [Creating a countdown timer using Google Sheets](https://support.geckoboard.com/hc/en-us/articles/206883827)
