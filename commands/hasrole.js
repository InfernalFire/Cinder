exports.run = (client, message, args) => {
// This is the code to start a command
  let role = message.mentions.roles.first()
// This detects if the role is mentioned
  let membersWithRole = message.guild.roles.get(role).members;
// This detects the amount of members with the role  
  
  console.log(`There are ${membersWithRole} members with ${role}.`)
// Sends a console line with the message
  message.channel.send(`There are ${membersWithRole} members with ${role}.`)
// Sends a message in the channel
}
