const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  let devlog = message.guild.channels.find('name', 'dev-log')
  let role = message.mentions.roles.first()
  let user = message.author
  if(!devlog) return message.reply('There is currently no **dev-log**!')
  if(!role) return message.reply('Please mention a role.')
  var embed = new Discord.RichEmbed()
  
  role.delete()
  
  .setAuthor(message.guild, client.user.displayAvatarURL)
  .setDescription(`${role} has been deleted by ${user}.`)
  .setFooter(`Message has been sent from ${message.guild}.`)
  .addField('Developer', message.author)
  .addField('Role', role)
  .addField('Server', message.guild)
  
  await message.channel.send(`${role} has been deleted by ${user}`)
  devlog.send(embed)
  user.send(embed)
}
