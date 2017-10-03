const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let role = message.mentions.roles.first()
  let membersWithROle = message.guild.roles.get(role).members
  
  message.channel.send(`Got ${membersWithRole.size} members with that role.`)
}
