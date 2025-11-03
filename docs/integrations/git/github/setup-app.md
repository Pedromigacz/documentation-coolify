---
title: "Setup GitHub App"
description: ""
---

# GitHub App
Github app allows you to grant access to a single or mulitple private repositories from your either personal github account or your organization on github.


### Why use github app with Coolify?
Scoped Access: The GitHub app lets you grant Coolify access to a specific repository, a selected group of repositories, or even all of your repositories. This gives you flexibility and better control over what Coolify can access.

### When Not to Use github app with Coolify?
Lack of Permission: If you don't have the necessary permissions to install the GitHub app, or if you prefer not to install it, then it’s best not to use it with Coolify.

## Installation Methods
There are two ways to install Github App on Coolify:
- [Automated Installation]() (Recommended)
- [Manual Installation]()
We highly recommend the Automated Installation method as it automates the process and reduces the chance of errors.


::: info Example Data
The following data is used as an example in this guide. Please replace it with your actual data when following the steps:

- **GitHub App Name on Coolify:** `Github App Tutorial`
- **GitHub App Name on Github:** `coolify-github-app-tutorial`
- **Webhook Endpoint:** `https://coolboxy.shadowarcanist.internal`
:::


## Automated Installation
### 1. Create a Github App on Coolify
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/1.webp" />
1. In your Coolify dashboard, click on Sources from the sidebar.
2. Click the + Add button to create a new github app.

<ZoomableImage src="/docs/images/integrations/git/github/setup-app/2.webp" />
3. Enter a Name for your App
4. Enter your github organization name (if you are adding the github app to your github account then leave this field empty) and click continue

::: info 
1. If you are using Selfhost or Enterprise version of Github then you can enter your github details on the Selhost/Enterprise github section.
2. The "System wide" option allows all teams you have on your coolify instance to use this specific github app, if you only want the current team to use the github app then leave this option unchecked.
  ::: warning
  Coolify cloud users won't see the option "System wide" because this option will enable your github app to all Cloud users so this option is disabled on Coolify Cloud
  :::
  
### 2. Set Webhook Endpoint
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/3.webp" />

1. Select the endpoint for github to send Webhook when a event (commit, pr) happens on github. If this endpoint is not reachable then automatic deployments won't work so if you decide to close port 8000 on your server you have to set the webhook endpoint as your Coolify dashboard domain

<ZoomableImage src="/docs/images/integrations/git/github/setup-app/4.webp" />
2. Preview deployments are enabled by enabled by default and you can disable them if you dont want them
3. Click on Register now button (this will take you to github)


### 3. Create Github App on Github
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/5.webp" />
1. Give your github app a name (this will be shown on your github app list and you can always change it later)
2. Click on Create app button (this will take you back to your coolify dashboard)

### 4. Allow Github app access to repositories
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/6.webp" />
1. Click on "Install repositories on Github" button

<ZoomableImage src="/docs/images/integrations/git/github/setup-app/7.webp" />
2. Select the repositories that you want this app to have access to (you can give access to all repositories or specific repositories)
3. Click on "Install" button (this will take you back to your Coolify dashboard)

<ZoomableImage src="/docs/images/integrations/git/github/setup-app/8.webp" />

### 5. Create a New Resource on Coolify
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/9.webp" />

1. Select your project from the Coolify dashboard.
2. Click the **+ New** button to create a new resource.


### 6. Select Private Repository (with Github App) as Resource Type
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/10.webp" />
Select **Private Repository (with Github App)** from the available resource types.


### 6. Choose Your Server
::: warning HEADS UP!
Coolify automatically selects the `localhost` server if you don't have any remote servers connected. In such cases, skip to the next step.
:::

<ZoomableImage src="/docs/images/integrations/git/github/setup-app/11.webp" />

Choose the server where you want to deploy the application.


### 7. Choose Your Github App
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/12.webp" />

Select the Github App you created in Coolify from the list of available Apps.


### 8. Configure the Application and Deploy
<ZoomableImage src="/docs/images/integrations/git/github/setup-app/13.webp" />

1. Choose Repository and click on "Load Repository" button.

<ZoomableImage src="/docs/images/integrations/git/github/setup-app/14.webp" />
2. After selecting the repository, configure the buildpack, ports, and other settings. (Refer to our dedicated guide on [builds](/builds/introduction) for more details.)

Once configured, deploy your application.

That's it! 