/* Requirements */
const Discord = require('discord.js');
require('dotenv').config();
const mongoURI = "mongodb+srv://Bot:jynzKkRWShxVpjFk@stats.ms0ok.mongodb.net/Dad-Bot?retryWrites=true&w=majority"
const db = require('monk')(mongoURI) // Require monk for mongo db, use env var for uri
/* Definitons */
const client = new Discord.Client();
const jokes = require('./jokes.json')
const stats = db.get('stats') // point to statistics collection

db.catch(function(err) {
    console.log(err)
  });


client.on('ready', () => {
    //when bot is logged in
    console.log("Leroooooooy!");
    client.user.setActivity("Dad-bod? Nah Dad-Bot");
});

function updateStats(type) {
/* 
    Function to get and add one to counter in the DB
    | Name        | Doc   | Identifier |
    |-------------|-------|------------|
    | Im Dad      | iDad  | 1          |
    | Dad Joke    | dJoke | 2          |
    | Flachwitz   | fJoke | 3          |
    | Rickroll    | rRoll | 4          |
    | Coding Joke | cJoke | 5          | */
    switch (type) { // Change document depending on what int we call updateStats() with
        case 1:
            stats.find({Type: 'iDad'}).then((docs) => { //Find current value
                let newVal = parseInt(docs[0].Count) + 1 //Adding one to the old statistic
                stats.findOneAndUpdate({Type: 'iDad'}, { $set: { Count: newVal} }) // Set new value
            })
            break;
        case 2:
            stats.find({Type: 'dJoke'}).then((docs) => { //Find current value
                let newVal = parseInt(docs[0].Count) + 1 //Adding one to the old statistic
                stats.findOneAndUpdate({Type: 'dJoke'}, { $set: { Count: newVal} }) // Set new value
            })
            break;
        case 3:
            stats.find({Type: 'fJoke'}).then((docs) => { //Find current value
                let newVal = parseInt(docs[0].Count) + 1 //Adding one to the old statistic
                stats.findOneAndUpdate({Type: 'fJoke'}, { $set: { Count: newVal} }) // Set new value
            })
            break;
        case 4:
            stats.find({Type: 'rRoll'}).then((docs) => { //Find current value
                let newVal = parseInt(docs[0].Count) + 1 //Adding one to the old statistic
                stats.findOneAndUpdate({Type: 'rRoll'}, { $set: { Count: newVal} }) // Set new value
            })
            break;
        case 5:
            stats.find({Type: 'iDad'}).then((docs) => { //Find current value
                let newVal = parseInt(docs[0].Count) + 1 //Adding one to the old statistic
                stats.findOneAndUpdate({Type: 'iDad'}, { $set: { Count: newVal} }) // Set new value
            })
        default:
            break;
    }
}

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
            updateStats(1) //Update counter
        }
    }
});


client.on('message', msg => {
    //plain simple dadjoke
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == "?dadjoke") {
        const length = jokes.dadJokes.length
        let index = Math.floor(Math.random() * length)
        console.log('dad joke length: ' + length);
        console.log('dad joke index: ' + index);
        msg.reply(jokes.dadJokes[index]);
        updateStats(2) //Update counter
    }
})

client.on('message', msg => {
    //Simple grman dad joke (AKA: flachwitz)
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == "?flachwitz") {
        const length = jokes.flachwitz.length
        let index = Math.floor(Math.random() * length)
        console.log('flachwitz length: ' + length);
        console.log('flachwitz index: ' + index);
        msg.reply(jokes.flachwitz[index]);
        updateStats(3) //Update counter
    }
});

/* client.on('message', msg => {
    //Simple coding joke
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == "?codejoke") {
        const length = jokes.codingJoke.length
        let index = Math.floor(Math.random() * length)
        console.log('coding joke length: ' + length);
        console.log('coding joke index: ' + index);
        msg.reply(jokes.codingJoke[index]);
        updateStats(5)
    }
}); */

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == '?help') {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Here is a list of my commands:')
            .addFields(
                { name: '?dadjoke', value: 'This shows a random dad-joke'},
                { name: '?flachwitz', value: 'This shows a random german dad-joke (AKA: Flachwitz)'},
                { name: '?help', value: 'Shows this page, so meta!'},
//                { name: '?codejoke', value: 'Random coding joke'},
                { name: '?stats', value: 'Shows sick stats about me'}
            )
        msg.channel.send(embed);
    }
})

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.content.toLowerCase().includes('never')) {
      // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./neverGonnaGiveYouUp.mp3');
            dispatcher.resume();
            console.log('rick got rolled')

            dispatcher.on('error', error => {
                console.log(error)
            })
            dispatcher.on('finish', () => {
                connection.disconnect();
                console.log("done")
            })
            updateStats(4) //Update counter
        }
    }
});


client.on('message', msg => {
    //Sends facts about messages
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() === '?stats') {
        msg.channel.send("lkbn")
        stats.find({}).then((docs) => {
            console.log(docs)
            const embed = new Discord.MessageEmbed()
                .setTitle('Statistics')
                .setDescription('Here are some cool ass stats about me:')
                .addFields(
                    {
                        "name": "\"Hi hungry, I'm Dad\" Counter",
                        "value": docs[0].Count,
                        "inline": false
                    },
                    {
                        "name": "Dad Joke Counter",
                        "value": docs[1].Count,
                        "inline": false
                    },
                    {
                        "name": "Flachwitz Counter",
                        "value": docs[2].Count,
                        "inline": false
                    },
                    {
                        "name": "Rick Roll Counter",
                        "value": docs[3].Count,
                        "inline": false
                    }
/*                     {
                        "name": "Coding Joke Counter",
                        "value": docs[4].Count,
                        "inline": false
                    }  */
                )
            msg.channel.send(embed)
        })
    }
})
client.login(process.env.BOTTOKEN);