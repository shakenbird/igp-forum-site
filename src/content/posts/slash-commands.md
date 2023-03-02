---
layout: ../../layouts/PostLayout.astro
title: How to make a slash command
excerpt: This post is gonna explain how to make a slash command for your bot.
createdAt: 2023-03-01
author: Aljo
---

# After having a discord bot for some time, you're probably wondering how to make a slash command.

### What even are slash commands, you may ask?
Well, they're a way to use a Discord bot's commands just by typing a `/` in the chat bar. 

After typing a slash command, your bot can receive the interaction in two ways: 
- getting it by the INTERACTION_CREATE event in the gateway
- configuring an interactions endpoint URL to receive the interacions by a POST request

The commands can also be global and/or specific guild only.

## So, let's cover the first (and most common) way first. 
Discord sends a gateway event labeled INTERACTION_CREATE (or interactionCreate in discord.js) whenever someone executes a slash command. It provides you with necessary things such as the interaction ID and its token. It also sends info about the user who executed the interaction, and much more. 
### How do I reply to it?
Well, since most of you here are discord.js people, I'm gonna add Discord.js examples. If you're brave enough to mess with the raw API though, [the discord docs](https://discord.com/developers/docs/interactions/receiving-and-responding#interactions) have your back.

Back to the topic - you can reply with
```js
interaction.reply("Hello!");
//or
interaction.reply({content: "Hello!"});
```
More options are at [discordjs.guide](https://discordjs.guide/slash-commands/response-methods.html).

You can also create follow-ups with `interaction.followUp(options);` where options is the string to send, or the options object (just like the `reply` method).

Another thing to note is `interaction.deferReply();` which you can use to make the loading state, since the interaction token expires after a few seconds. You can later use `interaction.editReply();` to edit the reply to something else (this applies to the other methods as well). You can pass `{ephemeral: true}` as the options in deferReply if you need to reply with an ephemeral message. 

There's a lot more methods, you can check the [discord.js docs](https://discord.js.org/) to see all of them, and you can also check all the options you can put inside the methods.

## Going to the second method of receiving interactions,
Discord.js isn't gonna have your back this time, sadly. The Discord docs explain it well though ([Read this entire article](https://discord.com/developers/docs/interactions/receiving-and-responding)). The requirements (discord is just gonna say "couldn't verify the url", so keep these in mind):
- A website. You can create one with Flask (py), Express (js) and many others. 
- The website's url needs to end with `/api/interactions`. Otherwise Discord won't allow it.
- The website needs to respond to PINGs (type 1), which ensure your website is turned on. [Flask example](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction)
- The website needs to pass the authorization checks. There's some timestamp stuff you'll receive, and Discord WILL test this before approving the url, so watch out. Luckily, there's both node.js and python examples [almost at the bottom of the article](https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization), and I'm pretty sure you can just copy paste these and change a few things such as the `APPLICATION_PUBLIC_KEY` (leave the `signature` and `timestamp` variables alone!)

I'm pretty sure this is it for the requirements. For replying, just follow the standard things for replying to an interaction, refer to [this link](https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response). And yeah, to get the interaction id and token, you just get the request's body, which is JSON containing the things I listed earlier. Also YES, this method ALSO has everything (or at least I think so) that the gateway event has. So there's no downside other than having to host the website. 

## Okay, got it, they're cool. How do I make one?

You can only make a slash command by sending a simple request to `/applications/BOT_ID/commands`, or for making it for a specific guild, `/applications/BOT_ID/guilds/GUILD_ID/commands`. 

If none of these things made sense, don't worry. Discord.js has got your back! You can register commands using the `REST` thingy from djs ([Link](https://discordjs.guide/creating-your-bot/command-deployment.html)), by `client.application.commands.create();` or by `<Guild>.commands.create();` with the args as an object with things such as name, description, options and much more. 

However, if you understood what I said earlier, it's not that hard to register a slash command that way. Just parse the JSON contents as the name, description and options of the command. Here's an example in Python: 
```py
import requests
# if you want global commands
url = "https://discord.com/api/v9/applications/YOUR_BOT_ID/commands"
# if you want guild commands
url = "https://discord.com/api/v9/applications/YOUR_BOT_ID/guilds/YOUR_GUILD_ID/commands"
json = {
"name": "ping",
"description": "replies with pong :D"
}
headers = {
"authorization": "Bot YOUR_BOT_TOKEN"
}
requests.post(url, json=json, headers=headers)
```
and in Node.js using the Fetch API:
```js
const fetch = require('node-fetch'); // install v2, or use ESM modules which idk how to use
let url;
// if you want global commands
url = "https://discord.com/api/v9/applications/YOUR_BOT_ID/commands";
// if you want guild commands
url = "https://discord.com/api/v9/applications/YOUR_BOT_ID/guilds/YOUR_GUILD_ID/commands";
const json = {
  "name": "ping",
  "description": "replies with pong :D"
};
const headers = {
  "authorization": "Bot YOUR_BOT_TOKEN"
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(json),
  headers: headers
});
```

### After that, the command should be registered.
Then, you can try replying to it. 

# Good luck!

Again, all documentation containing what I've talked about is on https://discord.com/developers/docs. Useful links:
- [Discordjs.guide](https://discordjs.guide)
- [Discord dev portal](https://discord.com/developers)
- [Discord documentation](https://discord.com/developers/docs)
- [Discord.js full docs](https://discord.js.org)
- [Tool to send requests in browser](https://reqbin.com)
- [HTTP Requests overview](https://www.tutorialspoint.com/http/http_requests.htm) (Also use google for more of these)