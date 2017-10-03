const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let role = message.mentions.roles.first()
  
  let member = message.mentions.members.first()
  let user = message.mentions.users.first()
  
  
  member.addRole(role).catch(console.error)
  
}
