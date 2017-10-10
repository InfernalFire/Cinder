const Discord = require('discord.js')
exports.run = (client, message,args) => {
  let content = message.content.slice(' ')[2]
  let role = message.mentions.roles.first()
  
  role.setColor(content)
  .then(r => message.channel.send(`${role}'s color has been changed to ${content}`))
  .catch(console.error)


}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "setrolecolor",
  description: "sets the color of the role",
  usage: "setrolecolor <hexcolor>"
}
