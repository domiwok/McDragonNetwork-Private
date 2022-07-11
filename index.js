const Discord = require("discord.js");
const { Command } = require('discord.js-commando');
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
var weather = require('weather-js');
const superagent = require('superagent');
const randomPuppy = require('random-puppy');

const fs = require("fs");
const ms = require("ms")
const money = require("./money.json");
const { error } = require("console")
const { attachCookies } = require("superagent");
let botname = "McDragonNetwork"


bot.on("ready", async() => {
    console.log(`} 
 ██╗    ██╗██╗████████╗██╗  ██╗███████╗██████╗     ██████╗  ██████╗ 
 ██║    ██║██║╚══██╔══╝██║  ██║██╔════╝██╔══██╗   ██╔════╝ ██╔════╝ 
 ██║ █╗ ██║██║   ██║   ███████║█████╗  ██████╔╝   ██║  ███╗██║  ███╗
 ██║███╗██║██║   ██║   ██╔══██║██╔══╝  ██╔══██╗   ██║   ██║██║   ██║
 ╚███╔███╔╝██║   ██║   ██║  ██║███████╗██║  ██║██╗╚██████╔╝╚██████╔╝
  ╚══╝╚══╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ 
    `)



    let státuszok = [
        "Prefix: !",
        "IP: SOON...",
        "OWNERS: Domi_wok, IuseBenjii"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    const report_channel = "996156584629653644"
    const ticket_category_id = "981867381599125524"
    const ticket_role_id = "981867559135625259"
    const support_role_id = "981867423370211359"
    const mute_role = "983107976623718401"
    const viprang_id = "996156771414585434"
    const ownerid = ["980119581165240430"];
    const szavazás_channel = "996157727845928960" 



        if(cmd === `${prefix}subemelaradjo`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Teszt Embed!")
        .addField("subemelaradjo:", "szuebemelaradjo\n getamikanfjon\n ")
        .setThumbnail(message.author.displayAvatarURL())
        .setImage(message.guild.iconURL())
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(TesztEmbed)
    }


    if(cmd === `${prefix}subemelaradjo)`{
       message.reply('tataimalartol')
       message.reply('szuebemelaradjo')
       message.reply('getamikanfjon')
    }



    if(cmd === `${prefix}suggest`){
        let szavazás_channel = "981867119090221066" 
        const szavazás_ch = bot.channels.cache.get(szavazás_channel)

                if(args[0]){
                    let szavazas_embed = new Discord.MessageEmbed()
                    .setAuthor('Suggestion')
                    .setDescription(args.join("s"))
                    .setColor("RANDOM")
                    .setTimestamp(message.createdAt)
                    .setFooter(bot.user.username)
        
                    szavazás_ch.send(szavazas_embed).then(async msg => {
                    await msg.react(":white_check_mark:")
                    await msg.react(":x:") 
                    }) 
                } else {
                    message.reply("Enter the suggest!")
                }
             }
 
if(cmd === `${prefix}purge`){
    let deltedEmbed = `deleted: ${Math.round(args[0])} message`
    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){

            if(args[0] && isNaN(args[0]) && args[0] <= 100 || 0 < args[0] && args[0] < 101){

                message.channel.send(deltedEmbed)
                message.channel.bulkDelete(Math.round(args[0]))

            } else {
               message.reply(`Use: ${prefix}purge <1-100>`)
            }

        } else message.reply("hi")

    } else message.reply("You have no right to do that!")
}

if(cmd === `${prefix}report`){
    if(args[0] && message.mentions.members.first() && args[1]){
        
        message.channel.send("Your report has been sent successfully!")
                
        let report_embed = new Discord.MessageEmbed()
           .setAuthor( message.mentions.members.first().user.tag + ` | Use`)
           .setDescription("Report reason:" + args.join(" ").slice(args[0].length))
           .addField("Reported by:", message.author.tag)
           .setColor("RED")
           .setTimestamp(message.createdAt)
           .setFooter(bot.user.username)

           bot.channels.cache.get(report_channel).send(report_embed);

    } else {
        let he_embed = new Discord.MessageEmbed()
           .setAuthor(message.author.tag + `| Use`)
           .setDescription(`${prefix}report @<name> <reason>`)
           .setColor("RANDOM")
           .setTimestamp(message.createdAt)
           .setFooter(bot.user.username)

           message.channel.send(he_embed);

    }
 }



if(cmd === `${prefix}meme`){
    const subreddits = ["dankmeme", "meme", "me_irl"]
    const random = subreddits[Math.floor(Math.random() * subreddits.length)]

    const IMG = await randomPuppy(random)
    const MemeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(IMG)
    .setTitle(`search text: ${random} (CLICK HERE!)`)
    .setURL(`https://www.reddit.com/r/${random}`)

    message.channel.send(MemeEmbed)
}

if(cmd === `${prefix}cat`){
    let msg = await message.channel.send("*Cat Loading...*")

    let {body} = await superagent
    .get(`https://aws.random.cat/meow`)

    if(!{body}) return message.chanel.send("Failed to load file!")

    let catEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("**", "_")
    .setImage(body.file)
    .setTimestamp(message.createdAt)
    .setFooter(botname)

   msg.edit("",catEmbed);

}

if(cmd === `${prefix}help`){
    let help_embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setDescription(`**Prefix**: !\n\n**Ip**: **Soon...**\n**Commands**\n*Moderation*\n-Warn\n-Mute - unmute\n-Kick\n-Ban - unban\n-Purge\n*Economy*\n-work \n-pay \n-lb \n-shop\n-slot\n*Fun*\n-Cat\n-Meme\n*More*\n-Suggest\n-ticket\n-report`)
    .setTimestamp(message.createdAt)
    .setFooter(botname)

                message.channel.send(help_embed);
}



if(cmd === `${prefix}ticket`){

    let random_num = Math.floor(Math.random() * 9999)

    if(!message.member.roles.cache.has(ticket_role_id)){
        message.guild.channels.create(`ticket + ${random_num}`, {
            type: "text",
            parent: ticket_category_id,
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: message.author.id,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "ADD_REACTIONS"]
                },
                {
                    id: support_role_id,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "ADD_REACTIONS"]
                }
            ]
        }).then(async (channels) => {
            channels.send(`Hi! <@${message.author.id}>!!! The owner or some support arrives soon!...`)
        })

        message.member.roles.add(ticket_role_id);
    } else {
        message.reply("you alredy have a  ticketed!")
    } 
}

