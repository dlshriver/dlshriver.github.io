---
layout: page
title: About
---

<img src="{{ '/assets/img/profile.png' | absolute_url }}" class="profile" alt="Self portrait using code from my Bachelors thesis.">

## Bio

I am a computer science Ph.D. student at the University of Virginia, advised by [Sebastian Elbaum](https://engineering.virginia.edu/faculty/sebastian-elbaum) and [Matt Dwyer](https://engineering.virginia.edu/faculty/matthew-b-dwyer). I have a BS in computer engineering and a Masters in computer science from UNL. My Masters work was on assessing the quality and stability of recommender systems. My current research interests are in *analysis, testing, and verification of machine learning systems*, especially in the context of cyber-physical systems.

## Research Interests

My research interests are in ensuring correctness of machine learning systems. In particular, I am interested in how we can adapt software engineering methodologies for quality assurance, such as program analysis, testing, and verification, to systems that use machine learning components.

## Publications 

<!-- <a href="https://orcid.org/{{site.orcid}}"><img alt="ORCID logo" src="https://orcid.org/sites/default/files/images/orcid_16x16.png" width="16" height="16" hspace="4" /></a> -->

### Journal Papers

{% assign journal_pubs = site.publications | where_exp: "pub", "pub.path contains 'journal'" | reverse %}
{% for publication in journal_pubs %}
{{publication.content}}
{% endfor %}

### Conference Papers

{% assign conference_pubs = site.publications | where_exp: "pub", "pub.path contains 'conference'" | reverse %}
{% for publication in conference_pubs %}
{{publication.content}}
{% endfor %}

### Misc (Thesis, Posters, etc.)

{% assign misc_pubs = site.publications | where_exp: "pub", "pub.path contains 'misc'" | reverse %}
{% for publication in misc_pubs %}
{{publication.content}}
{% endfor %}
