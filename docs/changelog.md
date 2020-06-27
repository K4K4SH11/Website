---
id: changelog
title: Changelog
sidebar_label: Changelog
description: Updatelog of RoWifi
---

## Version 2.3.2
- Fix reduplicating of backups
- Add `!update-role @Role`
- Implement !backups
- Missing permission check on bind viewing 
- Preemptive user role position check
- Preemptive `@everyone` check in binding
- Optimize updating
---

## Version 2.3.1
- Add premium info to userinfo
- Fix Mention Prefix
- Attempted Rebalancing of Roblox Requests
---

## Version 2.3.0
- Fixed permissions for viewing binds
- Added Game Verification Option
- Added 6 hrs cache to Roblox Usernames
---

## Version 2.2.1
- Added premium command
- rankbinds modify will direct to help
- Fixed the settings prefix command
- update command optimizations
- HasRank function improvements
- Doing help on an unknown command will no longer error
- User cache improvements
- Fixed the help command for rankbinds new
---

## Version 2.2.0

- Code Refactor
- Fixes: Help Command
- Added Website to Support
- Typos at ton of places
- Fixes: Custom Binds
---

## Version 2.1.1

- Fixes: Help Command, Bad Command Parsing
- Added Permission Checks to `rankbinds new`
- Fixes: Response cancellation
- Added Command: `botinfo`
---

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
---

## Version 2.0.9

- Fixes: Backup
---

## Version 2.0.8

- All Binds & Blacklists: `delete` now is aliased as `remove`
- Add Setting: Update On Join
- Add Command Check: Embed Links
- Add Setting: Update On Verify 
- Rework: Patreon API 
---

## Version 2.0.7

- Add Setting: Blacklist Action
- Change Signature of Channel Disabling
- Add Command: Set Blacklist Action
---

## Version 2.0.6

- Added Feature: Attempt to DM users if on the server blacklist
---

## Version 2.0.5

- Fixes: Blacklists Custom, Disabled Channels Removal
---

## Version 2.0.4

- Fixes: Blacklists, Disabled Channels, Metrics
---

## Version 2.0.3

- Fixes: Update, Settings, Premium
---

## Version 2.0.2

- Fixes: Blacklist Removal, Premium Redeem
---

## Version 2.0.1

- Fixes: Setup, Update, DIsabled Channels
---

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
---

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
