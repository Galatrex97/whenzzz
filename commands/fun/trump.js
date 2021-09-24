const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "trumptweet",
  aliases: ["trump"],
  usage: 'trumptweet <texto>',
  category: 'Fun',
  description: '',

run: (client, message, args) => {

if (!message.guild.me.permissions.has("ATTACH_FILES")) return message.channel.send("Yo no tengo permisos de `Enviar Imagenes`");

const texto = args.join(" ")
if(!texto) return message.channel.send("No has ingresado un texto")
// Si no ingresan nada

if(texto.length >= 80) return message.channel.send("Para evitar problemas el texto no puede superar los 80 caracteres")
// Si el texto supera los 80 caracteres retorna el mensaje

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${texto}&raw=1`, 'ttweet.png') //Creamos la imagen con la API de NekoBot

message.channel.send({files: [attachment]}).catch(err => {
// En caso de algun error
if (err == "TypeError [ERR_UNESCAPED_CHARACTERS]: Request path contains unescaped characters") {
return message.channel.send("El texto ingresado no puede contener EMOJIS.")
} else {
message.channel.send("Tengo este error, reportalo en nuestro discord oficial " + err.message)
}
// En caso de que en el texto haya emojis y la API te de este error retorna este mensaje

});

 }

}