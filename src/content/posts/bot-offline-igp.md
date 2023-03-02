---
layout: ../../layouts/PostLayout.astro
title: "How to use MongoDB for your Discord bot!"
excerpt: "My bot offline - what to do?"
createdAt: "2023-02-28"
author: IGP
---

> "My bot is offline - I came from a YouTube video, **What DO I DO?**"

Calm down! I understand it can be too much for you! But relax, many have gone through this and they have fixed their issue.
You can too! Just keep following this article!

If you're here from this video,
https://youtu.be/k5BspQ9Czek
Please watch this instead and come back here after finishing it. 
https://youtu.be/Gqurhm2QxA0

If you're here from the `How to make a Discord Bot Without Downloading Anything + Host it Online FOREVER`, follow this tutorial!
Since the video has got a little outdated, there are some changes that you need to make.

## 1. Shell
1. Click on the `Shell` Button (generally found on the bottom right side)
2. Enter `npm install discord.js@13.9.0` in the shell and hit enter!
Wait for it to finish installing (takes about 20 seconds).

## 2. `.replit` file
If the website isn't letting you create the `.replit` file,
Skip the tutorial from the mark `3:35` to `4:11`. Since that step is not required now.
> Note: Make sure to reverse/undo any changes you did by yourself in the `package.json` file.

## 3. Intents Update
Go back to the `Bot` tab in the Discord Developers portal website.
https://discord.com/developers
The same place where you copied your bot token on.
Then locate the `MESSAGE CONTENT INTENT` option on the tab (scroll down a little to find it)
Turn it on like and you're all set!
Now your bot can read the messages sent by the users.

## 4. Match the code
It's likely that you might have made a typo while typing the code in your main file that is `index.js`.
Please double check if you did, make sure that
* All brackets/parenthesis are in correct order.
* the case matches (that means if you see `Client` in the video, it's `Client` and not `client`, `cLiEnt` or anything different!
Once you're confident that everything is correct, proceed to the next step!

## 5. The uptime website
We have some bad news for you, the uptime website no longer works so you might as well skip that skip. 
The reason is Discord limits (or timeout) discord bot replit projects, that's why your bot might not turn on or go off every hour.
If you think your bot is not online even though you have confirmed that you've done everything correctly, there is a high chance that your replit project got a timeout. 
To fix this, simply run `kill 1` a few times in the shell tab.

After following all the steps given above, you may run the project by clicking on the `run` button.
If your bot still isn't online, You may ask for help in #help-here/#discord-bot-help in the [official Discord Server](https://discord.gg/igp)!

## My bot is online!!, what's next!
Congratulations, you've managed to create your first Discord Bot
<br>
This post is still in progress, feel free to contribute or correct any mistakes!
