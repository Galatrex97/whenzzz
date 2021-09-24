const Discord = require("discord.js");
const { Client, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const moment = require("moment");
 var play = require("google-play-scraper");
module.exports = {
  name: "play-store",
  aliases: ["playstore"],
  usage: 'play-store <app>',
  category: 'Info',
  description: '',

run: async(client, message, args) => {



    var busqueda = args.join(".")
    if(!busqueda){
        return message.reply({ content: "Que quieres buscar?"})
    }
    play.search({
        term: busqueda,
        num: 1
        }).then(aa =>{
    play.app({
			appId: aa[0].appId,
			lang: "es"
		}).then(async gg => {

const numb=gg.reviews;

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
}

var jaj = moment(gg.updated).locale("es").fromNow();


const row = new MessageActionRow().addComponents(
	new MessageButton()
	.setCustomId("asd")
	.setStyle("PRIMARY")
	.setLabel("Descripción completa"),
		new MessageButton()
	.setURL(gg.url)
	.setStyle("LINK")
	.setLabel("App URL"),
			new MessageButton()
	.setURL(gg.developerWebsite + "")
	.setStyle("LINK")
	.setLabel("Sitio web de "+gg.title)
)


        const embed = new Discord.MessageEmbed()
        .setColor("WHITE")
				.setTitle("Aplicación")
        .setThumbnail(gg.icon)
        .addField("Nombre",gg.title, true)
				.addField("Puntuación", `${gg.scoreText} ⭐`, true)
        .addField("Resumen",gg.summary, true)
        .addField("Reseñas", `${separator(numb)}`, true)
				.addField("Descargas",gg.installs, true)
        .addField("Precio",`${gg.priceText.replace("Free", "Gratis")}`, true)
        .addField("ID (Nombre del paquete)",gg.appId, true)
				.addField("Actualizado", gg.updated ? jaj : "No hay datos", true )
        .addField("Género", `${gg.genre}`, true)
				.addField("Creado el", gg.released ? `${gg.released} (${moment(new Date(gg.released.replace("abr", "apr").replace("ago", "aug").replace("ene", "jan").replace("dic", "dec"))).locale("es").fromNow()})`: "No hay datos", true)
				.addField("Descripción (recortada)", `${gg.description.split(".")[0].slice(0, 256)}.`)
        .addField("Creador","Nombre: "+gg.developer+"\n"+"Gmail: "+gg.developerEmail+"\n"+"Dirección: "+`${gg.developerAddress || "No hay datos"}`+ "\n" +"ID: "+gg.developerId)
        .addField("Novedades",`${gg.recentChanges ? gg.recentChanges.replace(/<br>/g, "\n").replace(/&quot;/g, `"`) : "No hay datos" }`)
        .setFooter("Encontré la aplicación")
        .setTimestamp()
let msg = await message.reply({embeds: [embed], components: [row]})

const desc = new MessageEmbed()
.setColor("WHITE")
.setTitle(`Descripcion completa de ${gg.title}`)
.setDescription(`${gg.description}`)
.setThumbnail(gg.icon)


const collector = msg.createMessageComponentCollector({
});

	collector.on("collect", (interaction) => {

interaction.deferUpdate();


		const id = interaction.customId;
		if(id === "asd") {
		interaction.user.send({embeds: [desc]})
			msg.channel.send(`${interaction.user} he enviado la descripción completa de la aplicación ${gg.title} a tu MD`)
		} 
	})



    }).catch(error => {
        message.reply("Ha ocurrido un error con la búsqueda: "+busqueda)
				console.log(error)
    })
}) 
 
 }

}
