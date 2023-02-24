---
title: "How to make your Discord bot online!"
excerpt: "This post compiles tips from the IGP Discord server into a single page on how to make your bot online."
createdAt: "2023-02-24"
author: shaken-bird
---

*Quick note, I didn't come up with most of the stuff in this article, it's compiled from multiple people in the server. Thanks to the following people:*
- Imagine#0219
- Core#4786

## The most efficient way to ask for help with coding

#### I'm sure you would like to get your code fixed as quick as possible, but for that to be the case, you need to make it easy for helpers to understand your code.

Try to put the following into a single message to make it easy for helpers to read:
- What version of Discord.js are you using?
- Show your code (this can be in a separate message, using codeblocks or screenshots)
- Show a screenshot of the error you are getting, not the stack-trace, the full error. (scroll up in console)

Now, helpers should have an easier time assisting in fixing your code. (Make sure to be patient!)

## Common problems

- If you came from a video telling you to make a `.replit` file, there's no need to do that anymore; you can skip the part from `3:35` - `4:11`.

- Make sure you have priveleged intents enabled. Go to https://discord.com/developers in the bot section, enable `Message Content Intent`.

- Depending on what service you use to host your bot, it may still randomly go offline (Replit was never intended to be a 24/7 hosting platform). If this is the case for you, meaning your bot is offline with no errors, try running `Kill 1` in shell. Otherwise, consider making your bot in vscode and using alternative hosting platforms.

## Other things to keep in mind

- Please don't use ChatGPT!!! With the recent boom in popularity of ChatGPT, we've seen an increase in people using it to create their Discord bot. ChatGPT is more outdated than IGP's tutorials, so don't use it. It's just gonna cause even more issues.

- Keep in mind that you're probably gonna be ignored by helpers if you go in discord-bot-help and say something like "I need help" or "my bot's offline", as it's not helpful at all. We know your bot's offline, otherwise you probably wouldn't be sending anything in that channel. For the sake of not wasting your own time, just follow the steps above and don't 'ask to ask'.

- No one wants to help people that are being disrespectful or pushy towards them. No one is being paid to help you with your bot in this server, so please be nice and treat people how you'd like to be treated.

- Some people wonder what the difference between Cheeku and Cheeka is, so here you go. Cheeku is basically just the older version of Cheeka, meaning that a lot of the tags it has are outdated. Additionally, Cheeku's tags are not approved by moderators, meaning that it could have unreliable information. All tags in Cheeka are approved by moderators.

- If everything here fails, like if the discord-bot-help channel is completely dead and you can't fix your problem, remember that there's always google.com that probably has a solution to something similar to your problem :)

Thank you for taking the time to read
– IGP team
