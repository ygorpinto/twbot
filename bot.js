const { Chat, ChatEvents } = require("twitch-js");
const dotenv = require('dotenv');

dotenv.config();

// Provide your username and token secret keys from Server Control Panel (left).
// To generate tokens, use https://twitchtokengenerator.com.
const username = process.env.USERNAME;
const token = process.env.TOKEN;
const channel = "twitchjsci";

const run = async () => {
  const chat = new Chat({
    username,
    token
  });

  await chat.connect();
  await chat.join(channel);

  chat.on(ChatEvents.SUBSCRIPTION, (message) => {
    // Do stuff ...
  });
};

run();