if(cmd === `${prefix}delte-ticket`){
    if(message.member.roles.cache.has(support_role_id) || message.member.hasPermission("BAN_MEMBERS") ){
        let ping_ember = message.mentions.members.first()
        let ping_channel = message.mentions.channels.first()


        if(args[0] && args[1] && ping_ember && ping_channel && ping_ember.roles.cache.has(ticket_role_id)) {

            ping_ember.roles.remove(ticket_role_id)
            ping_channel.delete()

        } else {
            message.reply(`Please mention a person who has a ticket! Proper use:${prefix}delte-ticket <@member> <channel>`)
        }
    } else {
        message.reply("You are not support!")
    }

}
    
    if(cmd === `${prefix}help-casino`){
    let hello_embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`CASINO: \n ${prefix}work \n ${prefix}pay \n ${prefix}lb \n ${prefix}shop \n ${prefix}slot`)
    .setTimestamp(message.createdAt)
    .setFooter(botname)

                message.channel.send(hello_embed);
}

////////////////////////////////////////////
////////////////////|| MODERATION||/////////////////////////
if(cmd === `${prefix}ban`){
    let ban_user = message.mentions.members.first();
    if(args[0] && ban_user){

        if(args[1]){

            let BanEmbed = new Discord.MessageEmbed()
            .setTitle("BAN")
            .setColor("RED")
            .setDescription(`**Banned** ${message.author.tag}\n**Has banned:** ${ban_user.user.tag}\n**Ban indoka:** ${args.slice(1).join(" ")}`)

        message.channel.send(BanEmbed);

            ban_user.ban({ reason: 'Rosszul viselkedett' })

        } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Proper use:")
        .addField(`\`${prefix}ban <@name> [reason]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("ERROR: Give me a reason!")

        message.channel.send(parancsEmbed);
        }

    } else {
        let parancsEmbed = new Discord.MessageEmbed()
        .setTitle("Proper use:")
        .addField(`\`${prefix}ban <@name> [reason]\``, "˘˘˘")
        .setColor("BLUE")
        .setDescription("ERROR:user not found!")

        message.channel.send(parancsEmbed);

    }
}


