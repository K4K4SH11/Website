---
id: groupbinds
title: Groupbinds
sidebar_label: Groupbinds
description: Groupbinds allow you to bind roblox groups to one or multiple discord roles
---

:::note Note
Run `!groupbinds` to see your current groupbinds.
:::

## Command Information

**Description**: Module to access groupbinds of a server.  
**Commands**: new, delete  
**Sub-Modules**: modify  
**Aliases**: gb  

## Arguments

| Arg | Description |   |
| --- | ----------- | - | 
| GroupID | ID of the Group | Required |
| Roles | Discord Roles. Must be mentioned. | Required |

__

## Adding Groupbinds

You can create a groupbind by using the `!groupbinds new` command.

### Syntax

```text
!groupbinds new GroupID @Role(s)
```
___

## Deleting Groupbinds

 You can delete a groupbind by using the `!groupbinds delete` command.

### Syntax

```text
!groupbinds delete GroupID
```

:::note Note
 You can also delete all rankbinds and groupbinds by running the `!setup` command again.
:::
