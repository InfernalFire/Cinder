const Discord = require('discord.js')
exports.run = (client, message, args) => {

    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
}
