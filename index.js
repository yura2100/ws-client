const WebSocket = require('ws')
const processInput = require('./input')
const processOutput = require('./output')

const ws = new WebSocket('ws://localhost:3000')

ws.onopen = () => processInput(ws, 'Enter your command:\n')
ws.onmessage = ({data}) => {
    const dataParse = JSON.parse(data)

    processOutput(dataParse)
}