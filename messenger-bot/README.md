
# Facebook Messenger Bot using FCA-Unofficial

Simple Facebook Messenger bot na gumagamit ng `fca-unofficial` library.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   cd messenger-bot
   npm install
   ```

2. **Configure your Facebook credentials:**
   - Buksan ang `bot.js`
   - Palitan ang `your-email@example.com` at `your-password` ng iyong Facebook credentials
   
   ```javascript
   const credentials = {
     email: "your-email@example.com",  // ← Palitan ito
     password: "your-password"          // ← Palitan ito
   };
   ```

3. **Run the bot:**
   ```bash
   npm start
   ```

## Available Commands

Kapag nag-message ka sa bot, pwede mong gamitin ang mga commands na ito:

- `hi/hello` - Greeting message
- `help` - Show all available commands
- `time` - Get current time
- `joke` - Get a random joke
- `quote` - Get an inspirational quote
- `ping` - Check if bot is active
- `echo [text]` - Bot will echo your message

## Important Notes

⚠️ **Security:**
- Huwag i-share ang iyong `appstate.json` file (naka-gitignore na)
- Huwag i-commit ang iyong password sa Git
- Para mas secure, gumamit ng 2FA at app password

⚠️ **Facebook Policy:**
- Ang paggamit ng unofficial API ay laban sa Facebook Terms of Service
- Use at your own risk
- Para sa production bots, gamitin ang official Facebook Messenger Platform API

## Troubleshooting

Kung may error sa login:
1. Check kung tama ang email at password
2. Tanggalin ang `appstate.json` at subukan ulit
3. I-disable muna ang 2FA o gumamit ng app-specific password
4. Check kung na-block ng Facebook ang login attempt
