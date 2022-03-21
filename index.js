const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);


const charModMail = require('char-mod-mail');

client.on("ready", () => {
  charModMail.ModMail(client, {
    guildID: "952246623692529764",
    categoryID: "955124228850601985",
    staffRole: "954042123244675152",
    embedColor: "#00000",
    anonymousReply: false / true,
    closedTitle: "Your Mod Mail Has Been Closed",
    closedMessage: "A Staff Member Has Deleted You Mod Mail!",
    staffOpenedTitle: "User Opened Mod Mail",
    staffOpenedMessage: "The User Opened A Mod Mail And Is Now Wait For A Reply!",
    userOpenedTitle: "Mod Mail Created",
    userOpenedMessage: "You Created A Mod Mail Ticket!",
    wrongEmoji: "❌",
    rightEmoji: "✅"
  })
});
// Do not change anything here
require('http').createServer((req, res) => res.end(`
Bot Made By ProGamer1LOL#9254
`)).listen(3000) //Dont remove this 
