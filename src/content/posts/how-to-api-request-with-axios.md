---
layout: ../../layouts/PostLayout.astro
title: "How to make a API request with axios"
excerpt: "This posts is gonna explain to you how to do api request easily with axios package"
createdAt: "2023-03-02"
author: IHZAQ
---

# How to do an API request with axios? PART 1

## Introduction

What is API Request?

API Which Stands for **A**pplication **P**rogramming **I**nterface is used in almost every application, just like you hosting a discord bot, you basically making a API Request between your computer and discord themself, to listen to a message, delete message and etc..

There are 4 common methods of API request which is:

- GET
- POST
- PATCH
- DELETE

The methods we gonna learn today is GET which is basically used to requesting an information from particular source

For example let's say my discord bot needs to fetch my roblox user information but how to do that? Well that's pretty easy.

In order to get my roblox user information, My bot needs an **Endpoints** which is this: [https://users.roblox.com/v1/users/1684676332](https://users.roblox.com/v1/users/1684676332)

and its gonna response in JSON which is this:

```json
{
  "description": "All my link and stuff - ihz.carrd.co \nAnd yes I am your dad 5 years ago >:)",
  "created": "2020-06-09T12:56:55.72Z",
  "isBanned": false,
  "externalAppDisplayName": null,
  "hasVerifiedBadge": false,
  "id": 1684676332,
  "name": "IHZAQSTORM33",
  "displayName": "IHZAQ33"
}
```

After that my bot is gonna use that data to use it on anywhere (embed, message and etc)

## How to do it using a Javascript Code

Well it's pretty simple.  
Firstly, install a lightweight package called Axios, by running following in terminal/shell  
`npm i axios@0.26.0`  
Why version `0.26.0` ?, its much better

After that, import axios into your code like this

```js
const axios = require("axios"); //Javascript
import axios from "axios"; //Typescript
```

Nice, now we need an [asynchronous function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#:~:text=Asynchronous%20programming%20is%20a%20technique,is%20presented%20with%20the%20result.) in order to wait for response from any particular source, for example, roblox.

```js
const axios = require("axios"); //js or ts, depends on you

//Create a function
async function startApp() {
  const api = await axios
    .get("https://users.roblox.com/v1/users/1684676332")
    .catch((err) => {});
  //If the data failed at receiving the data, "api" will return undefined

  const { data } = api; //import data from api

  // and then do whatever you want with "data"

  console.log(data.name); // IHZAQSTORM33
  console.log(data.displayName); // IHZAQ33
  console.log(data.created); // 2020-06-09T12:56:55.72Z
}

startApp(); //Don't Forget to recall your function or it will not run
```

You can do this with any api provider you want, like [Minecraft](https://wiki.vg/Mojang_API), [Roblox](https://users.roblox.com/docs) and more

<br />

# Guides

Basically my guide is just a simple explanation How to use an API and using its endpoints, but if you want to learn more
Visit

- [Axios NPM page](https://www.npmjs.com/package/axios)
- [Axios Docs](https://axios-http.com/docs/intro)

Happy coding!

*Posts poorly written by*
-IHZAQ
