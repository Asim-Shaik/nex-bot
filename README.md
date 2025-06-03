# 🎵 Nex-Bot - Advanced Discord Music Bot

A feature-rich Discord music bot built with Discord.js v14 and discord-player, offering high-quality music streaming with an intuitive interface and extensive customization options.

## ✨ Features

### 🎶 Music Features

- **High-Quality Audio**: Support for YouTube, Spotify, SoundCloud, and more
- **Queue Management**: Add, remove, shuffle, and organize your music queue
- **Advanced Playback Controls**: Play, pause, skip, seek, volume control, and loop modes
- **Interactive Controls**: Button-based interface for easy music control
- **Search Functionality**: Search for tracks directly within Discord
- **Lyrics Support**: Display synchronized lyrics for currently playing tracks
- **Save Tracks**: Save your favorite tracks to your personal collection
- **History Tracking**: View recently played tracks
- **Audio Filters**: Apply various audio effects and filters

### 🛠️ Technical Features

- **Slash Commands**: Modern Discord slash command integration
- **Multi-language Support**: Built-in translation system
- **DJ Role Support**: Restrict music commands to specific roles
- **Auto-disconnect**: Automatically leave voice channels when inactive
- **Error Handling**: Comprehensive error management and logging
- **Configurable Settings**: Extensive customization options

## 📋 Requirements

- **Node.js**: Version 16.9.0 or higher
- **Discord Bot Token**: From Discord Developer Portal
- **FFmpeg**: For audio processing (included via ffmpeg-static)

