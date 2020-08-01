const Discord = require('discord.js');
const client = new Discord.Client();

const gameWidth = 16
const gameHeight = 9

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  msg = msg.toLowerCase();
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  
  
  
});



client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
