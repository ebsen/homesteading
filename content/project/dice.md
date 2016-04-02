---
categories:
  - personal
  - open source
  - static
date: 2016-03-12T10:58:51-06:00
draft: false
screenshot: ""
summary: "A digital die when no physical ones are handy"
title: Dice
urls:
  public: http://dice.ebsen.me/
  source: https://github.com/ebsen/dice
---

**Note:** This project is deprecated in favor of [Ranger](/project/ranger).

This Fourth of July the family and I visited my parents. There, my mom keeps this huge Disney-themed book of board games. the games all use a digital built-in display instead of dice.  Only one problem: the batteries were dead and we couldn't find any dice in the house.

I improvised by writing a very simple node script that returned a random number from one to six. Easy enough. Each played "rolled the dice" by tapping the Up key to bring up the previous command (this ad hoc dice script, in this case) and hit return to get a new number back. It worked for our game that afternoon (crisis averted!) but I can't say the kids enjoyed it much.

So, to simplify things for the next time this happens, I wrapped that little script in a web page. Now, instead of fiddling with an arcane command prompt to "roll" a digital die, you just click a button.

Upon seeing the project, a friend (who may or may not play a little D&D) called me out for only supporting six-sided die. So I added a Settings pane to allow you to configure the number of imaginary sides on your imaginary die.

(In case you're wondering, the singular of "dice" is "die." I kept saying "dice" and my wife kept ruthlessly correcting my improper conjugation.)

