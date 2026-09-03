---
title: "WATCH: Adaptive Monitoring for AI Deployments via Weighted-Conformal Martingales"
collection: publications
permalink: /publication/2025-icml-watch
anchor: watch
excerpt: 'Paper at ICML 2025. This paper develops a framework for the continual safety monitoring of AI deployments called "WATCH" (for Weighted Adaptive Testing for Changepoint Hypotheses). This framework is centered on a weighted generalization of conformal test martingales (WCTMs). WATCH addresses three main challenges in post-deployment AI monitoring: (1) Adaptation: WATCH enables monitoring under test-time adaptation to mild (covariate) shifts, to minimize unnecessary alarms. (2) Fast Detection: Empirically, WATCH rapidly detects more extreme or harmful shifts. (3) Root-Cause Analysis: WATCH aids in diagnosing the root-cause of performance degradation (as a covariate shift in $X$, or a concept shift in $Y \mid X$).'
date: 2025-07-01  # only the year and month are displayed
topic: ai-monitoring
topic_order: 1
thumbnail: /images/publications/watch_full_thumbnail.png
figure: /images/publications/large/watch_full_thumbnail.png
keywords:
  - 'Monitoring & Sequential Testing'
  - Distribution Shift
  - Conformal Prediction
  - Healthcare Application
authors:
  - Drew Prinster
  - Xing Han
  - Anqi Liu
  - Suchi Saria
venue: 'In International Conference on Machine Learning (ICML)'
venue_short: 'ICML 2025'
pub_type: 'Conference paper'
paperurl: 'https://arxiv.org/abs/2505.04608'
pdf: 'https://arxiv.org/pdf/2505.04608'
code: 'https://github.com/aaronhan223/watch'
citation: 'Prinster, D., Han, X., Liu, A., & Saria, S. (2025). WATCH: Adaptive monitoring for AI deployments via weighted-conformal martingales. International Conference on Machine Learning (ICML). arXiv preprint arXiv:2505.04608.'
bibtex: |
  @InProceedings{pmlr-v267-prinster25a,
    title = {{WATCH}: Adaptive Monitoring for {AI} Deployments via Weighted-Conformal Martingales},
    author = {Prinster, Drew and Han, Xing and Liu, Anqi and Saria, Suchi},
    booktitle = {Proceedings of the 42nd International Conference on Machine Learning},
    pages = {49830--49859},
    year = {2025},
    editor = {Singh, Aarti and Fazel, Maryam and Hsu, Daniel and Lacoste-Julien, Simon and Berkenkamp, Felix and Maharaj, Tegan and Wagstaff, Kiri and Zhu, Jerry},
    volume = {267},
    series = {Proceedings of Machine Learning Research},
    month = {13--19 Jul},
    publisher = {PMLR},
    url = {https://proceedings.mlr.press/v267/prinster25a.html}
  }
---
This paper develops a framework for the continual safety monitoring of AI deployments called "WATCH" (for Weighted Adaptive Testing for Changepoint Hypotheses). This framework is centered on a weighted generalization of conformal test martingales (WCTMs). WATCH addresses three main challenges in post-deployment AI monitoring: (1) Adaptation: WATCH enables monitoring under test-time adaptation to mild (covariate) shifts, to minimize unnecessary alarms. (2) Fast Detection: Empirically, WATCH rapidly detects more extreme or harmful shifts. (3) Root-Cause Analysis: WATCH aids in diagnosing the root-cause of performance degradation (as a covariate shift in $X$, or a concept shift in $Y \mid X$).