## 🚀 Installation

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
TOKEN=your_discord_bot_token_here
```

### 4. Configuration

The bot configuration is handled in `config.js`. Key settings include:

```javascript
module.exports = {
  app: {
    token: process.env.TOKEN, // Bot token from .env
    global: true, // Global slash commands (true) or guild-specific (false)
    guild: "xxx", // Guild ID for guild-specific commands
    lang: "en", // Default language
    enableEmojis: false, // Enable custom emojis
  },

  opt: {
    maxVol: 200, // Maximum volume (%)
    volume: 50, // Default volume (%)
    leaveOnEmpty: true, // Leave when voice channel is empty
    leaveOnEmptyCooldown: 30000, // Cooldown before leaving (ms)
    leaveOnEnd: true, // Leave when queue ends
    leaveOnEndCooldown: 30000, // Cooldown before leaving (ms)
    spotifyBridge: true, // Enable Spotify support
  },
};
```

### 5. Discord Bot Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to "Bot" section and create a bot
4. Copy the bot token to your `.env` file
5. Enable the following bot permissions:
   - Send Messages
   - Use Slash Commands
   - Connect to Voice Channels
   - Speak in Voice Channels
   - Use Voice Activity

### 6. Invite Bot to Server

Generate an invite link with the following permissions:

- `applications.commands` (for slash commands)
- `bot` with necessary permissions listed above

## ▶️ Running the Bot

### Development

```bash
npm start
```

### Production (with PM2)

```bash
npm install -g pm2
pm2 start main.js --name "nex-bot"
```

## 🎵 Commands

### Music Commands

| Command         | Description                   | Usage                          |
| --------------- | ----------------------------- | ------------------------------ |
| `/play`         | Play a song or playlist       | `/play query:Song name or URL` |
| `/playnext`     | Add song to play next         | `/playnext query:Song name`    |
| `/pause`        | Pause current track           | `/pause`                       |
| `/resume`       | Resume playback               | `/resume`                      |
| `/skip`         | Skip current track            | `/skip`                        |
| `/stop`         | Stop playback and clear queue | `/stop`                        |
| `/queue`        | Display current queue         | `/queue`                       |
| `/nowplaying`   | Show currently playing track  | `/nowplaying`                  |
| `/volume`       | Adjust volume (0-200%)        | `/volume level:50`             |
| `/seek`         | Seek to specific time         | `/seek time:1:30`              |
| `/loop`         | Set loop mode                 | `/loop mode:track/queue/off`   |
| `/shuffle`      | Shuffle the queue             | `/shuffle`                     |
| `/clear`        | Clear the queue               | `/clear`                       |
| `/remove`       | Remove specific track         | `/remove position:3`           |
| `/jump`         | Jump to specific track        | `/jump position:5`             |
| `/back`         | Play previous track           | `/back`                        |
| `/skipto`       | Skip to specific track        | `/skipto position:3`           |
| `/search`       | Search for tracks             | `/search query:Song name`      |
| `/lyrics`       | Display lyrics                | `/lyrics`                      |
| `/syncedlyrics` | Display synchronized lyrics   | `/syncedlyrics`                |
| `/save`         | Save current track            | `/save`                        |
| `/history`      | View play history             | `/history`                     |
| `/filter`       | Apply audio filters           | `/filter name:bassboost`       |
| `/controller`   | Display music controller      | `/controller`                  |

### Core Commands

| Command | Description           | Usage   |
| ------- | --------------------- | ------- |
| `/help` | Show help information | `/help` |
| `/ping` | Check bot latency     | `/ping` |

## 🎛️ Interactive Controls

The bot features interactive button controls for easy music management:

- ⏯️ **Play/Pause**: Toggle playback
- ⏩ **Skip**: Skip to next track
- ⏪ **Back**: Play previous track
- 🔁 **Loop**: Cycle through loop modes
- 🔀 **Shuffle**: Shuffle the queue
- ⏹️ **Stop**: Stop playback
- 🔊/🔉 **Volume**: Adjust volume
- 💾 **Save**: Save current track
- 📋 **Queue**: View queue
- 📝 **Lyrics**: Display lyrics

## 🔧 Advanced Configuration

### DJ Role Setup

Enable DJ role restrictions in `config.js`:

```javascript
DJ: {
  enabled: true,
  roleName: "DJ",
  commands: ["skip", "stop", "clear", "shuffle"]
}
```

### Custom Emojis

Configure custom emojis in `config.js`:

```javascript
emojis: {
  back: "⏪",
  skip: "⏩",
  ResumePause: "⏯️",
  savetrack: "💾",
  volumeUp: "🔊",
  volumeDown: "🔉",
  loop: "🔁",
}
```

### Audio Quality Settings

Adjust audio quality in `config.js`:

```javascript
discordPlayer: {
  ytdlOptions: {
    quality: "highestaudio",
    highWaterMark: 1 << 25,
  },
}
```

## 🌐 Multi-language Support

The bot supports multiple languages through the translation system:

1. Set your preferred language in `config.js`:

   ```javascript
   lang: "es"; // Spanish, "fr" for French, etc.
   ```

2. Supported languages include: English, Spanish, French, German, Italian, Portuguese, and many more.

## 🐛 Troubleshooting

### Common Issues

**Bot not responding to commands:**

- Ensure the bot has proper permissions
- Check if slash commands are properly registered
- Verify the bot token is correct

**Audio not playing:**

- Ensure FFmpeg is properly installed
- Check voice channel permissions
- Verify the bot can connect to voice channels

**Commands not loading:**

- Check file structure in `commands/` directory
- Ensure all command files have proper exports
- Check console for loading errors

**Translation errors:**

- Verify internet connection for translation service
- Check language code validity
- Increase translation timeout if needed

### Error Logs

The bot provides detailed error logging. Check console output for:

- Command loading status
- Event registration
- Connection issues
- Audio streaming errors

## 📁 Project Structure

```
nex-bot/
├── commands/           # Slash commands
│   ├── music/         # Music-related commands
│   └── core/          # Core bot commands
├── events/            # Event handlers
│   ├── Discord/       # Discord.js events
│   └── Player/        # discord-player events
├── buttons/           # Interactive button handlers
├── config.js          # Bot configuration
├── main.js           # Entry point
├── loader.js         # Command/event loader
├── process_tools.js  # Utility functions
└── package.json      # Dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
