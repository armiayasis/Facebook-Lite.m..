
const login = require("fca-unofficial");
const fs = require("fs");

// Credentials - Palitan mo ng iyong Facebook credentials
const credentials = {
  email: "your-email@example.com",
  password: "your-password"
};

// Login function
function startBot() {
  login(credentials, (err, api) => {
    if (err) {
      console.error("Login Error:", err);
      return;
    }

    console.log("Bot is now online!");

    // Save appstate para hindi na mag-login ulit
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));

    // Set options
    api.setOptions({
      listenEvents: true,
      logLevel: "silent",
      selfListen: false
    });

    // Listen for messages
    api.listenMqtt((err, event) => {
      if (err) {
        console.error("Listen Error:", err);
        return;
      }

      // Handle different event types
      switch (event.type) {
        case "message":
          handleMessage(api, event);
          break;
        case "message_reply":
          handleMessage(api, event);
          break;
      }
    });
  });
}

// Handle incoming messages
function handleMessage(api, event) {
  const message = event.body;
  const threadID = event.threadID;
  const senderID = event.senderID;

  console.log(`Message from ${senderID}: ${message}`);

  // Simple command handler
  if (message) {
    const cmd = message.toLowerCase();

    // Commands
    if (cmd === "hi" || cmd === "hello" || cmd === "hey") {
      api.sendMessage("👋 Hello! Kumusta ka? Ako si STAR Bot!", threadID);
    }
    else if (cmd === "help" || cmd === "commands") {
      const helpText = `📋 Available Commands:
• hi/hello - Greeting
• help - Show commands
• time - Current time
• joke - Random joke
• quote - Inspirational quote
• ping - Check bot status`;
      api.sendMessage(helpText, threadID);
    }
    else if (cmd === "time") {
      const now = new Date();
      api.sendMessage(`🕐 Current time: ${now.toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}`, threadID);
    }
    else if (cmd === "joke") {
      const jokes = [
        "Bakit mahirap makipag-date sa developer? Kasi puro bug ang iniisip! 😄",
        "Ano ang tawag sa programmer na laging late? Delayed execution! ⏰",
        "Bakit hindi sumasagot ang computer? Naka-sleep mode! 💤"
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      api.sendMessage(randomJoke, threadID);
    }
    else if (cmd === "quote") {
      const quotes = [
        "\"The only way to do great work is to love what you do.\" - Steve Jobs",
        "\"Code is like humor. When you have to explain it, it's bad.\" - Cory House",
        "\"First, solve the problem. Then, write the code.\" - John Johnson"
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      api.sendMessage(`💭 ${randomQuote}`, threadID);
    }
    else if (cmd === "ping") {
      api.sendMessage("🏓 Pong! Bot is active and running!", threadID);
    }
    else if (cmd.startsWith("echo ")) {
      const echoText = message.substring(5);
      api.sendMessage(`🔊 ${echoText}`, threadID);
    }
    else {
      // Auto-reply for unknown commands
      api.sendMessage(`💬 Nakatanggap ako ng: "${message}"\nType "help" para sa available commands.`, threadID);
    }
  }
}

// Check if appstate exists
if (fs.existsSync('appstate.json')) {
  console.log("Using saved appstate...");
  login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) {
      console.error("Appstate Login Error:", err);
      console.log("Trying fresh login...");
      startBot();
      return;
    }

    console.log("Bot is now online (using appstate)!");

    api.setOptions({
      listenEvents: true,
      logLevel: "silent",
      selfListen: false
    });

    api.listenMqtt((err, event) => {
      if (err) {
        console.error("Listen Error:", err);
        return;
      }

      switch (event.type) {
        case "message":
          handleMessage(api, event);
          break;
        case "message_reply":
          handleMessage(api, event);
          break;
      }
    });
  });
} else {
  console.log("No appstate found. Starting fresh login...");
  startBot();
}
