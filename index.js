const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = "!"
var nazwabota = "Free PSC | Bot"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${nazwabota} jest online`)
});


bot.on("message", async message => {
    if (message.author.bot) return

    if (message.content.indexOf(prefix) !== 0) return
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

if(command == "say"){
    message.delete()

    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
    else
    return message.channel.send("Nie posiadasz permisji!")
}


if(command == "info"){
    var embed = new Discord.MessageEmbed()
    .setTitle("Infoasddsaasdcie")
    .setDescription("- Weasdadasdasdasdasdasdasdadata: 1.0")
    .setColor(`#3c00b9`)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    

    message.channel.send(embed)
    message.delete()
}

})



bot.login(botconfig.token)