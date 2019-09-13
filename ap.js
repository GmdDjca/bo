const Discord = require("discord.js");
const Client = require('discord.js');

const bo = new Discord.Client();//t.
const co = require("./co.json");

const ow = bo.users.get(co.ow);//ne

var re = /[^\w.,+:`´'"?!<>*()[]{}]+/gi


var ch = require('./ch.json')
bo.on("ready", () => {
    bo.user.setActivity("t!")
    console.log('Re')
})

bo.on("messageUpdate", (meme, me) => {
    if (ch.includes(me.channel.id) && me.content.replace(re, "").length != 2) return bo.emit("message",me)
  })
  
bo.on("message", (me) => {
    if (me.author.id === bo.user.id) return;
if (ch.includes(me.channel.id) && me.content.replace(re, "").length !== 2) { me.delete()
.catch(() => me.channel.send("I couldn't delete your me because I don't have perms. Please make sure I can delete mes or tell your admins to do it")
) } else

    if (me.content.toLowerCase() === "!h") {
        const embed = new Discord.RichEmbed()
        .setAuthor("mm")
        .setTitle("an")
        .setDescription("ds")
        .setThumbnail("https://cdn.discordapp.com/attachments/494566294868459520/494568799853477888/magik.png")
        .addField("`!h`", "el", true)
        .addField("`!p`", "in", true)
        .addField("`!a`", "bo", true)
        .addField("`!d`", "ie", true)
        .addField("`!e`", "va", true)
        .addField("`!i`", "nv", true)
        .addField("`!s`", "et", true)
        .setFooter("ga")
          me.channel.send("Co", { embed });
    };

    if (me.content.toLowerCase() === '!p') {
        me.reply()
    }

    if (me.content.toLowerCase() === "!a") {
        var em = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/avatars/309667610591756289/232d0efd9a71e57798910859031de13b.png?size=2048")
        .setTitle("About me")
        .setDescription(`\`\`\`⚫ This bot is basically a tribute to a dead private bot from one of my fav youtubers' guild [(Krazyman50/KrmaL)](https://www.youtube.com/channel/UCeHCkgQgPgnyM_KAQ_U8z0w), which is also closed. 
⚫ The old bot changed your nick to the first 2 letters of your name when you joined (you also couldn't change it back), deleted all mes without two letters and was written in Python.
⚫ This one has commands and also deletes messages, but it must be set up first and it won't change your nick (since it's a public bot), has commands and is written in Node.js
⚫ To setup a channel do \`!s\` on it
\`\`\``)
        me.channel.send(em)
    }
    if (me.content.toLowerCase() === '!i') {
        me.channel.send('dm');
        const embed = new Discord.RichEmbed()
        .setTitle("<3")
        .setDescription("[li](https://discordapp.com/oauth2/authorize?client_id=494565465897566208&scope=bot&permissions=2146958591)")
          me.author.send("Ty", { embed });
    }

    if (me.content.toLowerCase() === '!d') {
        if (me.author.id !== co.ow) return me.channel.send('no');
            me.channel.send("ok").then(() =>
            process.exit()
        )
    }
    if (me.content.toLowerCase().startsWith('!e')) {
        if (me.author.id !== co.ow) return me.channel.send('no');

        try {
            function clean(text) {
                if (typeof (text) === "string")
                    return text.replace(/`​/g, "`​" + String.fromCharCode(8203)).replace(/@​/g, "@​" + String.fromCharCode(8203));
                else
                    return text;
            }
            const code = me.content.slice(2) 
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            me.channel.send(clean(evaled), { code: "xl" });
        } catch (error) {
            me.channel.send(clean(error), { code: "xl" })
        }
    }

    if (me.content.toLowerCase() === "!s") { try{
        function sa(ve) {
            ch = ve
            var fs = require("fs")
            fs.writeFile('./ch.json', JSON.stringify(ch, null, 2), function (error) {
                if (error) {
                    return me.channel.send(`:fixbug: \`\`\`${error.stack}\`\`\``);
                }
            })
            return me.channel.send("ep").then(() => me.channel.send("ic"))
        }
        
        if (!me.member.hasPermission("MANAGE_CHANNELS")) return me.channel.send('no');

        if (ch.includes(me.channel.id)) return sa(ch.filter(id => id !== me.channel.id))
        sa((ch.join()+`,${me.channel.id}`).split(","))
    }
        catch (err) {
            return me.channel.send("`"+err+"`")
        }
    }

    

});
bo.login(co.to)
