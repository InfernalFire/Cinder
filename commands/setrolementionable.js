const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let role = message.mentions.roles.first()
  let content = message.content.slice(' ')[2]
  
  .then(message.channel.send(`Role mentionability is ${content}`)
  .catch(console.error)


}
exports.conf = {
  aliases: []
}
exports.help = {
  name: "setrolementionable",
  description: "enables/disables role mentionability",
  usage: "setrolementionable <true/false>"
}
