---
id: customblacklists
title: Custom Blacklists
sidebar_label: Custom Blacklists
description: Commands to configure Custom Blacklists
---

## Information

Custom Blacklist is a type of blacklist allowing you to micro customize blacklists.

## Operators

| Types |
| :---: | 
| not |  
| and |  
| or |  

## Functions

| Name  | Description |
| :---- | :---- |
| HasRank\(GroupID, RankID\) | Checks if the user has a specific rank in a group |
| IsInGroup\(GroupID\) | Checks if the user is in the provided group |
| HasRole\(@Role\) | Checks if the user has a role in the server |
| WithString\("String"\) | String |

## Example

```text
!blacklists custom IsInGroup(231) and not HasRank(231, 255)
```
