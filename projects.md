---
layout: projects
permalink: /projects/
title: Projects
tagline: Takku's Dev/Research
tags: [projects]
comments: false
---

{% for project in site.pages %}
  {% if project.layout == "project" %}
    - [{{ project.title }}]({{ project.url }})
  {% endif %}
{% endfor %}