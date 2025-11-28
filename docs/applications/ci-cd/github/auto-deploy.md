---
title: "Auto Deploy"
description: ""
---

# Automatic Deployments
Coolify can automatically deploy new version of your application whenever you push new changes to your github repository


## Methods
There are three ways to setup automatic deployments on Coolify:
- [Github App](#github-app)
- [Github Actions](#github-actions)
- [Webhooks](#webhooks)

## Github App
We have a dedicated guide for setting up a GitHub App, which you can follow here: [/github/setup-app](/applications/ci-cd/github/setup-app)

Coolify automatic enables "auto deploy" after you have setup your github app, but if Coolify didn't enabled is then you can enable it on your application by following these steps:

<ZoomableImage src="/docs/images/applications/ci-cd/github/auto-deploy/github-app/1.webp" />

1. Open your application configuration page
2. Go to "Advanced" page
3. Enable "Auto Deploy" under the general section


## Github Actions
We have a dedicated guide for setting up a GitHub action, which you can follow here: [/github/setup-app](/applications/ci-cd/github/setup-app)


## Webhooks
### 1. Enable Auto Deploy
<ZoomableImage src="/docs/images/applications/ci-cd/github/auto-deploy/webhooks/1.webp" />
1. Open your application configuration page
2. Go to "Advanced" page
3. Enable "Auto Deploy" under the general section

### 2. Setup Github webhook secret
<ZoomableImage src="/docs/images/applications/ci-cd/github/auto-deploy/webhooks/2.webp" />
1. Enter Github webhook secret (this has to be a random string, you can use tools like [Random String Generator](https://getrandomgenerator.com/string))
2. Save the webhook url somewhere safe, we will need it later.

::: warning IMPORTANT
  A webhook secret is like a password. Coolify only accepts the webhook if the secret matches.
:::

### 3. Setup webhook on Github
<ZoomableImage src="/docs/images/applications/ci-cd/github/auto-deploy/webhooks/3.webp" />
1. Go to your repository settings page
2. Click on "Webhooks" from the sidebar
3. Click on "Add webhook" button

<ZoomableImage src="/docs/images/applications/ci-cd/github/auto-deploy/webhooks/4.webp" />
4. Enter the previously copied webhook url from Coolify in the "Payload URL" field
5. Enter the webhook secret you have on Coolify in the "Secret" field
6. Enable the option "Enable SSL verification"
7. Select the option "Just the `push` event"
8. Enable the option "Active"
9. Click on "Add webhook" button

After you click the "Add webhook" button, you will see a page like shown below:
<ZoomableImage src="/docs/images/applications/ci-cd/github/auto-deploy/webhooks/5.webp" />

That's it!, Coolify will automatically redeploy your application whenever you push changes to your repository