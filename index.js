const TelegramBot = require('node-telegram-bot-api')

const token = '1114854329:AAGIXlmgZzvmdz16Av-w-wcd2-EVOjZnMSU'

const bot = new TelegramBot(token, {polling: true})
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'привет, это я Роман! дай присунуть')
})