const {MessageEmbed} = require ('discord.js') 
translate = require("@iamtraction/google-translate");//requerimos la API que necesitaremos...

module.exports = {
  name: 'translate',
  aliases: [],
  category: 'Útil',
  description: 'Traduce',
  usage: '',

  run: async(client, message, args) => {

const idioma = args[0];//Establecemos el argumento 0 como el idioma al que se traducira
const texto = args.slice(1).join(' ');//A partir del argumento 1 tomara el texto a traducir 
        
        if(!idioma){//Si no escribio el idioma de la manera correcta 
            return message.channel.send('Especifica el idioma a traducir del texto')
        }
        if(!texto) {//Si solamente escribio el idioma pero no el texto...
            return message.channel.send('Y el texto que quieres traducir?')
        }
        
      
        translate(texto , { to: idioma }).then(res => {//Hacemos la función de la API que es la traducirá el texto al idioma que se especifico
            let embed = new MessageEmbed()//Me gusta usar embeds xd
            .setTitle('Traductor')
            .addField('Texto a traducir:', texto)
            .addField('Traducción:', res.text)
            .setColor('WHITE')//Un console log por si las dudas
            message.channel.send({embeds: [embed]})//Se envia el embed
          }).catch(err => {
            console.error(err);//En caso de haber un error en este caso seria introducir mal el lenguaje al que se traducirá 
          });
//Nota: el idioma a traducir tiene que ser escrito en ingles, como spanish, japanese, english, etc...
  }
}
