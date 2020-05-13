---
id: custombinds
title: Custom Binds
sidebar_label: Custom Binds
description: Commands to configure Custom Binds
---

## Information

Custom Binds is a type of bind allowing you to micro customize binds. These binds allow you to combine ranks and groups. There are three types of operators: "or", "and", "not". As of right now, we support four functions, HasRank\(GroupId, RankId\), IsInGroup\(GroupId\), HasRole\(@Role\) and WithString\("String"\).

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
| WithString\("String"\) | Checks for String |

## Example

```text
HasRank(3108077, 15) and not IsInGroup(231)
```
