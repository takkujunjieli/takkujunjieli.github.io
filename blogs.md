---
layout: blogs
permalink: /blogs/
title: Blogs
tagline: A List of Blogs
tags: [Blogs]
comments: false
---
<h2>Engineer</h2>

<ul>
{% for post in site.posts %}
  {% if post.category == "Theories" %}
    <li>
      {% if post.external_url %}
        <a href="{{ post.external_url }}" target="_blank">{{ post.title }}</a>
      {% else %}
        <a href="{{ post.url }}">{{ post.title }}</a>
      {% endif %}
      <p>{{ post.excerpt }}</p>
    </li>
  {% endif %}
{% endfor %}
</ul>

<h2>Science</h2>

<ul>
{% for post in site.posts %}
  {% if post.category == "Practices" %}
    <li>
      {% if post.external_url %}
        <a href="{{ post.external_url }}" target="_blank">{{ post.title }}</a>
      {% else %}
        <a href="{{ post.url }}">{{ post.title }}</a>
      {% endif %}
      <p>{{ post.excerpt }}</p>
    </li>
  {% endif %}
{% endfor %}
</ul>