---
layout: blogs
permalink: /projects/
title: Projects
tagline: A List of Projects
tags: [projects]
comments: false
---

<h1>{{ page.title }}</h1>

<h2>Debug Information</h2>

<p><strong>Available Projects:</strong></p>
<ul>
  {% for project in site.projects %}
    <li>
      <strong>Title:</strong> {{ project.title }}<br>
      <strong>Category:</strong> {{ project.category }}<br>
      <strong>URL:</strong> {{ project.url }}<br>
      <strong>External URL:</strong> {{ project.external_url }}<br>
      <strong>Image:</strong> {{ project.image }}<br>
      <strong>Excerpt:</strong> {{ project.excerpt }}<br>
      <strong>Published:</strong> {{ project.published }}<br>
    </li>
  {% else %}
    <li>No projects found.</li>
  {% endfor %}
</ul>


<h2>Personal Projects</h2>

<ul>
{% for post in site.projects %}
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