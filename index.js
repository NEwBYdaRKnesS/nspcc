const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODM1OTg2NTA2MzA0NzE2ODYx.YIXbGg.AyWilTUhXID926J14KKey1QnRL0';

bot.on('ready', () =>{
    console.log('The NSPCC UK Discord Bot is now Online!');
})

bot.login(token);

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome");
    if(!channel) return;

    channel.send(`Welcome to the NSPCC UK Charity Discord Server, ${member}, Please read the rules, Many thanks the NSPCC Team!`);
});

bot.on("message", msg =>{
    if(msg.content === "ping"){
        msg.reply("pong");
    }
})

bot.on("message", msg =>{
    if(msg.content === "Hello"){
        msg.reply("Hi How are you!");
    }
})

bot.on("message",msg =>{
    if(msg.content === "Hiya"){
        msg.reply("Hiya!");
    }
})
