import TelegramBot from "node-telegram-bot-api";

export interface MessageActionParams {
    bot: TelegramBot;
    chatId: number;
    msg: string;
    cb: Function;
}
