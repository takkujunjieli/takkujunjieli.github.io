---
layout: home2
permalink: /projects/
comments: false
---

<h2>Personal Projects</h2>

<ul>
{% assign sorted_projects = site.projects | where: "category", "Personal" | sort: "order" %}
{% for post in sorted_projects %}
  <li>
    {% if post.image %}
      <img src="{{ post.image }}" alt="{{ post.title }} thumbnail" style="width:150px;height:auto;">
    {% endif %}
    {% if post.external_url %}
      <a href="{{ post.external_url }}" target="_blank">{{ post.title }}</a>
    {% else %}
      <a href="{{ post.url }}">{{ post.title }}</a>
    {% endif %}
    <p>{{ post.excerpt }}</p>
  </li>
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