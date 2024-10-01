---
layout: blogs
permalink: /blogs/
title: Blogs
tagline: A List of Blogs
tags: [Blogs]
comments: false
---
<h2>High performance computing (HPC)</h2>

<ul>
{% for post in site.posts %}
  {% if post.category == "High performance computing (HPC)" %}
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

<h2>Data Engineering</h2>

<ul>
{% for post in site.posts %}
  {% if post.category == "Data Engineering" %}
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


<h2>Others</h2>

<ul>
{% for post in site.posts %}
  {% if post.category == "Others" %}
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