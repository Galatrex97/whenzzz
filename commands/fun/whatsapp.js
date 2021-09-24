const Discord = require('discord.js')
const { createCanvas, loadImage } = require('canvas')

module.exports = {
  name: "whatsapp",
  aliases: ["wa"],
  usage: '',
  category: 'Fun',
  description: 'wasaaaa',

  run: async (client, message, args, p) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    const avatar = await loadImage(
      user.displayAvatarURL({ format: "png" })
    );
    const canvas = createCanvas(800, 800);
    const ctx = canvas.getContext("2d");
    const background = await loadImage(
      "https://cdn.discordapp.com/attachments/788657156428660757/836802519639392296/PicsArt_04-27-09.59.41.png"
    );
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      `${user.username}_whatsapp.png`
    );

    message.channel.send({files: [attachment]});
  }
}