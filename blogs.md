---
layout: blogs
permalink: /blogs/
title: Blogs
tagline: A List of Blogs
tags: [Blogs]
comments: false
---
<h2>Recent tech posts that I find helpful</h2>

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p>{{ post.excerpt }}</p>
  </li>
{% endfor %}
</ul>