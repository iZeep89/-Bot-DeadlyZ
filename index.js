const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('NTI2MjIwMzAwNDMwMzQ0MjAy.DwCDzg.G8VXFoIBw1VLquYt9laY6G7jZ4A');

client.on('message', message =>{
    if(message.content === "le serveur ouvre quand ?"){
        message.channel.sendMessage('Le serveur ouvre début 2019 !');
        console.log('répond à louverture');
    }
});

client.on('message', message =>{
    if(message.content === "Bonjour"){
        message.channel.sendMessage('Bonjour jeune survivant !');
        console.log('bjr');
    }
});

client.on('message', message =>{
    if(message.content === "bonjour"){
        message.channel.sendMessage('Bonjour jeune survivant !');
        console.log('bjr');
    }
});

client.on('message', message =>{
    if(message.content === "Coucou"){
        message.channel.sendMessage('Coucou jeune survivant !');
        console.log('bjr');
    }
});

client.on('message', message =>{
    if(message.content === "coucou"){
        message.channel.sendMessage('Coucou jeune survivant !');
        console.log('bjr');
    }
});

client.on('message', message =>{
    if(message.content === ".info"){
        message.channel.sendMessage('Si tu as des questions à propos du serveur ---> <#494950558474567700>');
        console.log('.info');
    }
});

client.on('message', message => {
    if (message.content.includes("ouverture", "ouvre")) {
         message.channel.sendMessage("DeadlyZ > ALL");
    }
}); 
