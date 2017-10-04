const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let role = message.mentions.roles.first()
  let member = message.mentions.members.first() || message.member
  let user = message.mentions.users.first()
  let modlog = message.guild.channels.find('name', 'mod-log')
  if(!modlog) return message.reply(`Please create a channel named 'mod-log'`)
  if(!role) return message.reply('Please include a role')
  var embed = new Discord.RichEmbed()
  
  .setAuthor(message.guild, client.user.displayAvatarURL)
  .setDescription('Adds a role to a user.')
  .setFooter(`This message has been sent at ${message.guild}.`)
  .addField('Member:', member)
  .addField('Role:', role)
  
  member.addRole(role).catch(console.error)
  message.channel.send(` ${user} has added the role to ${member}. `)
  modlog.send(embed)
  user.send(embed)
}