if(cmd === `${prefix}kick`){
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You have no right to that!")         
                let kick_user = message.mentions.members.first();
                if(args[0] && kick_user){
        
                    if(args[1]){
        
                        let KickEmbed = new Discord.MessageEmbed()
                        
                        .setDescription(`${kick_user.user.tag}Has ben kicked!`)
        
                    message.channel.send(KickEmbed);
        
                        kick_user.kick(args.slice(1).join(" "));
        
                    } else {
                    let parancsEmbed = new Discord.MessageEmbed()
                    .setTitle("Proper use:")
                    .addField(`\`${prefix}kick <@ name> [reason]\``, "˘˘˘")
                    .setColor("GREEN")
                    .setDescription("Give me a reason!")
        
                    message.channel.send(parancsEmbed);
                    }
        
                } else {
                    let parancsEmbed = new Discord.MessageEmbed()
                    .setTitle("Proper használat:")
                    .addField(`\`${prefix}kick <@ name> [reason]\``, "˘˘˘")
                    .setColor("GREEN")
                    .setDescription("ERROR:user not found!")
        
                    message.channel.send(parancsEmbed);
            }
        }

        if(cmd === `${prefix}mute`){
            if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))
            message.channel.send("You do not have permission to use this command!");
        else {
            const user = message.mentions.users.first();
            const member = message.guild.member(user);
        
            if(member) {
                if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR'))
                    message.channel.send("You have no right to silence him!");
                else {
                    let mutedRole = message.guild.roles.cache.get(mute_role); // ide Írd be a muted rangod idjét
                    if(mutedRole) {
                        member.roles.add(mutedRole);
                        message.channel.send("The user has been muted!");
                    }
                    else
                        message.channel.send("Mute rank not found.");
                }
            }
            else
                message.channel.send("User not found!");
            }
    }

    if(cmd === `${prefix}unmute`){
        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))
        message.channel.send("You do not have permission to use this command!");
    else {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
    
        if(member) {
            if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR'))
                message.channel.send("You have no right to silence her!");
            else {
                let mutedRole = message.guild.roles.cache.get(mute_role); // ide Írd be a muted rangod idjét
                if(mutedRole) {
                    member.roles.remove(mutedRole);
                    message.channel.send("I successfully played the user back!");
                }
                else
                    message.channel.send("Mute rank not found.");
            }
        }
        else
            message.channel.send("User not found!");
        }
}
    
    if(cmd === `${prefix}warn`){
    const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Ehhez nincs jogod!")
    if(!user) return message.reply('Proper use: !warn @<name> <reason>') 
    let reason = args.slice(1).join(' ') 
    if(!reason) reason = 'Not Specified' 

    let warnEmbed = new Discord.MessageEmbed()
    .setAuthor(`${user.user.username} Warned`, user.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor('RANDOM')
    .setDescription(`<@${user.id}> You have been warned for this reason: "**${reason}**"! By <@${message.author.id}>`)
    .setFooter(`${botname}`)
    message.channel.send(warnEmbed);
}

 ///////////////////|| CASINO ||/////////////////////////////////////


 if(!money[message.author.id]) {
    money[message.author.id] = {
        money: 100,
        user_id: message.author.id 

    };  
}
fs.writeFile("./money.json", JSON.stringify(money), (err) => {
    if(err) console.log(err);
});
let selfMoney = money[message.author.id].money;

if(cmd === `${prefix}money`){
    let profilkep = message.author.displayAvatarURL();

    let MoneyeEmbed = new Discord.MessageEmbed        ()
    .setAuthor(message.author.username)
    .setColor("RANDOM")
    .addField("egyenleg:", `${selfMoney}gg coin`)
    .setThumbnail(profilkep)
    .setFooter(botname)

    message.channel.send(MoneyeEmbed)
}


if(message.guild){
    let drop_money = Math.floor(Math.random()*80 + 1)
    let random_money = Math.floor(Math.random()*400 + 1)

    if(drop_money === 2     ){
        let üzenetek = ["you robbed a store "," you found so much money "," active or that's why you got so much money:"]
        let random_üzenet_szam = Math.floor(Math.random()*üzenetek.length)

        let DropMoneyEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .addField("you were lucky!", `${üzenetek[random_üzenet_szam]}that's why you got it: ${random_money}gg coin!`)
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL())

        message.channel.send(DropMoneyEmbed);

        money[message.author.id] = {
            money: selfMoney + 600,
            user_id: message.author.id
        }
    }

}

