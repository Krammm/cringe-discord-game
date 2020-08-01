const Discord = require('discord.js');
// boh
const client = new Discord.Client();
const prefix = '!';
client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.author.id === client.user.id) { return; }

    if (message.isMemberMentioned(client.user)) {

    }

    command = message.content.toLowerCase()

    if (command.startsWith(prefix)) { 
        var line = command;
        line = line.substring(1);
        var args = message.content.trim().split(/ +/g);
        command = args[0];
        command = command.substring(1);
        var user = message.mentions.members.first();

        switch (command) {
            case 'removerole':
                try {
                    user.removeRole(role);
                    message.channel.send('Ho tolto ' + user + " dal ruolo " + role + ".");
                } catch (error) {
                    console.log(error);
                    message.channel.send("Sono troppo insicura per farlo...");
                    message.channel.send("ah, è ho anche riscontrato un errore");
                    //message.channel.send("@Krammm , @NinjaSbrillo non sapete neanche programmarmi")
                }
                break;
            case 'clear':
                
                break;
            default:
                message.channel.send("Command: " + command + " Line: " + line);
                break;
        }
    }





 

});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
