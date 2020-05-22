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
      {
        type: 'category',
        label: 'Groupbinds',
        items: ['commands/groupbinds/groupbinds', 'commands/groupbinds/modify']
      },
      {
        type: 'category',
        label: 'Blacklists',
        items: ['commands/blacklists/blacklists', 'commands/blacklists/custom']
      },
      "commands/settings"
    ],
    "Premium Commands": [
      "premium-commands/premium",
      {
        type: 'category',
        label: 'Custombinds',
        items: ['premium-commands/custombinds/custombinds', 'premium-commands/custombinds/modify']
      },
      "premium-commands/backups"
    ],
    "Miscellaneous": [
      "miscellaneous/logs",
      "miscellaneous/roles"
      ]
  },
};
