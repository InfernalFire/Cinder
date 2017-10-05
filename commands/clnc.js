const Discord = require('discord.js')
const config = require('../config.json')
exports.run = (client, message, args) => {
  if(message.author.id !== config.ownerID) return('Insufficient Permissions');
  if(!args) return message.reply('Please enter some arguments')
  let randomtag = message.guild
  let embed = new Discord.RichEmbed()
  
  .setAuthor('New Command')
  .addField('Command Tag', randomtag)
  .addField('Text', args)
}
