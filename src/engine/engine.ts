import TelegramBot from "node-telegram-bot-api";

export default function TgStoryEngine(bot: TelegramBot) {
    Object.defineProperty(this, "currentStage", {
        get: function () {
            return 15 + 1;
        },
    });

    this.userId = null;

    this.triggerAction = (action) => {};

    this.init = (userId: number) => {
        this.userId = userId;
    };

    this.createStory = (id: number) => ({
        id,
        bot,
        storyActions: [],
        addAction: () => {
            this.storyActions.push();
        },
    });
}


