---
date: 2016-05-18T17:18:47-05:00
draft: true
includesCode: false
summary: "Now that the Go language's templating library includes blocks, I rewrote a bunch of this website's layouts to use them"
tags: null
title: Blocks
---

When I started using [Hugo](http://gohugo.io/) for this site, I found that I missed the `block` construct from older templating languages like [Jinja](#) or [Twig](#). Then Go 1.6 arrived, which included blocks (as well as syntax to trim whitespace). Blocks provide your HTML templates with a nice way to share common code by inheriting from other, more generic templates by means of a base template.

Only problem was that Hugo doesn't yet support Go 1.6.

To get around this, I installed Go 1.6 from [Homebrew](http://brew.sh/) and compiled Hugo from source. Armed with the resulting binary, I created a new `layouts/_default/baseof.html` base template and started cutting out extraneous partial templates that I no longer needed. This allows each template to contain both the opening and closing tags for higher-level HTML elements like the body, header, and footer rather than forcing them into separate files.

In my case, the base template defines only two blocks: one for the head's title and another for a wrapper around the content to be rendered later. Subsequent child templates from the base implement whatever makes that particular page unique. For [projects](/project), this means checking if a screenshot exists and linking to the project's site and/or its GitHub page if I open-sourced it. Since the only difference between the post and project listings are whether to include category tags, I use a single list template. Since the list views for projects and posts are nearly identical, they share a single list template, looping to print the category tags if they exist. Overall, this makes individual templates much more self-contained.

I don't know 

---  

## Blocks
 +
 +Go 1.6 includes a new keyword, `block`, which provides templates with a nice way to share common code and override only the parts that need changing.
 +
 +This also provides a means for templates to inherit from other more generic templates by means of a base template. To find this base template, Hugo searches the same paths and file names as it does for [Ace templates](/templates/ace). For Go templates, simply suffix your files with `.html` rather than `.ace`.

---

Blocks

This powerful new contract for Go allows you to define the outer shell of your pages in one place and override the parts that matter

Base:
- Block site title is our default content
- all our HTML plus blocks we want to override later

Page:
- Block title - site title
- Block main

---  

To use blocks, define a new base template in the root directory instead of the regular single and list templates.
