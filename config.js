module.exports = {
  app: {
    token: "ODUyNTA4NTg5OTg1ODkwMzM0.GHaKNR.HWtd-zU7ZDQCtuKbQwifK6ZXH1a294W3RgXrHY",
    playing: "?help",
    global: true,
    guild: "XXX",
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "",
      commands: [],
    },
    maxVol: 200,
    leaveOnEnd: true,
    loopMessage: false,
    spotifyBridge: true,
    defaultvolume: 75,
    discordPlayer: {
      ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
