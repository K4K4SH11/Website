---
id: index
title: Rankbinds
sidebar_label: Introduction
description: You can create rankbinds to connect group ranks to discord roles
---

## Command Information

**Description**: Module to access rankbinds of a server.  
**Commands**: new, create, delete  
**Sub-Modules**: modify  
**Aliases**: rb  

:::note Note
Run `!rankbinds` to see your current rankbinds.
:::
---

## Arguments

**GroupID**: Required

| Arg | Description | Example |
| --- |     ---     |  ---    |
| ID  | ID of the Group, can be found in the groups link. | 8200138 |

**RankID**: Required

| Arg | Description | Example |
| --- |     ---     |  ---    |
| ID  | One Rank ID | 30 |
|     | Multiple, Min - Max | 1 - 30

**Prefix**: Required

| Arg | Description | Example |
| --- |     ---     |   ---   |
| Prefix | Custom prefix, use " " for multiple words prefix | [E1] or "Lt. Gen" |
| N/A  | Use to have no prefix | N/A |
| auto  | Automatically creates pretix for ranks if the rank name contains [] | auto |
| disable | Disables complete nicknaming | disable |

**Priority**: Required

| Arg | Description | Example |
| --- |     ---     |   ---   |
| Number | Priority is the number which decides the nickname (prefix) if you have multiple rankbinds pertaining to you. | 1 |

**Roles**: Optional

| Arg | Description | Example |
| --- |     ---     |  ---    |
| Role | Discord Role(s), must be mentioned | @Enlisted |
| auto | Automatically creates the role for the rankbinds based on the rank name | auto |
---

## Adding Rankbinds

You can create rankbinds directly by running`!rankbinds new` command.

### Syntax

```text
!rankbinds new GroupID RankID Prefix Priority @Role(s)
```
## Example
![alt text](https://cdn.discordapp.com/attachments/714455573701328958/714463741739270174/unknown.png "New Rankbind")

If you are having problems with the format above you can also create rankbinds with instruction prompts by using the `!rankbinds create` command.

### Syntax

```text
!rankbinds create
```
___

## Deleting Rankbinds

You can delete a rankbind by using the `!rankbinds delete` command.

:::note Info
 You can also delete all rankbinds and groupbinds by running the `!setup` command again.
:::

### Syntax
```text
!rankbinds delete GroupID RankID
```

## Example
![alt text](https://cdn.discordapp.com/attachments/714455647135072339/714463619102015518/unknown.png "Delete Rankbind")
