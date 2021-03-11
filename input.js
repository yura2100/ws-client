const readline = require('readline')
const {addChannel, deleteChannel, joinChannel, leaveChannel, sendMessage} = require('./ws')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function input(question) {
    return new Promise(resolve => {
        rl.resume()
        rl.question(question, answer => {
            rl.pause()
            resolve(answer)
        })
    })
}

async function processInput(ws, question = '') {
    const sentence = await input(question)
    const words = sentence.split(' ')

    switch (words[0]) {
        case 'help':
            console.log(
                'List of commands:\n' +
                '1. Get help: help\n' +
                '2. Add channel: add <channel name>\n' +
                '2. Delete channel: delete <channel name>\n' +
                '4. Join channel: join <channel name>\n' +
                '5. Leave channel: leave <channel name>\n' +
                '6. Send message: sendto <channel name> <message>'
            )
            break
        case 'add':
            if (words[1]) {
                addChannel(ws, words[1])
                break
            }
            console.log('Please, specify channel you want to add:')
            break
        case 'delete':
            if (words[1]) {
                deleteChannel(ws, words[1])
                break
            }
            console.log('Please, specify channel you want to delete:')
            break
        case 'join':
            if (words[1]) {
                joinChannel(ws, words[1])
                break
            }
            console.log('Please, specify channel you want to join:')
            break
        case 'leave':
            if (words[1]) {
                leaveChannel(ws, words[1])
                break
            }
            console.log('Please, specify channel you want to leave:')
            break
        case 'sendto':
            if (words[1] && words[2]) {
                const restSentence = words.slice(2).join(' ')

                sendMessage(ws, { channel: words[1], message: restSentence })
                break
            }
            console.log('Please, specify channel you want to write to and write your message:')
            break
        default:
            console.log('Incorrect command, for help type: help')
            break
    }

    processInput(ws)
}

module.exports = processInput