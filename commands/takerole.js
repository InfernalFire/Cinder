const Discord = require('discord.js')
exports.run = (client, message, args) => {
  //Defines variables for roles, users, and modlog
  let admin = message.guild.roles.find('name', 'Admin') || message.guild.roles.find('name', 'admin') || message.guild.roles.find('name', 'administrator') || message.guild.roles.find('name', 'Administrator')
  let role = message.mentions.roles.first()
  let member = message.mentions.members.first() || message.member
  let user = message.mentions.users.first() message.author
  let modlog = message.guild.channels.find('name', 'mod-log')
  if(!modlog) return message.reply(`Please create a channel named 'mod-log'`)
  if(!role) return message.reply('Please include a role')
  
  if(message.member.roles.has(admin)) {
  member.addRole(role).catch(console.error)

  var embed = new Discord.RichEmbed()
    
  .setAuthor(message.guild, client.user.displayAvatarURL)
  .setDescription('Removes a role to a user.')
  .setFooter(`This message has been sent at ${message.guild}.`)
  .addField('Member:', member)
  .addField('Role:', role)
  
  message.channel.send(` ${user} has added the role to ${member}. `)
  modlog.send(embed)
  user.send(embed)
  }
}
