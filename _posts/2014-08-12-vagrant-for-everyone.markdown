---
title: Vagrant for everyone
date: 2014-08-12 12:29:00 Z
type: 
assets:
- path: "/uploads/vagrant-logo-1.jpg"
- path: "/uploads/4294601642_e7d345f2f5_z.jpg"
- path: "/uploads/10810122433_d5fa26b328_z.jpg"
Topics:
- chef
---

**[Łukasz Korecki](https://twitter.com/lukaszkorecki), one of our many talented developers here at Geckoboard, is in charge of making sure that operations run smoothly. He wanted everyone to work as closely to the production version of Geckoboard as possible, and when no single solution fit the bill, he put together his own. Below you'll find out how he did it.**
</br>
[![Vagrant](/uploads/vagrant-logo-1.jpg)](https://vagrantup.com)

**Automation is the key.** That's why I've been working hard to make sure every member of our product team (developers and designers) are using the same setup and work in an environment as close as possible to our production version of Geckoboard.

Our tools of choice are [Vagrant](https://www.vagrantup.com/) and
[Chef](http://www.getchef.com/). The entire setup is fully automated and new starters are ready to work pretty much as soon as they get their hands on shiny new gear.

Most of the developers at Geckoboard are fans of text-based tools and [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy), so for a long time our standard setup was [Vim](http://www.vim.org) and [tmux](http://tmux.sourceforge.net/). These tools work brilliantly when combined with an isolated development environment accessible over
[SSH](https://en.wikipedia.org/wiki/Secure_Shell).

## Ghost in the shell

[
![Terminals](/uploads/4294601642_e7d345f2f5_z.jpg) 
](https://flic.kr/p/7xuXrU)</br>[Vagrant offers quite a few ways of accessing files from
outside](http://docs.vagrantup.com/v2/synced-folders/index.html), but those that are performant are not problem-free. For example, Geckoboarders who prefer a fancy looking text editor were faced with problems when they tried to access the virtual machine. 

After a lot of research, I decided to implement my own solution (uh-oh) in order to provide the best experience for everyone.

Requirements for the solution were as follows:

- Needs to be as easy to set up as possible for less technical users
- Needs to be performant as we have quite a lot of different repositories and projects

## Need for speed

After looking into a couple of different options I decided to go with the following setup:

- Install NFS server of on the Vagrant-powered virtual machine
- Expose directory containing all our projects to clients connecting to the VM
- Make it easy to connect to the shared directory

[NFS](https://en.wikipedia.org/wiki/Network_File_System_(protocol)) seemed to fit our use case quite nicely - especially that any given time only one user will be accessing files in the VM and connection is made locally. That should give us good enough performance. Additionally, most of us use Mac OSX (10% use Linux) as our operating system of choice which has NFS support built in, so there was no worry about installing additional software.

One thing to note is that [Vagrant can be configured to use NFS](http://docs.vagrantup.com/v2/synced-folders/nfs.html), but the way it's set up didn't fit our requirements and required additional configuration steps.


## Let's cook

[
![Jessie?](/uploads/10810122433_d5fa26b328_z.jpg) 
](https://flic.kr/p/htfGMg)
</br>
The result is a tiny [Chef
cookbook](https://github.com/lukaszkorecki/nfs-server) which does just that. Have a look at the [readme](https://github.com/lukaszkorecki/nfs-server#readme) in your spare time.

When the setup is done the shared directory is accessible via the following url:

`nfs://192.168.33.10/home/vagrant/src` and can be mounted easily using Finder's
bultin "Connect to server" functionality.

## The epilogue

Since these changes have been made our interns and designer are really happy with our current setup: It's as easy as booting the development VM and simply using it.

By removing friction from the setup everyone stays productive and it makes it easy to collaborate
because everyone's development environment is set up in the same way.
