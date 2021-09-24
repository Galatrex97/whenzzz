const Discord = require("discord.js");
const Distube = require("distube");
const prefixSchema = require('../models/prefix');
const afkSchema = require('../models/afk');
const parentSchema = require("../models/parent");
const antilink = require("../models/antilinkbv");
const prefix = process.env.prefix;
const moment = require("moment");
module.exports.run = async (client, message) => {

  if (message.author.bot) return;
  if (message.channel.type === 'DM' && message.content.startsWith(prefix)) {
		 return message.reply("Los comandos en MD no están soportados aún.");
	} else if (message.channel.type === 'DM') {
		return;
	}

var sdlg = [":v", "#HailGrasa", "La grasa no muere, evoluciona...", "Viva la grasa", "En la grasa habian buenos momos :pensive:", "El shitposting es un pasatiempo, la grasa es un sentimiento."]

 var random = Math.floor(Math.random()*sdlg.length)

client.prefix = async function(message) {
  let custom;
  const data = await prefixSchema.findOne({ Guild: message.guild.id })
    .catch(err => console.log(err))

  if (data) {
    custom = data.Prefix;
  } else {
    custom = prefix;
  }
  return custom;
}


	let data2;
try {
  data2 = await afkSchema.findOne({
    userId: message.author.id,
    guildId: message.guild.id
  })
  if (!data2)
  data2 = await afkSchema.create({
    userId: message.author.id,
    guildId: message.guild.id
  })
} catch (error) {
  console.log(error)
}

let silence;
try {
	silence = await antilink.findOne({
		Guild: message.guild.id
	})
	if(!silence)
	silence = await antilink.create({
		Guild: message.guild.id
	})
} catch (err) {
	console.log(err)
}

function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if(regexp.test(str)) {
    return true;
  } else {
    return false;
  }
  
}

const embed = new Discord.MessageEmbed()
.setTitle("Antilink activado")
.setDescription('No puedes enviar links, el antilink está activado.')
.setFooter(`${client.user.username} antilink`, client.user.displayAvatarURL())
.setColor("WHITE")

if(silence.jaja === true && (is_url(message.content) === true) && message.member.permissions.has("ADMINISTRATOR")) {
	message.delete().then(m => m.channel.send({ embeds: [embed]}))
}

const a = moment(data2.timeAgo).locale('es').fromNow();
const reason = data2.AFK_Reason;

if(data2.AFK === true && data2.AFK_Reason) {
  data2.AFK_Reason = null
  data2.AFK = false
  message.channel.send(`Volviste ${message.author}, estuviste AFK **${a}** por **${reason}**`)
  await data2.save()
} else if(data2.AFK === true) {
	  data2.AFK_Reason = null
  data2.AFK = false
  message.channel.send(`Volviste ${message.author}, estuviste AFK **${a}**`)
  await data2.save()
}

if(message.mentions.members.first()) {

let data3;
try {
  data3 = await afkSchema.findOne({
    userId: message.mentions.members.first().id,
    guildId: message.guild.id,
  })
  if (!data3)
  data3 = await afkSchema.create({
    userId: message.mentions.members.first().id,
    guildId: message.guild.id
  })
} catch (error) {
  console.log(error)
}
if (message.author.bot) return;
  if (message.channel.type === 'DM' && message.content.startsWith(prefix)) {
		 return message.channel.send("Los comandos en MD no están soportados aún.");
	} else if (message.channel.type === 'DM') {
		return;
	}
if (data3.AFK === true) {
  if(data3.AFK_Reason) {
      message.channel.send(`${message.mentions.members.first().user} Está afk por: **${data3.AFK_Reason}** desde **${a}**`)
  }
  if (!data3.AFK_Reason) {
    message.channel.send(`${message.mentions.members.first().user} está afk desde **${a}**`)
  }
 
  data3.save()
}
}


const p = await client.prefix(message)

if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.reply(`Mi prefix es \`${p}\` si necesitas más ayuda utiliza \`${p}help\``);

 if(message.content === ":v")
 message.channel.send(sdlg[random]);

if(message.content === "gei")
message.channel.send(`<:waaa:866829623391813663>`)


if (message.content === (p)) return;
if (!message.content.startsWith(p)) return;
  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(p.length).trim().split(/ +/g);

const command = args.shift().toLowerCase();

const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
/* 
const topgg = require("@top-gg/sdk");

const Topgg = new topgg.Api(process.env.topgg);

const vote = await Topgg.hasVoted(message.author.id)

const Embed = new Discord.MessageEmbed()
.setTitle("Para desbloquear los comandos de esta categoria ayudame votando por mí.")
.setDescription(`Vota Aqui: [Link](https://top.gg/bot/849395994973700117/vote)`)
.setThumbnail(client.user.displayAvatarURL())
.setFooter("Gracias")
.setColor("WHITE")
 */
// if(cmd && message.author.id !== (process.env.botOwner) && cmd.category === 'NSFW' && !vote) return message.reply({embeds: [Embed]}) 

if(cmd && cmd.dev === true && message.author.id !== process.env.botOwner) return message.reply(`Ese comando está en "Reconstrucción" `)

try {
if(cmd){
  cmd.run(client, message, args, p)
}
} catch (e) {
   console.log(e);
}

client.prefix = async function(message) {
  let custom;
  const data = await prefixSchema.findOne({ Guild: message.guild.id })
    .catch(err => console.log(err))

  if (data) {
    custom = data.Prefix;
  } else {
    custom = prefix;
  }
  return custom;
}
if(!cmd){
/*   const dsnte = new Discord.MessageEmbed()
  .setTitle("Error 404")
  .setImage("https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif")
  .setDescription(`Ese comando **${command}** no existe`)
  .setColor("WHITE")
  .setFooter("Tomaremos esto como sugerencia, tal vez lo hagamos.")
  .setTimestamp()
  message.reply({ embeds: [dsnte] }) */
	return;
}
}
