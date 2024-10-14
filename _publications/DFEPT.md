---
title: "DFEPT: Data Flow Embedding for Enhancing Pre-Trained Model-Based Vulnerability Detection"
collection: publications
category: conferences
permalink: /publication/DFEPT
excerpt: 'Vulnerability Detection'
date: 2024-08-21
venue: 'Internetware 2024 (CCF-C)'
paperurl: 'https://doi.org/10.1145/3671016.3671388'
citation: "Zhonghao Jiang, Weifeng Sun, Xiaoyan Gu, Jiaxin Wu, Tao Wen, Haibo Hu, and Meng Yan."
---

Software vulnerabilities represent one of the most pressing threats to computing systems. Identifying vulnerabilities in source code is crucial for protecting user privacy and reducing economic losses. Traditional static analysis tools rely on experts with knowledge in security to manually build rules for operation, a process that requires substantial time and manpower costs and also faces challenges in adapting to new vulnerabilities. The emergence of pre-trained code language models has provided a new solution for automated vulnerability detection. However, code pre-training models are typically based on token-level large-scale pre-training, which hampers their ability to effectively capture the structural and dependency relationships among code segments. In the context of software vulnerabilities, certain types of vulnerabilities are related to the dependency relationships within the code. Consequently, identifying and analyzing these vulnerability samples presents a significant challenge for pre-trained models.
In this paper, we propose a data flow embedding technique to enhance the performance of pre-trained models in vulnerability detection tasks, named DFEPT, which provides effective vulnerability data flow information to pre-trained models. Specifically, we parse data flow graphs (DFG) from function-level source code, and use the data type of the variable as the node characteristics of the DFG. By applying graph learning techniques, we embed the data flow graph and incorporate relative positional information into the graph embedding using sine positional encoding to ensure the completeness of vulnerability data flow information. Our research shows that DFEPT can provide effective vulnerability semantic information to pre-trained models, achieving an accuracy of 64.97% on the Devign dataset and an F1-Score of 47.9% on the Reveal dataset. Compared with the pre-trained model that is only fine-tuned, the performance increases by 1.96%-17.26%.
