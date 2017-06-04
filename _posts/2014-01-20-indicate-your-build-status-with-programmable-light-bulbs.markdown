---
title: 'Tech: Indicate your build status with programmable light bulbs'
date: 2014-01-20 17:24:00 Z
type: BlogPost
assets:
- path: "/uploads/hero-84.jpg"
  type: BlogAsset
- path: "/uploads/hero-85.jpg"
  type: BlogAsset
- path: "/uploads/0-lightbuild-2.gif"
  type: BlogAsset
Topics:
- engineering
---

<p dir="ltr"><em>Today we’re open sourcing <a href="http://github.com/geckoboard/lightbuild">Lightbuild</a>, which allows you to indicate Continuous Integration build status using <a href="http://www.meethue.com">Philips Hue light bulbs</a>.</em><span><br class="kix-line-break"><br class="kix-line-break">We’re a pretty curious bunch at Geckoboard, and we’re always looking for interesting ways of taking information and using it in a way that makes everyone aware of what's going on. So when we had some programmable </span><a href="http://www.meethue.com"><span>Philips Hue light bulbs</span></a><span> delivered to the office, a light bulb instantly went off. (Yup, said it.)</span></p>
<span><span><span></span></span></span>
<p dir="ltr"><span>Philips Hue light bulbs may look like normal light bulbs, and you screw them in and switch them on just like any other light bulb. But the wireless LED technology inside of them (you can turn them on and off, and change their colour remotely) is sort of awesome. So we decided to do a little experiment.</span></p>
<span><span><span></span></span></span>
<p dir="ltr"><span>We instantly recognised the potential for connecting the light bulbs to Jenkins (a </span><a href="http://en.wikipedia.org/wiki/Continuous_integration"><span>Continuous Integration</span></a><span> server), and have them report whether a build was successful or not by changing the colour of one of our light bulbs in the office. In order to do so, we created </span><a href="https://github.com/geckoboard/lightbuild"><span>Lightbuild</span></a><span>.<br class="kix-line-break"><br class="kix-line-break">Lightbuild was developed after a few node.js coding sessions (and some ample reading of the Hue documentation). Initially we’ve only added support for Jenkins, but other CI servers/services could easily be implemented. </span></p>
<span><span><br><span></span></span></span>
<h3 dir="ltr"><span>Getting started</span></h3>
<p dir="ltr"><span>To get started with Lightbuild, just fill in your Jenkins configuration parameters (username, password, hostname) and save them as <code><span>config/ci.json</span></code>. Then all you need to do is launch Lightbuild by running: </span></p>
<span><span><br><span></span></span></span>
<pre dir="ltr"><code><span>./script/start</span></code><span></span></pre>
<p><span id="docs-internal-guid--b07482a-a06e-ed90-5c2c-18e566b23ff3"><br><span></span><span>Depending on whether it's been run before, you may need to press the button on the top of the Hue bridge to grant Lightbuild the necessary permissions.<br class="kix-line-break"><br class="kix-line-break">Once it's all set up and ready to go, Lightbuild will poll your Jenkins server every 30 seconds. If any of your builds are currently broken, your light will turn red; if all your projects are passing, then the light will turn a soothing shade of green. See the gif below for a demo of what it might look like next time your build breaks:</span></span></p>
<p><span><span><img src="/uploads/0-lightbuild-2.gif" alt="lightbuild"></span></span></p>
<p> </p>
<p dir="ltr">By default, Lightbuild will use whichever bulb has an internal ID of 1, but you can set a different number by setting the <code><span>LIGHT_ID</span></code> environment variable.</p>
<p dir="ltr"><span>Note that as Philips does not expose their Hue API over the internet, you will need to run Lightbuild from within the same network as your light bulbs. For more installation and usage details, see the </span><a href="https://github.com/geckoboard/lightbuild/blob/master/README.md"><span>README</span></a><span>. If you run into any problems or have any suggestions for future improvements, please open an issue on </span><a href="https://github.com/geckoboard/lightbuild/issues"><span>GitHub</span></a><span>.</span></p>
<p><span id="docs-internal-guid--b07482a-a077-392f-13b1-c15f64e37eed"><span></span><span>If you’re looking to share build information with your team then a combination of Hue lights and Lightbuild is a good way to achieve this. </span></span></p>
<p><span id="docs-internal-guid--b07482a-a077-392f-13b1-c15f64e37eed"><span>Did you like this experiment? Drop your feedback in the comments, or head on over to the </span><a href="https://github.com/geckoboard/lightbuild"><span>GitHub repo</span></a><span>. </span></span><span id="docs-internal-guid--b07482a-a077-392f-13b1-c15f64e37eed">Stay tuned for more engineering related posts from Geckoboard!</span></p>
<br><br> PS: We're <a href="http://www.geckoboard.com/jobs">hiring!</a>
