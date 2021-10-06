import discord_logger from '../library/application.js';

let _ = new discord_logger('app_name', '${URL_DISCORD_CHANNEL_WEBHOOK_URL}');

_.to_discord('testing', 2000);