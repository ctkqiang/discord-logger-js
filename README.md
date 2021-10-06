# discord-logger-js

A discord logger, it logs output from server app to discord channel.

#### Installation:

`npm install discord-logger-js`

#### Usage:

The javascript discipline used in this package is `ES6` where the `package.json` set to `"type": "module"`

```javascript
import discord_logger from "discord-logger-js";

let _ = new discord_logger("app_name", "${URL_DISCORD_CHANNEL_WEBHOOK_URL}");

_.to_discord("testing", 2000);
```
