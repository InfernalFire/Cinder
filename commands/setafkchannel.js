const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let channel = message.channel
  
  guild.setAFKChannel(channel)
 .then(updated => message.channel.send(`Updated guild AFK channel to ${guild.afkChannel}`))
 .catch(console.error);

}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "setafkchannel",
  description: "sets the new afk channel",
  usage: "setafkchannel"
}
