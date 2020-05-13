---
id: index
title: Rankbinds
sidebar_label: Introduction
description: You can create rankbinds to connect group ranks to discord roles
---

:::info
To see your current rankbinds, run `!rankbinds`
:::

## Arguments

| Arg | Description |   |
| --- | ----------- | - |
| GroupId | ID of the Group (https://www.roblox.com/groups/**000000**) | Required |
| RankID | ID of the Rank (0 - 255) | Required |
| Prefix | Prefix is the rank nickname part, for example '[E1]'. Use 'N/A' to use no prefix. | Required |
| Priority | Priority is the number which decides the nickname (prefix) if you have multiple rankbinds pertaining to you. | Required | 
| Roles | Discord Roles. Must be mentioned. | Optional |
___


## Adding Rankbinds

You can create rankbinds directly by running`!rankbinds new` command.

### Syntax

```text
!rankbinds new GroupID RankID Prefix Priority @Role(s)
```

If you are having problems with the format above you can also create rankbinds with instruction prompts by using the `!rankbinds create`command.

### Syntax

```text
!rankbinds create
```
___

## Deleting Rankbinds

You can delete a rankbind by using the `!rankbinds delete` command.

### Syntax

```text
!rankbinds delete GroupID RankID
```
___

### Note

:::info
 You can also delete all rankbinds and groupbinds by running the `!setup` command again.
:::
