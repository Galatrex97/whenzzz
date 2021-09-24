const Discord = require('discord.js');
const ugu = require("../models/add")
const Canvas = require("canvas")
const { registerFont } = require("canvas")
registerFont('./font/ZenDots-Regular.ttf', { family: 'Zen Dots' })

var welcomeCanvas ={};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext("2d")
welcomeCanvas.context.font = '45px Zen Dots';
welcomeCanvas.context.fillStyle = '#FFFFFF';


Canvas.loadImage("./descarga.jpg").then(async (img) => {
	welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
	welcomeCanvas.context.fillText("Bienvenido/a ", 360, 360)
	welcomeCanvas.context.beginPath();
	welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true)
	welcomeCanvas.context.stroke()
	welcomeCanvas.context.fill()
})

module.exports.run = async (client, member) => {
	
  let nya = await ugu.findOne({ Guild: member.guild.id });
  if (!nya) return; 
  let Channel = member.guild.channels.cache.get(nya.Channel)
  if (!Channel) return;

let canvas = welcomeCanvas;

canvas.context.font = '42px Zen Dots',
canvas.context.textAlign = 'center';
canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
canvas.context.font = '32px Zen Dots'
canvas.context.fillText(`Eres el miembro número ${member.guild.memberCount}° `, 512, 455)
canvas.context.beginPath()
canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
canvas.context.closePath()
canvas.context.clip()

await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 1024 })).then(img => {
	canvas.context.drawImage(img, 385, 35, 250, 250)

let attachment = new Discord.MessageAttachment(canvas.create.toBuffer(), `NuevoMiembro.png`)



  
const avatar = member.user.displayAvatarURL();
const a = member.guild.iconURL();
const welcomembed = new Discord.MessageEmbed()
 .setTitle("¡Nuevo miembro!")
.setDescription(`El usuario ** ${member}** se ha unido al server y ahora somos ${member.guild.memberCount} personas!`)
.setThumbnail(`${avatar}`)
.setColor("WHITE")
.setImage("attachment://NuevoMiembro.png")
 .setTimestamp()
 .setFooter(`Gracias por unirte a nuestro server`, a)

Channel.send({embeds: [welcomembed], files: [attachment]})

})
}
