const Discord = require('discord.js')
const afk = require('../../models/afk')

module.exports = {
  name: 'afk',
  aliases: [],
  usage: 'afk',
  description: 'Comando AFK',
  category: 'Útil',

run: async(client, message, args) =>{


    let data;
    try {
      data =  await afk.findOne({
        userId: message.author.id,
        guildId: message.guild.id,
      })
      if(!data) {
        data =  await afk.create({
          userId: message.author.id,
          guildId: message.guild.id,
        })
      }
    } catch (e){
      console.log(e)
    }
    data.AFK_Reason = args.join(" ")
		data.timeAgo = Date.now();
    if (data.AFK_Reason) {
            message.channel.send(`${message.author} tu AFK se ha establecido a: **${data.AFK_Reason}**`)
    }
    if(!data.AFK_Reason) {
      message.channel.send(`${message.author} Ahora estás en AFK`)
    }
    data.AFK = true
    await data.save()
  }
}