if(cmd === `${prefix}shop`){
    let ShopEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setDescription(`${prefix}buy-vip (PRICE: 2000 gg coin)`)
        .setColor("RANDOM")
        .setThumbnail(bot.user.displayAvatarURL())
        message.channel.send(ShopEmbed);

}


if(cmd === `${prefix}buy-vip`){

    let price = "2000";
    if(message.member.roles.cache.has(viprang_id)) return message.reply("*you have already taken that rank!*")
    if(selfMoney < price) return message.reply(`you have no money for this rank! Your balance: ${selfMoney}gg coin.`)

    money[message.author.id] = {
        money: selfMoney - parseInt(price),
        user_id: message.author.id
    }

    message.guild.member(message.author.id).roles.add(viprang_id);

    message.reply("**The purchase was successful! Have a nice day!**")

}

if(cmd === `${prefix}slot`){
    let min_money = 100
    if(selfMoney < min_money) return message.reply(`you have too little money! Minimum ${min_money}You have to be gg! your balance: ${selfMoney}.`)

    let tét = Math.round(args[0] *100)/100
    if(isNaN(tét)) return message.reply("please enter an amount!")
    if(tét > selfMoney) return message.reply("you cannot deposit more money than your balance!")

    let slots = ["🍔", "🍉", "🍇", "🍓", "🍒"]
    let result1 = Math.floor(Math.random() * slots.length)
    let result2 = Math.floor(Math.random() * slots.length)
    let result3 = Math.floor(Math.random() * slots.length)

    if(slots[result1] === slots[result2] && slots[result3]){
        let wEmbed = new Discord.MessageEmbed()
        .setTitle('🕹gambling | slot machine 🕹')
        .addField(message.author.username, `you won! your winnings: ${tét*1.6}gg coin`)
        .addField("result:", slots[result1] + slots[result2] + slots[result3])
        .setColor("RANDOM")
        .setTimestamp(message.createdAt)
        .setFooter(botname)
        message.channel.send(wEmbed)

        money[message.author.id] = {
            money: selfMoney + tét*1.6,
            user_id: message.author.id
        }
    } else {
        let wEmbed = new Discord.MessageEmbed()
        .setTitle('🕹 game of chance slot machine 🕹')
        .addField(message.author.username, `you lost! that's how much you fell: ${tét}gg coin`)
        .addField("result:", slots[result1] + slots[result2] + slots[result3])
        .setColor("RANDOM")
        .setTimestamp(message.createdAt)
        .setFooter(botname)
        message.channel.send(wEmbed)

        money[message.author.id] = {
            money: selfMoney - tét,
            user_id: message.author.id
        }
    }
}



