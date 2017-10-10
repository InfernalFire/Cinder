const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let role = message.mentions.roles.first()
  let content = message.content.slice(' ')[1]

  role.setHoist(content)
  // content must be true or false
  .then(message.channel.send(`Role hoist has been set to ${content}.`))
  .catch(console.error)

}
