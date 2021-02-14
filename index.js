/* Requirements */
const Discord = require('discord.js');
require('dotenv').config();
/* Definitons */
const client = new Discord.Client();
const jokes = require('./jokes.json')

client.on('ready', () => {
    //when bot is logged in
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    //when msg is ping (testing purposes)
    if (msg.content === 'ping') {
    msg.reply('pong');
    }
});

client.on('message', msg => {
    //the old dad im hungry joke
    if (msg.author.bot) return; //only responds to real users
    let tokens = msg.content.split(" "); // splits msg into array by spaces
    console.log('msg: ' + tokens); 
    if (tokens.length > 1) {
        if (tokens[0].toLowerCase() == 'im' || tokens[0].toLowerCase() === "i'm") {
            let name = tokens.shift(); //remove im from array
            let nameString = tokens.join(' '); //makes msg into string
            console.log('name: ' + name)
            msg.reply(`hi ${nameString}, im dad`); //responds
        }
    }
});


client.on('message', msg => {
    //plain simple dadjoke
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == "?dadjoke") {
        const length = jokes.dadJokes.length
        let index = Math.floor(Math.random() * (1 + length - 0))
        console.log('dad joke length: ' + length);
        console.log('dad joke index: ' + index);
        msg.reply(jokes.dadJokes[index]);
    }
})

client.on('message', msg => {
    //Simple grman dad joke (AKA: flachwitz)
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == "?flachwitz") {
        const length = jokes.flachwitz.length
        let index = Math.floor(Math.random() * (length - 0))
        console.log('flachwitz length: ' + length);
        console.log('flachwitz index: ' + index);
        msg.reply(jokes.flachwitz[index]);
    }
});

client.on('message', msg => {
    //Simple coding joke
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == "?codejoke" || msg.content.toLowerCase() == '!codingjoke') {
        const length = jokes.codingJoke.length
        let index = Math.floor(Math.random() * (1 + length - 0))
        console.log('coding joke length: ' + length);
        console.log('coding joke index: ' + index);
        msg.reply(jokes.codingJoke[index]);
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == '?help') {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Here is a list of my commands:')
            .addFields(
                { name: '?dadjoke', value: 'This shows a random dad-joke'},
                { name: '?flachwitz', value: 'This shows a random german dad-joke (AKA: Flachwitz)'},
                { name: '?help', value: 'Shows this page, so meta!'}
            )
        msg.channel.send(embed);
    }
})
client.login(process.env.BOTTOKEN);