---
# date: 2016-01-05T20:55:53-06:00
date: 2015-08-05
draft: true
summary: ""
title: What Does CSS Really Need?
---

Update: [This this this](http://jxnblk.com/writing/posts/rethinking-variables-in-css/).

One of the things that kept me from diving into the "post-processor" craze has been its lack of mixin support. We _need_ that composability in our code, don't we?

A language _needs_ a construct like variables to hold repeated values across a code base. Your editor's find and replace is not an honest replacement for this. While CSS promises to (eventually) answer this with custom properties and the `var` keyword, those aren't in any browsers today.

For the same reason any language needs variables, CSS needs nesting: **Don't repeat yourself.** The future of nesting inside vanilla CSS [looks less straightforward](https://tabatkins.github.io/specs/css-nesting/) than varialbes, but not hopeless.

Next, you get to the higher-order things: functions, mixins and extensions. Honestly, I rarely use functions in Sass but I knew I'd sorely miss the ability to extend or mix properties into a rule set or a selector. 

Or would I?

Browse through the documentation for [Tachyons](http://tachyons.io/). Tachyons takes the concept of utilities from [SMACSS](https://smacss.com/) and _just runs with it_. I mean, [Prefontaine](https://en.wikipedia.org/wiki/Steve_Prefontaine) style. In Tachyons, you'll find _tiny_, single-purpose classes (and only classes) often containing only a single property, two at the most. 

**Everything in Tachyons is a utility.**

At first I thought, how terrible! Memorize a gajillion little tiny class names and mash them all into my HTML? That sounds like my first project with Bootstrap. 

_No, thank you._

Stepping back a little, let's entertain this idea a little further. Those classes each _only do one thing_. You assemble an element's presentation by including the ones that matter in that context. You _compose_ them. 

This achieves the same purpose that extending or mixing does: It allows you to apply, even remix already existing code without writing it again. 

You could even import Tachyons into a Sass or other tool chain to compose "greater," larger components/modules and layouts from it by using our beloved extensions and mixins.

Not only that, composing presentation in this way provides us with another very important benefit:

**It doesn't hurt your brain.**

Admit it: Extensions and mixins are hard to understand--especially when you didn't write them yourself. Remember when you finally understood them? I do. I even remember exactly where I was standing when it clicked.

Perhaps you're smarter than me. That's likely. Still, I know I've written extensions just _knowing_ that another developer (or, let's face it, even me a month later) wouldn't understand that code, at least not without _a little_ studying.

Tools like Sass or Less or Stylus promised to free us from the monotony and verbosity of CSS. The danger with them, ironically, comes from their power: Drunk on features, you can dig your way into highly specific, overly bloated CSS very easily.

Tight, tiny classes--already available for use in even the most crufty browsers running today--achieve much of this reusability. Plus, the need to jump back and forth between HTML and CSS to adjust styling every time the markup changes drops dramatically. The classes are just too small to need changing. If you wanted, custom properties or variables could even replace your most-often used class combos. (This is almost exactly how extensions work in Less already.)

I need to think more about this but I'm looking forward to pushing this idea further.

--- 

_P.S._ Since writing this, I found Basscss, which normalizes much of Tachyons into a more stable 
