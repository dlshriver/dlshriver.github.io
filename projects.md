---
layout: page
title: Projects
permalink: /projects/
---

These are a collection of projects I've worked on, for research, class, and/or personal enjoyment. Most of them can be found on my [Github](https://github.com/dlshriver).

{% assign sorted_projects = site.projects | sort: 'last_updated' | reverse %}
{% for project in sorted_projects %}
<div class="project lang-{{project.language}}">
<div class="project-title"><a href="{{project.homepage}}"><h2>{{project.name}}</h2></a></div>
<p class="project-desc">{{project.description}}</p>
<p class="project-lang">{{project.language}}</p>
</div>
{% endfor %}
