---
title: "How to use MongoDB for your Discord bot!"
excerpt: "This post compiles tips from LonelyBall into a single page on how to use MongoDB for your bot."
createdAt: "2023-02-28"
author: lonelyBall
---

### Possibilities

Ever wanted to make a leveling system for your bot but don't know how? Ever wondered if it's possible to make a card trading game inside your bot? Well, wonder no more! I am here to introduce MongoDB to you!

## What is MongoDB?

MongoDB is the developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand. It has 37K+ customers and is the 1# most used modern database. A bunch of developers use and trust Mongo for their projects.

## How to use

Mongo is very easy to start using.

 1. Sign-Up. you would first need to make an account for Mongo. It's very easy, you can use your Gmail or your GitHub.
 2. Create a project. After you would need to create a project, give it a unique name. Add Members and Set Permissions(optional), press on create project.
 3. Build a database. Choose what type of db you want. Honestly, choose free it works as well, but you do you, I'm too poor to afford any :(. After choosing press create. 
 4. Create a user. A user is basically a member that can access the db, and make a secure password. copy your password
 5. Add an IP. I'm not sure what to say here.
 6. You have your DB! Now we have to connect
 7. Press connect on your db(Cluster). Connect using MongoDB Compass skip everything and just get that *funny text* in step two it should look like this `mongodb+srv://<your-user>:<password>@cluster0.7fozs01.mongodb.net/test`,
 8. Edit the mongo connection string(the funny text), paste your password in `<pasword>` it should look like this `mongodb+srv://FunnyUser:SuperCoolPassword@cluster0.7fozs01.mongodb.net/test`,
 9. Paste connection string(the funny text) into replit or your host. I recommend using secrets or the .env stuff.
 10. Install mongoose https://www.npmjs.com/package/mongoose and require it inside `index.js`
 11. Connect to MongoDB `mongoose.connect('your_connection_string').then(() => console.log('Connected!'));`
 12. Create a new folder named `models`
 13. You're done! If you want to start using the DB for cmds then look in the tutorial below

## Favorite Words Command
 
 1. Add a new js file named `favWords.js` inside the `models` folder.
 2. Add a model. The code is below.
 3. Go to index.js and write a new command called `add-word`. if you have a handler then create a new cmd called `add-word`, 
 4. We're gonna access the data but since we don't have any we are gonna create one.
 5. Add a favorite word! Since in the modal, we set an array we are gonna push a string.
 6. Access the words. For this, we are gonna use .join("/n") my beloved. We are creating a new command named `my-words` and we are gonna access the data and join it.
 7. You're done!

### Code for step 2
 ```
 const mongoose = require("mongoose");
const favwords = mongoose.Schema({
  guild: {
    type: String,
    required: true,
  },
  words: Array
});

module.exports = mongoose.model("favwords", favwords);
```

### Code for step 3
inside index.js
 ```
 const schema = require("./models/favWords");
 
if (message.content.toLowerCase() === "add-word"){
}
```

### Code for step 4

```
if (message.content.toLowerCase() === "add-word"){
 let data = await schema.findOne({
     guild: message.guild.id,
});

if(!data){
  await schema.create({ guild: message.guild.id });
  return message.reply(`Created DB`);
}else{
//code
}
```

### Code for step 5

```
if (message.content.toLowerCase() === "add-word"){
//add args if you want.
 let data = await schema.findOne({
     guild: message.guild.id,
});

if(!data){
  await schema.create({ guild: message.guild.id });
  return message.reply(`Created DB`);
}else{
 data.words.push(`My-word-or-args`)
 data.save();
 return message.reply(`Added ${My-word-or-args} to DB`);
}
```

### Code for step 6

```
if (message.content.toLowerCase() === "my-words"){
 let data = await schema.findOne({
     guild: message.guild.id,
});

if(!data)return message.reply(`You have no words`);

 let words = data.words.join("/n")
 return message.reply(words);
}
```

## Afterword
This is one basic thing you can get in more depth by looking at the mongoose docs https://mongoosejs.com/docs/api/mongoose.html. In the future, you'll be able to make amazing things through mongoDB.
I forgot to mention you can look at the raw data through your mongo cluster, just press the browse collections button.

Thank you for taking the time to read. If there are any errors please make sure to reach out to me through Discord.
– LonelyBall
