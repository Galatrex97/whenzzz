const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["sv-info"],
  usage: 'serverinfo/sv-info',
  category: 'Info',
  description: 'Muestra la información del server',

run: async(client, message, args) => {

const owner = (await message.guild.fetchOwner()).user;
let server = message.guild;//definimos server

const nya = {   
  "NONE": "Ninguno, ez",
  "LOW": "Bajo",
  "MEDIUM": "Mediano",
  "HIGH": "Alto",
  "VERY_HIGH": "Tryhard"
};
const regions = {
    'en-US': 'English (United States)',
    'en-GB': 'English (Great Britain)',
    'zh-CN': 'Chinese (China)',
    'zh-TW': 'Chinese (Taiwan)',
    'pt-BR': 'Portuguese (Brazil)',
    'es-ES': 'Spanish (Spain)',
    'sv-SE': 'Swedish',
    cs: 'Czech',
    da: 'Danish',
    nl: 'Dutch',
    fr: 'French',
    de: 'German',
    el: 'Greek',
    hu: 'Hungarian',
    it: 'Italian',
    ja: 'Japanese',
    ko: 'Korean',
    no: 'Norwegian',
    pl: 'Polish',
    ru: 'Russian',
    tr: 'Turkish',
    bg: 'Bulgarian',
    uk: 'Ukrainian',
    fi: 'Finnish',
    hr: 'Croatian',
    ro: 'Romanian',
    lt: 'Lithuanian',
};
const embed = new Discord.MessageEmbed()
.setTitle("**Información del server**")
.setDescription("**Información actual del server**")
.setThumbnail(server.iconURL())
.setAuthor(server.name, server.iconURL())
.addField('**ID**', server.id, true)
.addField('**Fecha de creación**',`${server.joinedAt}`)
.addField("**Región:**", regions[message.guild.preferredLocale])
.addField("**Dueño del server:**",`${owner}`)
.addField("** ID del dueño :**",`${owner.id}`)
.addField(`**Canales**: ${server.channels.cache.size}ㅤㅤ`, `Categorias:  ${server.channels.cache.filter(x => x.type === "GUILD_CATEGORY").size}\nTexto: ${server.channels.cache.filter(x => x.type === "GUILD_TEXT").size} \nVoz: ${server.channels.cache.filter(x => x.type === "GUILD_VOICE").size}`, true)
.addField('**Miembros**', server.memberCount.toString(), true)
.addField("**Bots**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)
.addField('**Emojis**',`${message.guild.emojis.cache.size}`)
.addField('**Boosts**',message.guild.premiumSubscriptionCount.toString())
.addField('**Nivel de verificación**',`${nya[server.verificationLevel]}`)
.addField('**Roles**', `${server.roles.cache.size}`,true)
.setColor("WHITE")
message.reply({embeds: [embed]});
  
}
 
 }


 