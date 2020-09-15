---
collection: publications
downloads:
  paper: https://digitalcommons.unl.edu/computerscidiss/147
type: mastersthesis
identifier: "shriver:mastersthesis:2018:assessingrecsys"
author: [David Shriver]
title: "Assessing the Quality and Stability of Recommender Systems"
year: 2018
access_url: https://digitalcommons.unl.edu/computerscidiss/147
abstract: "Recommender systems help users to find products they may like when lacking personal experience or facing an overwhelmingly large set of items. However, assessing the quality and stability of recommender systems can present challenges for developers. First, traditional accuracy metrics, such as precision and recall, for validating the quality of recommendations, offer only a coarse, one-dimensional view of the system performance. Second, assessing the stability of a recommender systems requires generating new data and retraining a system, which is expensive. In this work, we present two new approaches for assessing the quality and stability of recommender systems to address these challenges. We first present a general and extensible approach for assessing the quality of the behavior of a recommender system using logical property templates. The approach is general in that it defines recommendation systems in terms of sets of rankings, ratings, users, and items on which property templates are defined. It is extensible in that these property templates define a space of properties that can be instantiated and parameterized to characterize a recommendation system. We study the application of the approach to several recommendation systems. Our findings demonstrate the potential of these properties, illustrating the insights they can provide about the different algorithms and evolving datasets. We also present an approach for influence-guided fuzz testing of recommender system stability. We infer influence models for aspects of a dataset, such as users or items, from the recommendations produced by a recommender system and its training data. We define dataset fuzzing heuristics that use these influence models for generating modifications to an original dataset and we present a test oracle based on a threshold of acceptable instability. We implement our approach and evaluate it on several recommender algorithms using the MovieLens dataset and we find that influence-guided fuzzing can effectively find small sets of modifications that cause significantly more instability than random approaches."
citation: "David Shriver. Assessing the Quality and Stability of Recommender Systems. MS Thesis, University of Nebraska-Lincoln, 2018."
date: 2018-05-01
---
