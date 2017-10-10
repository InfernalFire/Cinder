const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let role = message.mentions.roles.first()
  let content = message.content.splice(' ')[2]
  
  .then(message.channel.send(`Role mentionability is ${content}`)
  .catch(console.error)


}
