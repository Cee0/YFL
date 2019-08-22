const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NjE0MjQwMDg3OTQwNjYxMjQ4.XV8lyA.0gv8D9-gOL_2IaOQksd0jz-RG4k);
