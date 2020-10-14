const TelegramBot = require('node-telegram-bot-api')

const token = '1114854329:AAGIXlmgZzvmdz16Av-w-wcd2-EVOjZnMSU'

const bot = new TelegramBot(token, {polling: true})

bot.on('message', msg => {

    if(msg.sticker){
        //console.log(msg.sticker)
        //bot.sendSticker(msg.chat.id, 'CAACAgIAAx0CVbAfRQADV1-Giooz844zO1l4KpUxRZLvSHXvAAIaAAP1H_0b22zhZM1zp8UbBA')
    }
    if(msg.text){
        var TextMessage = msg.text.toUpperCase()
        var ArrayTextMessage = msg.text.split(' ')

        console.log('------------------------')
        console.log(TextMessage)
        console.log(msg.from.id)

        if(TextMessage.includes('ДА')&&msg.from.id=='908622506') bot.sendSticker(msg.chat.id, 'CAACAgIAAx0CVbAfRQADV1-Giooz844zO1l4KpUxRZLvSHXvAAIaAAP1H_0b22zhZM1zp8UbBA')

        if(ArrayTextMessage[0]=='РОМА'||ArrayTextMessage[0]=='РОМАН'){

            if(TextMessage.includes(" ИЛИ ")){

                var option1 = '', option2 = '', ili = false
                console.log(ArrayTextMessage)
                
                for(var i = 1; i < ArrayTextMessage.length; i++){
                    //console.log(2)
                    if(ArrayTextMessage[i].toUpperCase()=='ИЛИ') {
                        ili = true
                        
                        continue;
                    }
                    //console.log(3)
                    if(ili) {

                        option1 += ArrayTextMessage[i] + ' '
                    }
                    else    {
                        option2 += ArrayTextMessage[i] + ' '
                    }
                }
                //console.log(4)
                console.log(option1)
                ili =  Math.random() >= 0.5
                if(ili) bot.sendMessage(msg.chat.id, option1)
                else    bot.sendMessage(msg.chat.id, option2)
                //console.log(5)
            }
        }

    //if(msg.from.id == '783246134') bot.sendMessage(msg.chat.id, 'Аня, есть трибулус?')
    }
})