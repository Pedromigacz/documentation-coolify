---
title: "Overview"
description: "Integrate GitHub with Coolify to deploy applications from repositories, enable automatic deployments, and manage pull requests seamlessly."
---

# GitHub Integration
Coolify simplifies deploying applications from your GitHub repositories or Docker images hosted on GitHub Container Registry.

GitHub integration with Coolify supports deploying from both private and public repositories, automatic deployments on new commits, and pull request deployments.


## Ways to Use GitHub with Coolify

You can integrate GitHub with Coolify in several ways, depending on your needs. Below are the available options, each linked to a detailed guide for easy setup:

1. [Public Repository]() - Deploy applications directly using the URL of a public repository.
2. [Private Repository using GitHub App]() - Install the GitHub App on your personal account or organization to deploy both private and public repositories.
3. [Private Repository using Deploy Key]() - Deploy applications from private repositories using a deploy key.
4. [Automatic Deployments on New Commits]() - Automatically deploy new versions of your application when commits are pushed to a specific branch in your GitHub repository.
5. [Build and Deploy Using GitHub Actions]() - Build your application on GitHub using GitHub Actions as part of your CI/CD pipeline, push it to any Docker registry (such as GHCR or Docker Hub), and automatically deploy on Coolify.
6. [Pull Request Deployments]() - Automatically deploy new versions of your application based on pull requests.