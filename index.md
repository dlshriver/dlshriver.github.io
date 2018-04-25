---
layout: page
title: About
---

<img src="{{ '/assets/img/profile.png' | absolute_url }}" class="profile" />

## Bio

I am a computer science Ph.D. student at the University of Nebraska-Lincoln, advised by [Sebastian Elbaum](https://cse.unl.edu/~elbaum). I have a BS in computer engineering from UNL and a Masters in computer science from UNL. My research interests are in *testing and verification of machine learning systems*. My latest work is on assessing the quality and stability of recommender systems.

## Research Interests

I am interested in how we can test and verify machine learning systems. 

## Publications

### Conference Papers (short)

{% assign short_conference_pubs = site.publications | where_exp: "pub", "pub.path contains 'conference/short'" | reverse %}
{% for publication in short_conference_pubs %}
{{publication.content}}
{% endfor %}
