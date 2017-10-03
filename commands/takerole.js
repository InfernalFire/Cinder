const Discord = require('discord.js')
exports.run = (client, messsage, args) => {
  let role = message.mentions.roles.first()
  let member = message.mentions.members.first()
  let user = message.mentions.members.first()
  var embed = new Discord.RichEmbed()
  
  .setAuthor(message.guild, client.user.displayAvatarURL)
  .setDescription('Takes a role from a user')
  .setFooter(`This message has been sent from ${message.guild}.`)
  .addField('Member:', member)
  .addField('Role', role)
 

member.removeRole(role).catch(console.error)
}
