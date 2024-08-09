---
layout: projects
permalink: /projects/
title: Projects
tagline: Takku's Dev/Research
tags: [projects]
comments: false
---
<h2>Personal Projects</h2>

<ul>
{% for project in site.projects %}
  {% if project.category == "Personal" %}
    <li>
      {% if project.external_url %}
        <a href="{{ project.external_url }}" target="_blank">{{ project.title }}</a>
      {% else %}
        <a href="{{ project.url }}">{{ project.title }}</a>
      {% endif %}
      <p>{{ project.excerpt }}</p>
    </li>
  {% endif %}
{% endfor %}
</ul>

<h2>Work Samples</h2>

<ul>
{% for project in site.projects %}
  {% if project.category == "Samples" %}
    <li>
      {% if project.external_url %}
        <a href="{{ project.external_url }}" target="_blank">{{ project.title }}</a>
      {% else %}
        <a href="{{ project.url }}">{{ project.title }}</a>
      {% endif %}
      <p>{{ project.excerpt }}</p>
    </li>
  {% endif %}
{% endfor %}
</ul>