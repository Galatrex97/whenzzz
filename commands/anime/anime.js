const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const Scraper = require('mal-scraper')

module.exports = {
  name: "anime",
  aliases: [],
  usage: 'anime <Anime a buscar>',
  category: 'Anime',
  description: 'Busca un anime a partir de lo que escribe el user.',

run: async(client, message, args) => {

  let Text = args.join(" ");

  if(!Text) return message.reply(`<a:noputo:868687565304246283> |**Debes escribir el nombre del anime.**`); //Por si no hay nombre esto lanza.

  if(Text.length > 200) return message.reply(`<a:noputo:868687565304246283> | **El limete de texto es de 200**`); //limite de texto

  let Msg = await message.reply(`<a:see:868645120289943552> | **Buscando..**`); //tiempo de busqueda

  let Replaced = Text.replace(/ /g, " ");

  let Anime; //definimos el anime

  let Embed; //Definimos el embed

  try {

    Anime = await Scraper.getInfoFromName(Replaced); //Información del anime cómo descripción.

    if(!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";

    Embed = new MessageEmbed() //ponemos el embed anterior.

    .setColor("WHITE") //color del embed
    .setURL(Anime.url) //URL Del anime.
    .setTitle(Anime.title) //un contexto en el anime
    .setDescription(Anime.synopsis) //Escrito por
    .addField(`Tipo`, Anime.type, true) //tipo de plataforma que se mira el anime
    .addField(`Estreno`, Anime.status, true) //dice si esta transmitiendo capitulos o no
    .addField(`Episodios`, Anime.episodes, true) //cuentos episodios tiene el anime.
    .addField(`Duración`, Anime.duration, true) //duración del anime
    .addField(`Popularidad`, Anime.popularity, true) //popularidad del anime o entre lugar que esta 
    .addField(`Generos`, Anime.genres.join(", ")) //tipo de anime del anime ejemplo comedia o romantico
    .setThumbnail(Anime.picture) //foto de portada del anime 
    .setFooter(`Puntaje - ${Anime.score}`) //puntaje del anime
    .setTimestamp()

  } catch (error) { //abrimos y cerramos el evento
    console.log(error)
    return message.reply(`¡No se ha encontrado el anime! :c`)
  };

  return message.reply({embeds: [Embed]}); //enviamos el mensaje
}
}