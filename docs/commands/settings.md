---
id: settings
title: Settings
sidebar_label: Settings
description: ‎Commands to configure the server settings.
---

:::note Information
Run `!settings` to see your current settings.
:::

## Bot Prefix
This setting allows you to change the prefix or command trigger of the bot.  
You can change the prefix of the bot by running the `!settings prefix` command.

### Syntax

```text
!settings prefix newPrefix
```
___

## Blacklist Action
This setting allows you to take actions against blacklisted users in your server.  
You can change the blacklist action by running the `!settings blacklist-action` command.  

| Option | Description |
|  ---   | ----        |
| None   | Default     |
| Kick   | Kicks blacklisted users from your server |
| Ban    | Bans blacklisted users from your server |

### Syntax

```text
!settings blacklist-action Option
```
___

## Bot Commands Usage

## Disable Bot Commands
This setting allows you to disable the usage of commands in the provided channel.  
You can disable the usage of bot commands by running the `!settings commands off` command in a specific channel.

### Syntax
```text
!settings commands off
```

## Enable Bot Commands
This setting allows you to enable the usage of commands in the provided channel again when they have been disabled.  
You can enable the usage of bot commands again by running the `!settings commands on` command in the channel.

### Syntax
```text
!settings commands on
```
___

## Update On Join
Enabling this setting will update users when they join the server.  
You can enable this setting by running `!settings update-on-join on` and disable this setting by running `!settings update-on-join off`.

### Syntax
```text
!settings update-on-join on/off
```
___

## Update On Verify
Enabling this setting will update users when they run the `!verify` command.  
You can enable this setting by running `!settings update-on-verify on` and disable this setting by running `!settings update-on-verify off`.

### Syntax 
```text
!settings update-on-verify on/off
```
___

## Setup Roles Modification

## Verification Role
This setting allows you to change the verification role after a setup.  
You can change the verification role by using the `!settings verification` command.

### Syntax
```text
!settings verification @Role
```

## Verified Role
This setting allows you to change the verified role after a setup.  
You can change the verified role by using the `!settings verified` command.

### Syntax
```text
!settings verified @Role
```