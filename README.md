# IGP Posts

## How to create a post

### Create an author file

Go to the `_authors/` directory and create a new JSON file, giving it the same name you have on Discord, i.e. `shaken-bird.json`

In the file, paste the following and change the name to a short username, preferably the same as your Discord username:
```
{
  "name": "shaken_bird"
}
```

### Create your post!

The next step is to create your post! Navigate to the `_posts/` directory and create a new MD file. Give it a short, relevant name, i.e. `hello-world.md`.

At the top of the file paste the following template and fill it in accordingly: 
```
---
title: "Short, relevant title here"
excerpt: "Short description of the post"
createdAt: "2023-MM-DD"
author: shaken-bird
---
```
*For the `createdAt` section, put the date you created the post at in the format `YYYY-MM-DD`*

*For the `author` section, put the username that you named the JSON file without the `.JSON`, not the name you put in the JSON file. For example, I named my author file `shaken-bird.json`, so I put `shaken-bird` as the author.*

Below that you can use regular markdown for your post. It seems complicated so let me know if you have any questions! When you're done just make a pull request and we'll review it.
- shakenbird
