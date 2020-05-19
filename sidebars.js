module.exports = {
  someSidebar: {
    "RoWifi": ["about", "changelog", "tiers"],
    "Commands": [
      "commands/verification", 
      "commands/setup",
      {
        type: 'category',
        label: 'Rankbinds',
        items: ['commands/rankbinds/index', 'commands/rankbinds/modify']
      },
      "commands/groupbinds",
      "commands/settings",
      {
        type: 'category',
        label: 'Blacklists',
        items: ['commands/blacklists/blacklists', 'commands/blacklists/custom']
      }
    ],
    "Premium Commands": [
      "premium-commands/premium",
      "premium-commands/custombinds",
      "premium-commands/customblacklists",
      "premium-commands/backups"
    ],
    "Miscellaneous": [
      "miscellaneous/logs",
      "miscellaneous/roles"
      ]
  },
};
