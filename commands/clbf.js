const Discord = require('discord.js')
const config = require('../config.json')
exports.run = (client, message, args) => {
  let dev = message.guild.members.get(config.ownerID);
  if(!dev) return message.reply('Insufficient Permissions')
  if(!args) return message.reply('Please enter some valid arguments.')
  let randomtag = message.guild
  let embed = new Discord.RichEmbed()
  
  .setAuthor('Bug Fixes')
  .addField('Bug Fix Tag', randomtag)
  .addField('Text', args)
}
