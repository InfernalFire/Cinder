const Discord = require('discord.js')
const config = require('../config.json')
  exports.run = (client, message, args) => {
  let online = 0x4ee075;
  let idle = 0xddc318;
  let dnd = 0xdd1717;
  if(args.length === 0) return m.channel.send("Please include something to set as your status as!");
if(message.content.includes("clear")) return client.user.setGame("online"), message.channel.send("Status has been cleared!");
client.user.setStatus(`${args}`);
  let embed = new Discord.RichEmbed()
  
  .setAuthor(message.guild, client.user.displayAvatarURL)
  .setDescription('**This command sets the status of the bot.**')
  .setFooter(`This message has been sent from the ${message.guild} server.`)
  .setColor(online < idle < dnd)
  .addField('Status', `I am now ${args}`)
  if(message.author.id !== config.ownerID) return;
  
  message.channel.send(embed)

}
