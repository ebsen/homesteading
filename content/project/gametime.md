---
categories:
  - personal
  - open source
  - static
date: 2016-03-12T10:58:34-06:00
draft: false
screenshot: game
summary: A stupidly simple page for keeping score
title: Game Time
urls:
  public: http://gametime.ebsen.me
  source: https://github.com/ebsen/gametime
---

I wanted a super-simple way to keep score at our son's soccer games. The app has two buttons, one for each score. Tap to add a point. Refresh the page to reset both scores to zero.

To make the buttons easier to tap, I placed them especially large and near the bottom of the screen. To eliminate the tap delay on mobile browsers, I added [FastClick](http://ftlabs.github.io/fastclick/). I also disabled page zooming and the bouncy-scroll thing that Safari does at the bottom of the page. In most cases, these UI features serve a purpose. In this case, they introduce complexity and make those two big obvious buttons just a _little_ harder to hit.
