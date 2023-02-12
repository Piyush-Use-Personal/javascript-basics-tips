const events = require('events')

const emitter = new events.EventEmitter()

const someRandomFunction = (data) => {
    console.log('heard an event!')
    console.log('having payload: ', data)
}

const someAnotherRandomFunction = (data) => {
    console.log('heard an event again!!')
    console.log('having payload: ', data)
}

emitter.on('heard', someRandomFunction)
emitter.on('heard', someAnotherRandomFunction)

emitter.emit('heard', {
    level: 1
})