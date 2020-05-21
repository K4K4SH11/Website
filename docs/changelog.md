---
id: changelog
title: Changelog
sidebar_label: Changelog
description: Update Log of RoWifi
---

## Version 2.1.1

- Fixes: Help Command, Bad Command Parsing
- Added Permission Checks to `rankbinds new`
- Fixes: Response cancellation
- Added Command: `botinfo`
___

## Version 2.1.0

- Removed `rankbinds multiple`
- Removed `rankbinds auto`
- `rankbinds new` now accepts a Rank Range in the format of `MinRank-MaxRank`
- `rankbinds new` now accepts a Prefix parameter of auto to automatically pick the prefix
- `rankbinds new` now accepts a Roles parameter of auto to automatically create the role if necessary and bind it
- `rankbinds new` with a Rank Range will modify existing binds as well 
- `rankbinds new` now accepts a Prefix parameter of disable to do nothing to the user's nickname
- Add Functional Role `RoWifi Nickname Bypass`
- Reworked `settings`
- Added command `serverinfo`
___

## Version 2.0.9

- Fixes: Backup
___

## Version 2.0.8

- All Binds & Blacklists: `delete` now is aliased as `remove`
- Add Setting: Update On Join
- Add Command Check: Embed Links
- Add Setting: Update On Verify 
- Rework: Patreon API 
___

## Version 2.0.7

- Add Setting: Blacklist Action
- Change Signature of Channel Disabling
- Add Command: Set Blacklist Action
___

## Version 2.0.6

- Added Feature: Attempt to DM users if on the server blacklist
___

## Version 2.0.5

- Fixes: Blacklists Custom, Disabled Channels Removal
___

## Version 2.0.4

- Fixes: Blacklists, Disabled Channels, Metrics
___

## Version 2.0.3

- Fixes: Update, Settings, Premium
___

## Version 2.0.2

- Fixes: Blacklist Removal, Premium Redeem
___

## Version 2.0.1

- Fixes: Setup, Update, DIsabled Channels
___

## Version 2.0.0

- Blacklists now have 3 types:
   - Name: Based on the Roblox Username
   - Group: Based on the Roblox Group Id
   - Custom: Based on the same functions as that of custom binds
- New functions for custom binds:
   - HasRole: Simply checks if the person has a discord role. I have absolutely no idea why I added it
   - WithString: Checks if their roblox username has contains the keyword mentioned as a parameter of this function
- All commands now create a log in the logs channel
- Ability to change the bots prefix
- Added the modify module to groupbinds
- Added the modify module to custombinds
___

## Version 1.9

- Premium 
   - Introduced Beta Tier
   - Automation for Patrons
   - Moved Backupsbto Beta Tier
   - Added Premium redeem command
   - Added Custom Binds
      - Introduced `'HasRank'` function
      - Introduced `'not'` function
      - Introduced `'IsInGroup'` function
- Added blacklist feature
