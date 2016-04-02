---
categories:
  - personal
  - open source
  - static
date: 2016-01-05T21:13:37-06:00
draft: false
screenshot: song
summary: A little single-page hymnal of sorts for a few of the (public domain) songs we sing on Sundays with the kids
title: Songbook
urls:
  public: http://songbook.ebsen.me/
  source: https://github.com/ebsen/songbook
---

This project went through a lot of iterations before I finished. It turns out that HTML doesn't really offer any kind semantic markup or even a microformat for song lyrics. This led me to experiment.

I knew I didn't want to manually update the HTML on every song every time I changed my mind. So I treated the lyrics themselves as data instead of markup. Then, I scripted the output I wanted with [Jade](http://jade-lang.com) and fed it the song data.

Now, I could now change the markup _in a single place_ and all the songs would update. That's [the DRY principle](http://en.wikipedia.org/wiki/Don't_repeat_yourself) at work.

(If you're curious, I ended up using [unordered lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) for each line of the chorus and verses.)

As a result, this project includes [the greatest, most beautiful piece of template code I've ever written](https://gist.github.com/ebsen/926a58fb21d5f7f3a20a).
