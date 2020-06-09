---
id: groupbinds
title: Groupbinds
sidebar_label: Groupbinds
description: Groupbinds allow you to bind roblox groups to one or multiple discord roles
---

## Command Information

**Description**: Module to access groupbinds of a server.  
**Commands**: new, delete  
**Sub-Modules**: modify  
**Aliases**: gb  

:::note Note
Run `!groupbinds` to see your current groupbinds.
:::
---

## Arguments

| Arg | Description |   |
| --- | ----------- | - | 
| GroupID | ID of the Group | Required |
| Roles | Discord Roles. Must be mentioned. | Required |
---

## Adding Groupbinds
You can create a groupbind by using the `!groupbinds new` command.

### Syntax
```text
!groupbinds new GroupID @Role(s)
```

## Example
![alt text](https://cdn.discordapp.com/attachments/714455339302518805/714460819038928936/unknown.png "New Groupbind")

---

## Deleting Groupbinds
 You can delete a groupbind by using the `!groupbinds delete` command.

:::note Note
 You can also delete all rankbinds and groupbinds by running the `!setup` command again.
:::

### Syntax
```text
!groupbinds delete GroupID
```
## Example
![alt text](https://cdn.discordapp.com/attachments/714455754144219207/714461138342903808/unknown.png "Delete Groupbind")
