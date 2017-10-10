const Discord = require('discord.js')
exports.run = (client, message,args) => {
  let content = message.content.split(' ')[1]
  let role = message.mentions.roles.first()
  
  role.setColor(content)
  .then(r => message.channel.send(`${role}'s color has been changed to ${content}`))
  .catch(console.error)


}
