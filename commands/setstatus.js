const Discord = require('discord.js')
const config = require('../config.json')
  exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
  
  .setAuthor(message.guild, client.user.displayAvatarURL)
  .setDescription('**This command sets the status of the bot.**')
  .setFooter(`This message has been sent from the ${message.guild} server.`)
  .setColor('#f00000')
  .addField('')
  if(message.author.id !== config.ownerID) return;
  
  message.channel.send(embed)

}
