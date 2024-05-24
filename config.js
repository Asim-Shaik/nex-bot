module.exports = {
  app: {
    token: process.env.TOKEN,
    playing: "by the Community ❤️",
    global: true,
    guild: "xxx",
    extraMessages: false,
    loopMessage: false,
    lang: "en",
    Translate_Timeout: 10000,
    enableEmojis: false,
  },

  emojis: {
    back: "⏪",
    skip: "⏩",
    ResumePause: "⏯️",
    savetrack: "💾",
    volumeUp: "🔊",
    volumeDown: "🔉",
    loop: "🔁",
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "",
      commands: [],
    },
    maxVol: 200,
    spotifyBridge: true,
    volume: 50,
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 30000,
    leaveOnEnd: true,
    leaveOnEndCooldown: 30000,
    discordPlayer: {
      ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
