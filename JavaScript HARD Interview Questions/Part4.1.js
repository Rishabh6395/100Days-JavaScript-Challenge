// Throttle

function throttle(fn, delay){
    let lastCall = 0;

    return function(...ags){
        const now = Date.now()
        if(now - lastCall < delay){
            return
        }
        lastCall = now
        return fn(...ags)
    }
}

function sendChatMessage(message){
    console.log(`Sending Message`, message)
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000)

sendChatMessageWithSlowMode("Hi")
sendChatMessageWithSlowMode("Hello")
sendChatMessageWithSlowMode("Hello ji")
sendChatMessageWithSlowMode("Hey kese ho")