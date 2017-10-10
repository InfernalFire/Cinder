const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let user = message.mentions.users.first()
  let embed = new Discord.RichEmbed()
  
  .setAuthor(user.username, user.displayAvatarURL)
  .addFIeld('Connections', user.connections)
  .addField('Mutual Guilds', user.mutualGuilds)
  .addField('Discord Nitro', user.premium)
  .addField('Premium Since', user.premiumSince)


}
