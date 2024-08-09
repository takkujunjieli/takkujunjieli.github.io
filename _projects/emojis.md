---
layout: page
image: images/emo/emoji-meaning.jpg
title: "Emojis Search"
date: 2024-08-08
category: Personal
description: "Y."
order: 1
# labels:
#   - LLM-RAG
#   - Distributed system
#   - Python
excerpt: "A Llama 2-powered search engine finding emojis based on descriptions."
---
<img class="img-fluid" src="../img/emo/cotton-header.png">

- Implemented as a Retrieval-Augmented Generation(RAG) app using Langchain, integrating with Amazon
OpenSearch Serverless as vector databases and AWS Bedrock services for embedding.

- Constructed as distributed with Consul for service discovery, NGINX for load balancing, and OpenTelemetry for
tracing, and Kafka for event streaming to enhance performance, scalability, and observability.

- Containerized the application with Docker and deployed it on Google Kubernetes Engine using a CI/CD pipeline
with GitHub Actions, streamlining the development workflow.

Check the repo of this project in github for more details:
 
Repo: <a href="https://github.com/takkujunjieli/Emojis"></a>
