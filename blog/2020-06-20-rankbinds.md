---
id: rankbinds
title: Binding Roblox Ranks to Discord Roles
author: Gautam.A
author_title: Founder @ RoWifi
author_url: https://github.com/AsianIntel
tags: [rowifi, discord, roblox]
---

Hey everyone, it's almost been a month since the last blog post. In this post, I'm gonna be giving an overview on rankbinds. Let's get started right away.

## Motivation
Most of the bots I saw allowed only one binded group per server. My goal was to have no such restrictions and also allow users to select nicknames for different ranks. But the big question was how do you inform the bot which nickname to select when it has to choose between binds of two different groups? And how do you accomplish this level of customization without sacrificing simplicity?
<!--truncate-->
## Parameters
Instead of telling first how to create rankbinds, I felt it's more appropriate to give an overview of the parameters that make up rankbinds.

#### Group Id
Well this is self-explanatory. This is just the Id of your Roblox Group. There's not much to tell in here.
#### Rank Id
This is the Rank Id in your selected Roblox Group. You find it in Configure Group -> Roles. It is generally between 0 and 255.
#### Prefix
This is the keyword that is placed before your roblox username. For example, if the bot sets your nickname to "\[DEV\] Tensor", the prefix is \[DEV\]. While creating a rankbind, if you put the prefix as "auto", the bot will pick up the prefix from the ranks in your Roblox Group. The only limitation is it will only pick up the prefixes if they're enclosed in a []. You can also put the prefix as __**disable**__. **Note: If your prefix is multi word, enclose it in a ""**
#### Priority
This is the answer to the motivation. This is the parameter that decides which nickname to select. *This is only useful if you have rankbinds across two or more different groups*. This can be between 0 and 2^31-1. (I suggest you not try the higher numbers)
#### Discord Roles
This is also self-explanatory. This is the Discord Roles that you want the user to have if the rankbind applies to the user. You can ping them or put their id or put their name. The bot will identify it accordingly. While creating a rankbind, if you put this as auto, the bot will create those roles for you as well.

## Creating Rankbinds
Following are the different ways of creating rankbinds. Please bear in mind this is not an exhautsive list.
1. To make binds for every rank in the group: <br/>
```!rankbinds new GroupID 1-255 N/A 1 @Test```

2. To make binds for every rank in the group and automatically set the prefix: <br/>
```!rankbinds new GroupID 1-255 auto 1 @Test```

3. To make binds for every rank in the group and automatically set the prefix and make Discord roles for every rank <br/>
```!rankbinds new GroupID 1-255 auto 1 auto```

4. To make the bot to not go towards the Discord Nickname <br/>
```!rankbinds new GroupID 1 disable 1 @Test```

5. To make binds the manual way: <br/>
```!rankbinds new GroupID RankID prefix priority @Role(s)```

6. To make binds with an interactive prompt: <br/>
```!rankbinds create```