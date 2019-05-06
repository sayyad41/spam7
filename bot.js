const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("575091435443978253")
setInterval(function() {
channel.send(`Credittttt`);
}, 30)
})

client.login(process.env.BOT_TOKEN);