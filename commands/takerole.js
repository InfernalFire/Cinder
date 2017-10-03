const Discord = require('discord.js')
exports.run = (client, messsage, args) => {
  let role = message.mentions.roles.first()
  let member = message.mentions.members.first()
  let user = message.mentions.members.first() || message.user
 

member.removeRole(role).catch(console.error)
}
