---
id: custombinds
title: Custom Binds
sidebar_label: Custom Binds
description: Commands to configure Custom Binds
---

:::note Note
Run `!custombinds` to see your current custombinds.
:::

## Command Information

**Description**: Module to access custombinds of a server.  
**Commands**: new, delete  
**Sub-Modules**: modify  
**Aliases**: cb  
**Tier**: Beta Tier
___

## Arguments

### Operators

| Types |
| :---: | 
| not |  
| and |  
| or |  

### Functions

| Name  | Description |
| :---- | :---- |
| HasRank\(GroupID, RankID\) | Checks if the user has a specific rank in a group |
| IsInGroup\(GroupID\) | Checks if the user is in the provided group |
| HasRole\(@Role\) | Checks if the user has a role in the server |
| WithString\("String"\) | Checks for String |

___

## Example

```text
HasRank(99214, 5) and WithString("Wifi") or HasRole(@Family) and not IsInGroup(930297)
```
