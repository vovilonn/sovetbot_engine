export function MessageAction(message: string, cb: Function) {
    return {
        type: "STORY/MESSAGE",
        message,
        cb,
    };
}
