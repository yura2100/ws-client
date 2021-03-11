function processOutput(data) {
    const {channel, status, event, message} = data

    switch (event) {
        case 'add':
            if (status) {
                console.log(`You successfully added channel ${channel}`)
                return
            }

            console.log(`You can not add channel ${channel}`)
            return
        case 'delete':
            if (status) {
                console.log(`You successfully deleted channel ${channel}`)
                return
            }

            console.log(`You can not delete channel ${channel}`)
            return
        case 'join':
            if (status) {
                console.log(`You successfully joined channel ${channel}`)
                return
            }

            console.log(`You can not join channel ${channel}`)
            return
        case 'leave':
            if (status) {
                console.log(`You successfully left channel ${channel}`)
                return
            }

            console.log(`You can not leave channel ${channel}`)
            return
        case 'message':
            if (status) {
                console.log(`Channel ${channel}: ${message}`)
                return
            }

            console.log(`You can not write to channel ${channel}`)
            return
    }
}

module.exports = processOutput