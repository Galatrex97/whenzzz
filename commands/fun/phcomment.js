const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "phcomment",
  aliases: ["hubcomment"],
  usage: 'phcomment/hubcomment <args>',
  category: 'Fun',
  description: 'XDD',

run: (client, message, args) => {

let txt = args.join('%20');  //Argumentos
if((txt).includes("@")) return message.reply("Intenta no mencionar, esto puede provocar errores.")
if (!txt) return message.reply("Olvidaste colocar los argumentos.") //Si no hay argumentos...
	
let autor = message.author; //Definimos autor

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${autor.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`, "logo.png") //Pedimos la imagen


message.reply({files: [attachment]})	//La enviamos

}	//Fin del codigo :D
 
 }


