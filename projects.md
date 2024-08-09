---
layout: blogs
permalink: /projects/
title: Projects
tagline: A List of Projects
tags: [projects]
comments: false
---
<h2>Personal Projects</h2>

<ul>
{% for post in site.posts %}
  {% if post.category == "Personal" %}
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

<h2>Work Samples</h2>

<ul>
{% for post in site.projects %}
  {% if post.category == "Samples" %}
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