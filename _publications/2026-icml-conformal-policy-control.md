---
title: "Conformal Policy Control"
collection: publications
permalink: /publication/2026-icml-conformal-policy-control
date: 2026-07-01  # only the year and month are displayed
topic: ai-control
topic_order: 1
# thumbnail: /images/publications/FILENAME.png   # optional; see images/publications/README.md
keywords:
  - AI Agents
  - Risk Control
  - Conformal Prediction
  - Distribution Shift
  - Healthcare Application
  - Bioscience Application
authors:
  - Drew Prinster
  - Clara Fannjiang
  - Ji Won Park
  - Kyunghyun Cho
  - Anqi Liu
  - Suchi Saria
  - Samuel Stanton
venue: 'International Conference on Machine Learning (ICML)'
venue_short: 'ICML 2026'
pub_type: 'Conference paper'
paperurl: 'https://arxiv.org/abs/2603.02196'
pdf: 'https://arxiv.org/pdf/2603.02196'
code: 'https://github.com/samuelstanton/conformal-policy-control'
citation: 'Prinster, D., Fannjiang, C., Park, J. W., Cho, K., Liu, A., Saria, S., & Stanton, S. (2026). Conformal Policy Control. International Conference on Machine Learning (ICML). arXiv preprint arXiv:2603.02196.'
bibtex: |
  @article{prinster2026conformal,
    title = {Conformal policy control},
    author = {Prinster, Drew and Fannjiang, Clara and Park, Ji Won and Cho, Kyunghyun and Liu, Anqi and Saria, Suchi and Stanton, Samuel},
    journal = {International Conference on Machine Learning (ICML)},
    year = {2026},
    url = {https://arxiv.org/abs/2603.02196}
  }
---
Proposes using any safe reference policy as a probabilistic regulator for an optimized but untested policy, using conformal calibration to determine how aggressively the new policy may act while respecting a declared risk tolerance. Unlike conservative optimization approaches, this yields finite-sample guarantees for non-monotonic bounded loss functions without requiring correct model specification or hyperparameter tuning, with experiments spanning natural language and biomolecular applications.
