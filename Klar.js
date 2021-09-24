const Distube = require('distube');
const Monitor = require('ping-monitor');
const { Router } = require("express")
const { Collection, Client, Intents} = require('discord.js');
module.exports = class Klar extends Client {
    constructor() {
    super({ intents: 32767, partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'] })

				
        this.distube = new Client({ intents: 32767 });
        this.commands = new Collection();
        this.aliases = new Collection();
				this.slashCommands = new Collection();
        this.snipes = new Map();
    };


    setup() {
        require('./cdistube')(this)
        require('./handlers/command')(this)
        require('./handlers/events')(this)
				require("./routes/index")(this)
				require('./monitor')(this)
				require('./handlers/monitorxd')(this)
				require('./handlers/slashcmds')(this)
        require('./handlers/distube')(this)
        this.login(process.env.token);  
    };
}