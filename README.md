# Dad-Bot

This is a discord bot running on node.js, the bot has a plethera of features for those who need dad jokes in their discord server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to add this bot to your discord bot.

### Prerequisites

What things you need to install the software and how to install them

* Node.js
* A discord application and bot, [See refernce, I know it's for discord.py and not discord.js](https://discordpy.readthedocs.io/en/latest/discord.html)

### Setting Up Development Enviornemt

A step by step series of examples that tell you how to get a development enviornment running

Clone the repository
``` shell
$ git clone https://github.com/Mpult/Dad-Bot.git
```
Install modules
``` shell
$ npm install
```
Create .env file in the root directory with following content
``` .env
BOTTOKEN=Bot token from discord development portal
```
### Start the bot
Starting the bot is done with the following command:
``` shell
$ node index.js
```
### Bot Commands
Here is a list of commands/ features the bot has. (Commands are **not** case sensitive)
Command | Description
------- | ------------
?Help | Shows list of comands
?DadJoke | Shows a random dad-joke
?Flachwitz | Shows a random german dad-joke (AKA: Flachwitz)
?Codejoke or ?Codingjoke | Shows a random programming joke
Any message with i'm in it | Makes the classic "Hi hungry i'm dad!"
## Built With

* [Node.js](https://nodejs.org/en/) - The JavaScript framework used
* [Discord.js](https://discord.js.org/#/) - The Discord module

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/MPult/7edf9a696118889af0e3e103e9a4fae2) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

All notable changes to this project will be documented in the [changelog](https://github.com/Mpult/Dad-Bot/blob/main/.github/changelog.md).

The format is based on Keep a Changelog, and this project adheres to Semantic Versioning.

## Authors

* **Max** - *Initial work* - [Mpult](https://github.com/Mpult)

See also the list of [contributors](https://github.com/Mpult/dad-bot/contributors) who participated in this project.

## License
This project is licenced under the [CC0-1.0 License](https://github.com/MPult/Dad-Bot/blob/main/LICENSE) licence
