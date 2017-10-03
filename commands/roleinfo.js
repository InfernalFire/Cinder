const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let member = message.member
  let user = message.member.users.first()
  let role = message.mentions.roles.first()
  let embed = new Discord.RichEmbed()
}
