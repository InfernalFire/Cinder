const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let channel = message.channel
  
  guild.setAFKChannel(channel)
 .then(updated => message.channel.send(`Updated guild AFK channel to ${guild.afkChannel}`))
 .catch(console.error);


}
