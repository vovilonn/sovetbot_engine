import TelegramBot from "node-telegram-bot-api";
import config from "./config.json";
import { TgStoryEngine } from "./src/engine";

const bot: TelegramBot = new TelegramBot(config.BOT_TOKEN, { polling: true });
const engine = new TgStoryEngine(bot);

bot.onText(/\/story/, (msg) => {
    engine.init(msg.from.id);
});

bot.onText(/action/, (msg) => {
    engine.init(msg.from.id);
    engine.triggerAction(engine.story[0]);
});

