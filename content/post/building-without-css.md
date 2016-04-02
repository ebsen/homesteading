---
title: Building without CSS
date: 2015-09-02
# date: 2016-01-05T20:51:47-06:00
draft: true
summary: "Make it work before you make it pretty."
---

With this and other sites recently, I built out the basic functionality before applying any styling whatsoever. White, black, and Times New Roman all the way. It worked astoundingly well.

Since I switch tools a lot, leaving out the CSS forces me to _use the tool_. How does [Sculpin](https://sculpin.io) render the contents of a directory? How does [Hugo](http://gohugo.io)? How do I sort a collection of posts? Display a list of posts that match a given tag? CSS does nothing to address these things and when I tried to style something as I was building it, I repeatedly found myself getting lost in the styling rather than evaluating the tool itself. 

This is a junior-league mistake, yes--but consciously refusing to put down any CSS forces me to build a functioning website, a genuine protoype, rather than styling an imaginary one.

It accomplishes another thing too. With no styling to speak of, you find yourself looking directly at raw markup. Do I really need that `div` there? Can I use this menu if the (eventual) CSS failed to load? 

This encourages lean, accessible markup that [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) can, well, enhance.That's good for everybody.
