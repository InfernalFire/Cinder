const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let role = message.mentions.roles.first()
  let content = message.content.slice(' ')[2]
  
  .then(message.channel.send(`Role mentionability is ${content}`)
  .catch(console.error)


}