if(cmd === `${prefix}lb`){
    let toplist = Object.entries(money)
    .map(v => `<@${v[1].user_id}> = ${v[1].money}gg coin`)
    .sort((a, b) => b.split("gg coin")[0] - a.split("gg coin")[0])
    .slice(0, 10)

    let LbEmbed = new Discord.MessageEmbed()
    .setTitle("top list")
    .setColor("RANDOM")
    .addField("money top list top 10", toplist, true )
    .setTimestamp(message.createdAt)
    .setFooter(botname)

    message.channel.send(LbEmbed)
}

if(cmd === `${prefix}pay`){
    let pay_money = Math.round(args[0]*100)/100
    if(isNaN(pay_money)) return message.reply(`*Correct use of the command: ${prefix}pay <amount> <name>*`)
    if(pay_money > selfMoney) return message.reply("you cannot enter more money than your balance!")

    let pay_user = message.mentions.members.first();

    if(args[1] && pay_user){
        if(!money[pay_user.id]){
            money[pay_user.id] = {
                money: 100,
                user_id: pay_user.id
            }
        }

        money[pay_user.id] = {
            money: money[pay_user.id].money + pay_money,
            user_id: pay_user.id
        }

        money[message.author.id] = {
            money:selfMoney - pay_money,
            user_id: message.author.id
        }

        message.channel.send(`The transaction was successful! your balance: ${selfMoney - pay_money}gg coin`)
        
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        });
    } else {
        message.reply(`*Correct use of the command: ${prefix}pay <amount> <name>*`)
    }
}



if(cmd === `${prefix}work`){
let cd_role_id = "981867135385092136";
let cooldown_time =  "5"; 

if(message.member.roles.cache.has(cd_role_id)) return message.reply(`this command can be use every ${cooldown_time}minute!`)

message.member.roles.add(cd_role_id)

let üzenetek = ["You did a good job!", "You got some wine!"]
let random_üzenet_szam = Math.floor(Math.random()*üzenetek.length)

let random_money = Math.floor(Math.random()*600 +1)

let workEmbed = new Discord.MessageEmbed()
.setTitle("Work")
.addField(`${üzenetek[random_üzenet_szam]}`, `It has been credited to your account: ${random_money}Comunity coin!`)
.setColor("RANDOM")
.setTimestamp(message.createdAt)
.setFooter(botname)
message.channel.send(workEmbed)

money[message.author.id] = {
    money:selfMoney + random_money,
    user_id: message.author.id
}

setTimeout(() => {
message.member.roles.remove(cd_role_id)
}, 60000 * cooldown_time)
}


fs.writeFile("./money.json", JSON.stringify(money), (err) => {
    if(err) console.log(err);
});







if(cmd === `${prefix}inv`){
      if (message.author.id == ownerid) {
        let guild = null;

        if (!args[0]) return message.channel.send(":x: Kérlek add meg a szerver nevét vagy ID-jét.")

        if(args[0]){
            let fetched = bot.guilds.cache.find(g => g.name === args.join(" "));
            let found = bot.guilds.cache.get(args[0]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.channel.send(":x_: Nem jó szerver nevet vagy ID-t adtál meg.");
        }
        if(guild){
            if (guild) {
            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send(":x_: Valami hiba történt, kérlek próbáld meg újra."); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send(`${err} has occured!`);
            });
            message.channel.send(invite.url);
        } else {
            return message.channel.send(`\`${args.join(' ')}\` - A bot nincs a szerveren.`);
        }
    } else {
        return;
    }
    
        }
}



})



fs.writeFile("./money.json", JSON.stringify(money), (err) => {
    if(err) console.log(err);
});
    








bot.login(process.env.BOT_TOKEN);
