const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const r34 = new (require('r34api.js'))
module.exports = {
  name: "rule34",
  aliases: ["r34"],
  usage: 'rule34 <tags>',
	dev: false,
  category: 'NSFW',
  description: 'Busca algo en la rule',

run: (client, message, args) => {

const booru = require("booru")

if(!message.channel.nsfw) return message.reply("Este canal no es NSFW, abstienete de usar esos comandos aqui")
const tags = args.join("_") //los tags que buscaremos
if(!tags) return message.reply("Escribe algo a buscar en la r34")
booru.search('rule34', [tags], { limit: 1, random: true })//el primero es para buscar en la rule 34, luego se busca con los tags, luego agarramos una sola imagen y que sea una imagen aleatoria
.then(posts => {//el json como toda la informacion
for(let post of posts) {//luego la parte post de posts
const embed = new Discord.MessageEmbed()//creamos el embed
.setColor("WHITE")
.setTitle(`Resultado de la busqueda: ${tags}`)
.setImage(post.fileUrl)//fileUrl es el URL directo de la imagen
message.channel.send({ embeds: [embed] }) //mandamos el embed
 }
 }).catch(e => message.reply("error "+e))//un catch por si da error

 }

}