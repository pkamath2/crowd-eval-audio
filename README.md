# Crowd-Eval-Audio Framework

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A frontend focused framework to setup and conduct perceptual listening tests on crowdsourced platforms such as Amazon's Mechanical Turk. This project resulted from a need for a lightweight plug and play framework for conducting listening tests w/ minimal setup requirements (no DB installations etc for basic setup).

This framework used in conjunction with the External API on Mechanical Turk provides an configurable, multi-page, intuitive listening test interface for participants. 

This project has the following structure. Please see individual directories for instructions to setup for development and deployment.

* [ui/](./ui) : Source for the configurable web interface iframed inside Mechanical Turk
* [serverless/](./serverless) : Source for AWS Lambda. Currently (optionally) used by the web interface to log unique participant ids for Between-Groups experiments.
* [notebooks/](./notebooks) : Set of notebooks used to setup experiments on Mechanical Turk. Also to download responses and programatically pay Mechanical Turk participants etc. 

Please cite this work as  -   
```Kamath, P., Li, Z., Gupta, C., Jaidka, K., Nanayakkara, S., Wyse, L. Crowdsourcing Descriptive Audio Quality Evaluation Using Image-Schemas. In Proceedings of Intelligent User Interfaces 2023. (Accepted and pending publication)```