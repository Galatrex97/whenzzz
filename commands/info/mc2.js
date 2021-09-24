   const https = require("https");

const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "mc",
  aliases: [],
  usage: 'mc <ip>',
  category: 'Info',
  description: 'Obtiene la información de un server de minecraft',

run: (client, message, args) => {

       //check if there're arguments
        if(!args.length) {
            message.reply('Por favor especifica la ip de un server.');
            return;
        }
        //create new request
        const options = {
            hostname: 'api.mcsrvstat.us',
            port: 443,
            path: '/2/' + args[0],
            method: 'GET'
        }
        const request = https.request(options, response => {
            let str = '';
            response.on('data', data => {
                str += data;
            });
            response.on('end', () => {
                resp = JSON.parse(str);
                if(!resp.hostname) {
                    message.channel.send('No encontré un server con la ip ' + args[0]);
                    return;
                }
                //create answer message with default offline data
                let embed = {
                    color: 'WHITE',
                    title: args[0],
                    author: {
                        name: 'Minecraft info',
                        url: 'https://github.com/Jystro/Minecraft-info-bot'
                    },
                    thumbnail: {
                        url: 'https://api.mcsrvstat.us/icon/' + args[0]
                    },
                    fields: [{ name: 'Estado', value: 'Offline' }],
                    image: {
                        url: 'https://api.mcsrvstat.us/icon/' + args[0]
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'La información se actualiza cada 5 minutos'
                    }
                };
                //fill with data if it's online
                if(resp.online) {
                    embed.fields[0].value = 'Online';
                    embed.fields.push({
                        name: 'Motd',
                        value: (resp.motd) ? resp.motd.clean.join('\n') : 'Ninguno'
                    });
                    embed.fields.push({
                        name: 'Players online',
                        value: resp.players.online + '/' + resp.players.max
                    });
                    embed.fields.push({
                        name: 'Version',
                        value: (Array.isArray(resp.version)) ? resp.version[0] : resp.version
                    });
                    embed.fields.push({
                        name: 'Plugins',
                        value: (resp.plugins) ? resp.plugins.names.join(', ') : 'Ninguno'
                    });
                    embed.fields.push({
                        name: 'Mods',
                        value: (resp.mods) ? resp.mods.names.join(', ') : 'Ninguno'
                    });
                }
                //send answer
                message.channel.send({ embed: embed });
            });
        });
        //error handling
        request.on('error', err => {
            console.log(err);
            message.channel.send('Ha ocurrido un error intentado obtener la información del server.');
        })
        //close request
        request.end()
    }
}