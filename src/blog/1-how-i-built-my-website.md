---
title: "How I built my website"
slug:  "/blog/how-i-built-my-website"
date:  "2020-12-15"
tags:  ["Gatsby", "React"]
---

I had been wanting to create my own website for a long time. If you are reading this I have succeeded :). To make the
process fun I chose to use [Gatsby](https://www.gatsbyjs.com/). Gatsby creates static sites
using [React](https://reactjs.org/) which I'm very familiar with.

## Embracing Gatsby

I had some struggles when I started using Gatsby. The biggest one was that I was not familiar with GraphQL at all.
Gatsby uses this to retrieve content like blogs or the site name. The query syntax looked a bit like what I remember
from using MongoDB but there was a lot of syntax sugar that I did not understand at all. I was also struggling to find
documentation about Gatsby.

I really started to see the power of Gatsby once I started `npm install`ing all kinds of Gatsby plugins. For example

## Choosing the best tool for the job

In order for my site to be fast I was looking into static site generators. Because I have a lot of experience
with [React](https://reactjs.org/) I quickly came across [Gatsby](https://www.gatsbyjs.com/).

## Making it look pretty

This was definitely harder because I'm not really comfortable with creating website designs.

## Cheap hosting

This website is hosted on [GitHub Pages](https://pages.github.com/). This is basically free hosting of static files from
a GitHub Repository. I use the npm package [gh-pages](https://github.com/tschaub/gh-pages) in order to publish the files
to a different branch named `gh-pages`. The source code of the site remains in the `master` branch.

Hosting via GitHub Pages has a few benefits for my usecase. Its free which is amazing. I can use any custom domain. And
I don't need to worry about webserver configuration, ssl certificates.
