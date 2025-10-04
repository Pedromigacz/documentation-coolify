---
title: "Bluesky PDS"
description: "Here you can find the documentation for hosting Bluesky PDS with Coolify."
---

# Bluesky PDS

<ZoomableImage src="/docs/images/services/bluesky.svg" />

## What is Bluesky PDS?

Bluesky PDS (Personal Data Server) is a self-hosted server that stores your data for the Bluesky social network. It allows you to control your own social media data and identity while still participating in the broader Bluesky network. The PDS handles user accounts, posts, followers, and other social data in a decentralized manner.

## Setting a domain with https if already not set

Pdsadmin requires you to have https in your Bluesky PDS, make sure you have set a domain with https in the Coolify UI and check the environment variables so it matches it.

## Creating an account in your PDS

To create an account and start using your PDS, you can use the following pdsadmin commnands in the Terminal tab of the Coolify UI:

```bash 
pdsadmin create-invite-code
```

or 

```bash
pdsadmin account create <email> <handle>
```

To check for other available commands in pdsadmin, you can simply run `pdsadmin`

And that's it, your PDS should be ready for you to use, it will work like any other PDS!

## Links

- [The official website ›](https://blueskyweb.xyz?utm_source=coolify.io)
- [GitHub ›](https://github.com/bluesky-social/pds?utm_source=coolify.io)