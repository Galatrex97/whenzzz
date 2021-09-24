const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "real-pussy",
  aliases: ["rpussy"],
  usage: 'real-pussy',
  category: 'NSFW',
  description: 'nya',

run: async(client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")
  
const image = await nsfw.pussy();
const embed = new Discord.MessageEmbed()
    .setDescription(`Koya afk`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send({embeds: [embed]});

 
 }

}