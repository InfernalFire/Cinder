exports.run = (client, message, args) => {
  let text = args.slice(1).join(' ')
  if(!text) return message.reply('Please enter some text for me to repeat.')
  
  message.delete()
  message.channel.send(text)

}
